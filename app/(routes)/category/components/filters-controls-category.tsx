import FilterGender from "./filter-gender";

type FiltersControlsGenderProps = {
    setFilterGender: (category: string) => void;
}


const FiltersControlsCategory = (props : FiltersControlsGenderProps) => {

    const {setFilterGender} = props;

    return (
        <div className="sm:w-[350] sm:mt-5">

            <FilterGender setFilterGender={setFilterGender}/>

        </div>
    );
}

export default FiltersControlsCategory;