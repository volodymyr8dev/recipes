export interface Nutrient {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export interface EstimatedCost {
    value: number;
    unit: string;
}

export interface IIngredientInfo {
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
        nutrients: Nutrient[],
        caloricBreakdown: {},
        weightPerServing: {}
    };
}

export interface IIngredientInfoServices{
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
        nutrients: Nutrient[],
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

export interface IIngredientInfoParams {
    id: number;
}