import { Blog, Button } from '@/components'
import { getBlogs } from '@/services'
import Link from 'next/link'

export default async function Home() {
  const blogs = await getBlogs(1, 3)
  return (
    <main className='container mx-auto p-4'>
      <section className='flex flex-col'>
        <h2 className='text-4xl font-semibold text-center mb-6'>Recent Blog Posts</h2>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {blogs?.map(blog => (
            <Blog key={blog.id} {...blog} />
          ))}
        </div>
        <div className='flex'>
          <Link className='my-4 mx-auto' href={'/blogs'}>
            <Button >See All Blogs</Button>
          </Link>
        </div>
      </section>
      <section className='flex flex-col'>
        <h2 className='text-4xl font-semibold text-center mb-6'>Recent Videos</h2>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {blogs?.map(blog => (
            <Blog key={blog.id} {...blog} />
          ))}
        </div>
        <div className='flex'>
          <Link className='my-4 mx-auto' href={'/blogs'}>
            <Button >See All Blogs</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
