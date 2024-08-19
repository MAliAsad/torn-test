import toast from "react-hot-toast"
import ApiService, { type ApiResponseType } from "@/services/api"

interface BlogPostList {
  data: BlogPost[],
  meta: Record<string, any>
}

const api = new ApiService()

export const getBlogs = async (page?: number, pageSize?: number) => {
  try {
    const params = new URLSearchParams({
      ...(page && {['pagination[page]']: `${page}`}),
      ...(pageSize && {['pagination[pageSize]']: `${pageSize}`}),
    })

    const response: ApiResponseType<BlogPostList> = await api.get(`/blogs?${params.toString()}`)
    
    if (response?.error != null) {
      throw new Error(response.error)
    }
    
    return response?.data?.data
  } catch (error: any) {
    toast.error(`There was an error fetching the blogs: ${error.message}`)
  }
}