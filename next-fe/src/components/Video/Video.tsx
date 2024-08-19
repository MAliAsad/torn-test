import { Thumbnail } from '@/components'
import _ from 'lodash'
import Link from 'next/link'

interface Props extends Video {}

export const Video = ({ title, slug, videoDescription }: Props) => {
  const capitalizedTitle = _.startCase(_.toLower(title))
  const content = videoDescription.slice(0, 160) + ' ...'
  return (
    <Link href={`/videos/${slug}`} className='shadow-sm bg-white border min-h-60 h-auto rounded-xl overflow-hidden flex flex-col md:flex-row'>
      {/* <Thumbnail
        className='h-32 md:h-full object-cover object-center min-w-[none] md:min-w-7 w-full md:w-1/3'
        image={image}
      /> */}
      <div className='flex p flex-col w-full md:w-2/3 p-4 gap-4'>
        <h2  className='text-xl font-bold'>{capitalizedTitle}</h2>
        <p>{content}</p>
        <p className='opacity-30 mt-auto self-end italic font-semibold'>Author: <span>David Charles</span></p>
      </div>
    </Link>
  )
}
