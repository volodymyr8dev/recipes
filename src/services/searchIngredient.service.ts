import {axiosInstance, AxiosRes} from "./axios";
import {urls} from "../configs";
import {IngredientsInterface} from "../interfaces/ingredients.interface";
import {IIngredientInfo} from "../interfaces/IngredientInformation.interface";

const searchIngredientService = {
    getIngredients:(query:string,offset:number):AxiosRes<IngredientsInterface>=>axiosInstance.get(`${urls.ingredients}${urls.auth.apiKey}&query=${query}&offset=${offset}`),

    getIngredientInfo:(id:number):AxiosRes<IIngredientInfo>=>axiosInstance.get(`${urls.ingredientInfo}/${id}/information${urls.auth.apiKey}&amount=100&unit=grams`)
}

export {searchIngredientService}