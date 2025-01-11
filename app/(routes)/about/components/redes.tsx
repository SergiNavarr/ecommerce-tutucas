import { Facebook, Instagram, Twitter } from "lucide-react";

const Redes = () => {

    const data = [
        {
            name: "Instagram",
            link: "https://www.instagram.com/tutucas_ctes/",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/leomessi",
        },
        {
            name: "Twitter",
            link: "https://x.com/leomessisite",
        }
    ]

    return ( 
        <div className="">
            <div className="flex justify-center items-center mt-6 sm:mt-12">
                <h2 className="text-2xl font-semibold">Redes sociales</h2>
            </div>
            
            <div className="flex w-full justify-center items-center gap-24 mt-4 sm:mt-12">
                <a href={data[0].link} target="_blank" className="cursor-pointer">
                    <Instagram size={40} />
                </a>
                <a href={data[1].link} target="_blank" className="cursor-pointer">
                    <Facebook size={40} />
                </a>
                <a href={data[2].link} target="_blank" className="cursor-pointer">
                    <Twitter size={40} />
                </a>
            </div>
        </div>
    );
}

export default Redes;