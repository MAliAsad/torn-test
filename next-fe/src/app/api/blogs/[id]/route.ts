
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const queryParams = new URLSearchParams({
        populate: '*'
    })
    const data = await fetch(`${process.env.BASE_URL}/blogs/${params.id}?${queryParams.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
        }
    }).then(res => res.json())

    return Response.json(data)
}