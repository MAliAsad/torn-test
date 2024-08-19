import ApiService, { type ApiResponseType } from "@/services/api"

interface VideoList {
  data: Video[],
  meta: Record<string, any>
}

const api = new ApiService()

export const getVideos = async (page?: number, pageSize?: number) => {
  try {
    const params = new URLSearchParams({
      ...(page && {['pagination[page]']: `${page}`}),
      ...(pageSize && {['pagination[pageSize]']: `${pageSize}`}),
    })

    const response: ApiResponseType<VideoList> = await api.get(`/videos?${params.toString()}`)
    
    if (response?.error != null) {
      throw new Error(response.error)
    }
    
    return response?.data?.data
  } catch (error: any) {
    return new Error(`There was an error fetching the videos: ${error.message}`)
  }
}