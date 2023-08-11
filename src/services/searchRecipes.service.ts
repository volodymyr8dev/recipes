import {axiosInstance, AxiosRes} from "./axios";
import {findByIngredientsInterface, InformationInterface, RecipesInterface} from "../interfaces";
import {urls} from "../configs";

const searchRecipesService ={
    getSearchRecipes : (query:string, cuisine: string, diet:string, type: string, offset:number):AxiosRes<RecipesInterface>=>axiosInstance.get
    (`${urls.searchRecipes}${urls.auth.apiKey}&query=${query}&cuisine=${cuisine}&diet=${diet}&addRecipeInformation=true&instructionsRequired=true&type=${type}&offset=${offset}`),

    getRecipeByID : (id:number):AxiosRes<InformationInterface> => axiosInstance.get(`recipes/${id}/${urls.information}${urls.auth.apiKey}`),

    getRecipeByIngredients: (ingredients:string):AxiosRes<findByIngredientsInterface> => axiosInstance.get(`${urls.findByIngredients}${urls.auth.apiKey}&ingredients=${ingredients}&number=100`)
}

export {searchRecipesService}

