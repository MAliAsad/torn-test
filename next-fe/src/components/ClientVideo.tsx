'use client'

import React from 'react'

type Props = {
  className?: string
  controls?: boolean
  videoUrl: string
}

export const ClientVideo = ({ videoUrl, className, controls = false }: Props) => {
  return <video className={className ?? ''} controls={controls} src={videoUrl}></video>
}

