import mitt from 'mitt'
import type * as EmitterNames from './eventNames'

// eslint-disable-next-line ts/consistent-type-definitions
type Events = {
  [EmitterNames.Event_Name]: string
}

// https://github.com/developit/mitt
export const Emitter = mitt<Events>()
