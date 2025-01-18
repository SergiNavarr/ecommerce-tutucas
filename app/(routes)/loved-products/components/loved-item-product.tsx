import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/fotmatPrice";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeLoveItem } = useLovedProducts();
    const cart = useCart();

    const isInCart = cart.items.find((item) => item.id === product.id);

    console.log(product);

    return (
        <li className="flex py-6 border-b">
            
            <div onClick={() => router.push(`/product/${product.attributes.slug}`)} className="cursor-pointer">
                <img
                    src={`${product.attributes.images.data[0].attributes.url}`}
                    alt={product.attributes.productName}
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                />
            </div> 
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p>${formatPrice(product.attributes.price)}</p>
                    <div className="flex justify-between gap-3">
                        <p className="px-2 py-1 text-xs text-white"></p>
                        {
                            !isInCart ?
                                <Button className="mt-6 rounded-full" onClick={() => cart.addItem(product)}>Anadir al carrito</Button> :
                                <Button className="mt-6 rounded-full bg-red-500" onClick={() => cart.removeItem(product.id)}>Quitar del carrito</Button>
                        }
                    </div>
                </div>
                <div>
                    <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition">
                        <X size={20} onClick={() => removeLoveItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default LovedItemProduct;