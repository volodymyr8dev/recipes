export interface IngredientsByIdInterface {
    ingredients: Ingredient[];
}

interface Ingredient {
    amount: {
        metric: {
            unit: string;
            value: number;
        },
        us: {
            unit: string;
            value: number;
        }
    },
    image: string;
    name: string;
}