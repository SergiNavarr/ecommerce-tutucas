"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/fotmatPrice";
import CartItem from "./components/cart-item";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMercadoPago } from "@/api/useMercadoPago";


export default function Page() {

    const { items } = useCart();

    const router = useRouter();

    const prices = items.map(item => item.price);
    const totalPrice = prices.reduce((total, price) => total + price, 0);

    const [preference, setPreference] = useState<any>([]);

    useEffect(() => {
        setPreference( items.map(item => (
            {
                id : item.id.toString(),
                title : item.productName,
                quantity : 1,
                unit_price : item.price,
            
            })
        ))
    }, [items]);


    const handleClick = async () => {

        if (items.length === 0) {
            alert("No hay productos en el carrito");
            return;
        }
        useMercadoPago(preference);
    }


    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 &&
                        <p>No hay productos en el carrito</p>
                    }
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>

                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Sumario:</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p className="mb-3 text-lg font-semibold">Total: </p>
                            <p>${formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button className="w-full" onClick={handleClick}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}