export type ImagesProductType = {
    id: number;
    attributes:{
        url: string;
    }
};

export type ProductType = {
    id: number;
    attributes: {
        active: boolean;
        description: string;
        documentId: string;
        gender: string;
        productName: string;
        images: {
            data: [ImagesProductType];
        };
        isFeatured: boolean;
        price: number;
        slug: string;
        category: {
            data: any;
        };
    };
};
