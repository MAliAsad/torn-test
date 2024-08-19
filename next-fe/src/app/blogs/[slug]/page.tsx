import { Banner } from '@/components/Banner'
import { getBlogThroughSlug } from '@/services'
import React from 'react'
import _ from 'lodash'

type Props = {
  params: {
    slug: string
  }
}

const page = async (props: Props) => {
  const data = await getBlogThroughSlug(props.params.slug)

  if(data instanceof Error) return <>{data?.message}</>

  const capitalizedTitle = _.startCase(_.toLower(data.title))

  return (
    <div className='container mx-auto'>
      <div className="my-7 flex flex-col">
        <Banner className='w-full max-h-96 h-auto object-cover rounded-xl border border-gray-400 drop-shadow-xl' image={data?.image}/>
        <h1 className='my-10 text-center text-4xl font-bold'>{capitalizedTitle}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  )
}

export default page