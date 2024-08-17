// Import axios and types from axios for response handling

interface Post {
    slug: string
    title: string
    publishDate?: Date
}

interface BlogPost extends Post {
    body: string;
    image: File;
    readTime?: number;
};

interface Video extends Post {
    video: File;
    videoDescription: string;
    duration?: number;
}

type Pagination = {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
}

type PaginatedResponse<T> = {
    data: T[];
    pagination: Pagination;
}
