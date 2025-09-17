enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export const useApiService = () => {
  const config = useRuntimeConfig()
  const xsrfToken = useCookie('XSRF-TOKEN')

  const baseURL = `${config.public.apiBaseUrl}/api`

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
        'X-XSRF-TOKEN': String(xsrfToken.value) ?? null,
      },
      credentials: 'include',
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
