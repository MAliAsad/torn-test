import { Thumbnail } from '@/components'
import _ from 'lodash'
import Link from 'next/link'

interface Props extends BlogPost {}

export const Blog = ({ image, title, slug }: Props) => {
  const capitalizedTitle = _.startCase(_.toLower(title))
  return (
    <Link href={`/blogs/${slug}`} className='relative shadow-sm bg-white border min-h-60 h-auto rounded-xl overflow-hidden flex flex-col md:flex-row'>
      <Thumbnail
        className='absolute inset-0 w-full h-full object-cover object-center min-w-[none]'
        image={image}
      />
      <div className='relative flex justify-end blog_card_overlay_gradient flex-col p-4 gap-2 text-gray-200 w-full translate-y-10 hover:translate-y-0 duration-300'>
        <h2  className='text-2xl font-bold'>{capitalizedTitle}</h2>
        <p className=''>Author: <span>Anonymous</span></p>
      </div>
    </Link>
  )
}
