import {InformationInterface} from "./information.interface";
import {findByIngredientsInterface} from "./findByIngredients.interface";

export interface RecipesInterface{
    "id": number,
    "title": string,
    "image"?: string,
    "imageType": string,
    "readyInMinutes": number,
    "aggregateLikes": number,
    "type":string,
    offset:number
}

export interface IRecipeInitialState{
    basketRecipes: {
        data: findByIngredientsInterface[]

    },
    recipes: RecipesInterface[],
    offset: number,
    totalResults: number,
    recipeDetails:InformationInterface
}

export interface IRecipesServices{
    results: RecipesInterface[],
    "offset": number,
    "number": number,
    totalResults: number
}

export interface IParams {
    query: string;
    cuisine: string;
    diet:string;
    type:string;
    offset:number
}
