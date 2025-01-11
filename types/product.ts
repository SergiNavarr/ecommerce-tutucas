type images = {
    url: string,
    id: number
}

export type ProductType = {
    active: boolean;
    description: string;
    documentId: string;
    gender: string;
    id: number;
    productName: string;
    images: [images];
    isFeatured: boolean;
    price: number;
    slug: string;
}