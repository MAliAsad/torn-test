import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const data = await fetch(`${process.env.BASE_URL}/blogs?${searchParams.toString()}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
            }
        }).then(res => res.json())

        const newData = data.data.map(({ id, attributes: { title, slug, publishDate, body, readTime, image } }: any) => {

            const { name, width, height, formats } = image?.data?.attributes
            return {
                id, title, slug, publishDate, body, readTime,
                image: {
                    name, width, height, formats
                }
            }
        })

        return Response.json({
            status: 'success',
            data: newData
        })

    } catch (error: any) {
        return new Response(`Error fetching blogs: ${error.message}`, { status: 500 })
    }
}