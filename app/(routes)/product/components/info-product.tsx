import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/fotmatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props : InfoProductProps) => {

    const {product} = props;
    const cart = useCart();
    const {addLoveItem, removeLoveItem, lovedItems} = useLovedProducts();

    const isInCart = ()=>{
        return cart.items.find((item) => item.id === product.id)
    }

    const isLoved = () =>{
        if(lovedItems.length === 0) return false;
        return lovedItems.find((item) => item.id === product.id)
    }


    const handleLoved = ()=>{
        if(isLoved()){
            removeLoveItem(product.id);
        }else{
            addLoveItem(product);
        }
    }

    return ( 
        <div className="px-6 mt-3 sm:mt-0">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl font-bold">{product.productName}</h1>
            </div>
            <Separator className="my-4"/>
            <p className="text-sm">{product.description}</p>
            <Separator className="my-4"/>
            <p className="my-4 text-2xl ">${formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">

                {
                    isInCart() ? 
                        <Button className="w-full bg-red-500" onClick={()=>cart.removeItem(product.id)}>Quitar de carrito</Button>
                    :   <Button className="w-full" onClick={()=>cart.addItem(product)}>Agregar al carrito</Button>
                }
                
                <Heart 
                    width={30} 
                    strokeWidth={1} 
                    className={cn("transition duration-300 cursor-pointer hover:fill-black", isLoved() && "fill-black")}
                    onClick={handleLoved}
                ></Heart>
            </div>
        </div>
    );
}

export default InfoProduct;