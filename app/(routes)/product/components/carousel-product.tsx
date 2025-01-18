import { Carousel,  CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductProps {
    data:[{
        "id": number,
        "attributes": {
        "url": string,
        }
        
    }];
}

const CarouselProduct = (props : CarouselProductProps) => {
    const {data} = props;

    if(!Array.isArray(data) || data.length < 1){
        return <div>No hay imágenes</div>
    } 

    return ( 
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {data.map((image) => (
                        <CarouselItem key={image.id}>
                            <img src={`${image.attributes.url}`} alt="Image Product" className="rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export default CarouselProduct;