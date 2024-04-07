import type { Data, UserInfo } from './index.d'

export { Data, UserInfo }

export function testApi(data: Data) {
  return request<Res<UserInfo>>('/test', {
    data,
  })
}
