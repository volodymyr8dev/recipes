export interface findByIngredientsInterface {
    id: number,
    image: string,
    imageType: string,
    likes: number,
    missedIngredientCount: number,
    missedIngredients: Ingredient[],
    title: string,
    unusedIngredients: any[],
    usedIngredientCount: number,
    usedIngredients: Ingredient[]
}

 export interface Ingredient {
    aisle: string,
    amount: number,
    id: number,
    image: string,
    meta: string[],
    name: string,
    original: string,
    originalName: string,
    unit: string,
    unitLong: string,
    unitShort: string
}

export interface IGetBasketRecipeParams{
    ingredients:string;
}

export interface IBasketRecipeServices{
    data:findByIngredientsInterface[]
}

