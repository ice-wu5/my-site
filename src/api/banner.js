import { request } from '@/utils/index'

export async function getBanners () {
  try {
    const resp = await request.get('/api/banner')
    return resp
  } catch (error) {
    return Promise.reject(error)
  }
}

// getBanners()
