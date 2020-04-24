import { Diet, Type } from "./modifiers"

//placeholder recipe type, can be replaced later
export type Recipe={
    name:string,
    timeToPrepare:number,
    rating:number,
    diet: Diet,
    type: Type
    description: string,
    id: number
    //need to include image still

}