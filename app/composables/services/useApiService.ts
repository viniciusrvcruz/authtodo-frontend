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

  const request = async <T>(
    method: Method,
    url: string,
    payload?: object,
    options?: object
  ): Promise<T> => {
    return $fetch<T>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': String(xsrfToken.value) ?? null,
      },
      credentials: 'include',
      method,
      ...(method === Method.GET ? { query: payload } : { body: payload }),
      baseURL,
      ...options,
    })
  }

  const get = <T>(url: string, query?: object, options?: object): Promise<T> => {
    return request<T>(Method.GET, url, query, options)
  }

  const post = <T>(url: string, body?: object, options?: object): Promise<T> => {
    return request<T>(Method.POST, url, body, options)
  }

  const put = <T>(url: string, body: object, options?: object): Promise<T> => {
    return request<T>(Method.PUT, url, body, options)
  }

  const del = <T>(url: string, options?: object): Promise<T> => {
    return request<T>(Method.DELETE, url, options)
  }

  return {
    get,
    post,
    put,
    del,
  }
}
