import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const data = await fetch(`${process.env.BASE_URL}/videos?${searchParams.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
        }
    }).then(res => res.json())

    return Response.json(data)
}