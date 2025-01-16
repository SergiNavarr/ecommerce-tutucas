"use client";

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { useParams } from "next/navigation";
import SkeletonProduct from "../components/skeleton-product";
import CarouselProduct from "../components/carousel-product";
import { ProductType } from "@/types/product";
import InfoProduct from "../components/info-product";


export default function Page() {
    const params = useParams();

    const { productSlug } = params;

    const {result , loading} = useGetProductBySlug(productSlug);

    if(result === null || loading){
        return <SkeletonProduct />
    }

    const producto : ProductType = Array.isArray(result) ? result[0] : result;

    console.log(producto.attributes.images)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct data={producto.attributes.images.data}/> 
                </div>
                <div>
                    <InfoProduct product={producto}/>
                </div>
            </div>
        </div>
    )
}