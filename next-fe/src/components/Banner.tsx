import { getPublicMediaUrl } from '@/actions'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  image: ThumbnailImage,
  className?: string
}

export const Banner = async ({ className, image }: Props) => {
  const { url, name } = image?.formats?.thumbnail
  const imageUrl = await getPublicMediaUrl(url)
  return <Image className={twMerge('', className && className)} height={1000} width={600} src={imageUrl as string} alt={name} />
}
