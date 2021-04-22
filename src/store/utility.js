export const updateObject = (updateObject, updateProperties) =>{
    return{
        ...updateObject, 
        ...updateProperties
    }
}