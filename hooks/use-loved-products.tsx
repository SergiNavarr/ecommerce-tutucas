import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {ProductType} from "@/types/product";
import { toast } from "./use-toast";

interface UseLovedProductsType{
    lovedItems: ProductType[],
    addLoveItem: (data: ProductType) => void,
    removeLoveItem: (id : number) => void
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set,get) => ({
    lovedItems: [],
    addLoveItem: (data) => {
        const currentItems = get().lovedItems;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if(existingItem){
            return toast({
                title: "el producto ya esta entre tus favoritos",
                variant: "destructive"
            })
        }

        set({
            lovedItems: [...get().lovedItems, data] 
        })

        toast({
            title: "producto agregado a tus favoritos"
        })
    },
    removeLoveItem: (id) =>{
        set({
            lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
        })

        toast({
            title: "producto eliminado de tus favoritos",
            variant: "destructive"
        })
    }
}),{
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage),
}))