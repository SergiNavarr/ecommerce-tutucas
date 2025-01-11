export type FilterType = {
    result : ResultFilterType,
    loading :boolean,
    error: string
}

export type ResultFilterType = {

    schema:{
        attributes:{
            gender:{
                enum: any;
            }
        }
    }
}