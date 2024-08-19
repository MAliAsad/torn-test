export async function GET() {
  try {
    const queryParams = new URLSearchParams({
      populate: '*'
    })
    const data = await fetch(
      `${process.env.BASE_URL}/videos?${queryParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
      }
    ).then(res => res.json())

    return Response.json({
      status: 'success',
      data: { data: data ?? {}, meta: data.meta },
      error: null
    })
  } catch (error: any) {
    return Response.json({
      status: 'error',
      data: null,
      error: error.message
    })
  }
}
