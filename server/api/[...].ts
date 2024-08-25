import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  // Get the runtime config proxy url
  const config = useRuntimeConfig()
  const proxyUrl = config.public.apiUrl
  // check the path
  const path = event.path.replace(/^\/api\//, '')
  const target = joinURL(proxyUrl, path)
  
  return proxyRequest(event, target)
})