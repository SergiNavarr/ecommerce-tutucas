"use client";

import { useCategoryProduct } from "@/api/getCategoryProduct";
import { useParams, useRouter } from "next/navigation";
import { ResponseType } from "@/types/response";
import { Separator } from "@/components/ui/separator";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {

    const params = useParams();
    const { categorySlug } = params;

    const { result, loading }: ResponseType = useCategoryProduct(categorySlug);

    const router = useRouter();

    const [filterGender, setFilterGender] = useState('');

    const filteredProducts = result !== null && !loading && (
        filterGender == '' ? result : result.filter((product: ProductType) => product.gender === filterGender)
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {Array.isArray(result) && result.length > 0 && !loading && (
                <h1 className="text-3xl font-medium"> {result[0].category.categoryName}</h1>
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterGender={setFilterGender}/>

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p className="text-center">No hay productos con este filtro</p>
                    )}
                </div>
            </div>
        </div>
    )
}