'use server'

export const getPublicMediaUrl = async (url: string) => {
  try {
    const serverUrl = `${process.env.PUBLIC_URL}${url}`
    return serverUrl
  } catch (error: any) {
    console.log('Error getting image from server',error.message)
  }
}