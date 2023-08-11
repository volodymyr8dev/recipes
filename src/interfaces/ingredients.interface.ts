import {EstimatedCost, Nutrient} from "./IngredientInformation.interface";

export interface IngredientsInterface {
    results: Item[];
    offset: number;
    number: number;
    totalResults: number;
}

export interface Item {
    id: number;
    name: string;
    image: string;
}

export interface IIngredientsInitialState{
    basketItems:[
        {
                id: number;
                name: string;
                image: string;
        }
    ],
    i:number,
    obj:{
        results: Item[];
        offset: number;
        number: number;
        totalResults: number;
    },
    ingredientDetails:{
        data: {
            id: number;
            original: string;
            originalName: string;
            name: string;
            amount: number;
            unit: string;
            unitShort: string;
            unitLong: string;
            possibleUnits: string[];
            estimatedCost: EstimatedCost;
            consistency: string;
            shoppingListUnits: string[];
            aisle: string;
            image: string;
            meta: any[];
            nutrition: {
                nutrients: Nutrient[];
                caloricBreakdown: {
                    percentCarbs: number,
                    percentFat: number,
                    percentProtein: number,
                },
                weightPerServing: {
                    amount: number,
                    unit: string
                }
            };
        }
    }
}


export interface IIngredientsParams {
    query: string;
    offset: number;
}

export interface IIngredientsServices{
    results: Item[];
    offset: number;
    number: number;
    totalResults: number;
}
