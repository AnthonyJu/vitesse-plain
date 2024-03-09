import mitt from 'mitt'

type Handler<T = unknown> = (event: T) => void

// eslint-disable-next-line ts/consistent-type-definitions
type Events = {
  Event_Name: string
}

// https://github.com/developit/mitt
export const Emitter = mitt<Events>()

export function useEmitter<Key extends keyof Events>(name: Key, handler: Handler<Events[Key]>) {
  Emitter.on(name, handler)

  onUnmounted(() => {
    Emitter.off(name, handler)
  })
}
