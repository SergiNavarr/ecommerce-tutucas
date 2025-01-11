import { useProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FiltersControlsGenderProps = {
    setFilterGender: (category: string) => void;
}

const FilterGender = (props : FiltersControlsGenderProps) => {
    const {setFilterGender} = props;
    const {result, loading}  = useProductField();

    return ( 
        <div className="my-5">
            <p className="mb-3 font-bold">Género</p>
            {loading && <p>Cargando...</p>}

            <RadioGroup onValueChange={(value) => setFilterGender(value)}>
                {result !== null && result.schema.attributes.gender.enum.map((gender : string) => (
                    <div key= {gender} className="flex items-center space-x-2">
                        <RadioGroupItem value={gender} id={gender}/>
                        <Label htmlFor={gender}>{gender}</Label>
                    </div>
                ))}
            </RadioGroup>

        </div>
    );
}

export default FilterGender;