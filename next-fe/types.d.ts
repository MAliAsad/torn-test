interface Post {
  slug: string
  title: string
  publishDate?: Date
}

interface ThumbnailImage {
  name: string
  width: number
  height: number
  formats: Record<string, any>
}

interface BlogPost extends Post {
  id: number
  title: string
  slug: string
  publishDate: Date
  body: string
  readTime: number
  image: ThumbnailImage
}

interface Video extends Post {
  video: File
  videoDescription: string
  duration?: number
}
