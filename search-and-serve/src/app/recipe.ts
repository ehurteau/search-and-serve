import { Diet, Type } from "./modifiers"
import { Ingredient } from './ingredient'

export type Recipe = {
    id: number,
    title: string,
    author: string,
    timeToPrepare: number, // in minutes
    rating: { avgRating: number, numberOfRatings: number },
    diet: Diet,
    type: Type,
    description: string,
    ingredients: Map<Ingredient, { quantity: number, measurement: string }>, // map of Ingredients and quantity/measurement of each
    instructions: string
    imageURL: string,
}