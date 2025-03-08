export function fakeFetch(url: string, opts: RequestInit) {

  // mock server processing of auth data (return the same thing basically that was sent)
  
  const responseTime = Math.random() * 700 + 300
  
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(new Response(opts.body))
    }, responseTime)
  })

}
