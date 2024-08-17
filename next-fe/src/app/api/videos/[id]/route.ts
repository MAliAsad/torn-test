
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const data = await fetch(`${process.env.BASE_URL}/videos/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
        }
    }).then(res => res.json())

    return Response.json(data)
}