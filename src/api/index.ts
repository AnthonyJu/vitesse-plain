/// <reference path="./index.d.ts" />

export function testApi(data: Data) {
  return request<Res<UserInfo>>('/test', {
    data,
  })
}
