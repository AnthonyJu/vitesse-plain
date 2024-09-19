import type { Emitter as EmitterType, EventHandlerList, EventType, Handler } from 'mitt'
import mitt from 'mitt'

// https://github.com/developit/mitt

export const Emitter = mittPro<EmitterEvents>()

export function useEmitter<Key extends keyof EmitterEvents>(
  name: Key,
  handler: Handler<EmitterEvents[Key]>,
) {
  Emitter.on(name, handler)

  onActivated(() => {
    Emitter.on(name, handler)
  })

  onDeactivated(() => {
    Emitter.off(name, handler)
  })

  onUnmounted(() => {
    Emitter.off(name, handler)
  })
}

// 支持 once 和 emitRes 的 mitt
function mittPro<Events extends EmitterEvents>() {
  const mitter = mitt()

  // @ts-expect-error - this is a hack to make the emitter work once
  mitter.once = function (name, handle) {
    mitter.on(name, handle)
    mitter.on(name, mitter.off.bind(mitter, name, handle))
  }

  // @ts-expect-error - this is a hack to make the emitter have a return value
  mitter.emitRes = <Key extends keyof Events>(type: Key, evt: Events[Key]): any => {
    const handlers = mitter.all!.get(type as EventType)
    if (handlers) {
      return (handlers as EventHandlerList<Events[keyof Events]>)
        .slice()
        .map(handler => handler(evt!))
    }
  }

  return mitter as unknown as {
    once: <Key extends keyof Events>(name: Key, handler: Handler<Events[Key]>) => void
    emitRes: <Key extends keyof Events>(type: Key, evt: Events[Key]) => any
  } & EmitterType<Events>
}
