import { Separator } from "@/components/ui/separator";
import QuienesSomos from "./components/quienes-somos";
import Redes from "./components/redes";

export default function Page() {
    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold">Sobre nosotros</h1>
            <Separator/>
            <QuienesSomos />
            <Redes/>
        </div> 
    )
}