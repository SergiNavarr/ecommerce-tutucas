import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu strokeWidth="1" className="cursor-pointer" />
            </PopoverTrigger>

            <PopoverContent>
                <Link href="/category/clothing" className="block"> Ropa</Link>
                <Link href="/category/footwear" className="block"> Calzado</Link>
                <Link href="/category/accesories" className="block"> Accesorios</Link>
            </PopoverContent>
        </Popover>
    );
}
export default ItemsMenuMobile;