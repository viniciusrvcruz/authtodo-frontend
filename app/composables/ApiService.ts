import runtimeConfig from "~/utils/runtimeConfig"

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export const useApiService = () => {
  const config = runtimeConfig()
  const baseURL = `${config.apiBaseURL}/api`

  const request = (
    method: Method,
    url: string,
    payload?: object,
    options?: object
  ) => {
    return $fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method,
      ...(method === Method.GET ? {query: payload} : {body: payload}),
      baseURL,
      ...options,
    })
  }

  const get = (url: string, query?: object, options?: object) => {
    return request(Method.GET, url, query, options)
  }

  const post = (url: string, body: object, options?: object) => {
    return request(Method.POST, url, body, options)
  }

  const put = (url: string, body: object, options?: object) => {
    return request(Method.PUT, url, body, options)
  }

  const del = (url: string, options?: object) => {
    return request(Method.DELETE, url, options)
  }

  return {
    get,
    post,
    put,
    del,
  }
}
