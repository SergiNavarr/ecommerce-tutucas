type images ={
        id: number;
        attributes: {
            url: string;
        }  
}

export type CategoryType = {
    id: number;
    attributes: {
        categoryName: string;
        slug: string;
        documentId: string;
        mainImage:{
            data: images
        }
    };
}