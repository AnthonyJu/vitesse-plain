import mitt from 'mitt'
import type { Emitter as EmitterType, EventHandlerMap, Handler } from 'mitt'

// https://github.com/developit/mitt

export const Emitter = mittWithOnce<EmitterEvents>()

export function useEmitter<Key extends keyof EmitterEvents>(
  name: Key,
  handler: Handler<EmitterEvents[Key]>,
) {
  Emitter.on(name, handler)

  onUnmounted(() => {
    Emitter.off(name, handler)
  })
}

function mittWithOnce<Events extends EmitterEvents>(all?: EventHandlerMap<Events>) {
  const mitter = mitt(all)
  // @ts-expect-error - this is a hack to make the emitter work once
  mitter.once = function (name, handle) {
    mitter.on(name, handle)
    mitter.on(name, mitter.off.bind(mitter, name, handle))
  }
  return mitter as unknown as {
    once: <Key extends keyof Events>(name: Key, handler: Handler<Events[Key]>) => void
  } & EmitterType<Events>
}
