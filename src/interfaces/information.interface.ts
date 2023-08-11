export interface InformationInterface {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: number;
    readyInMinutes: number;
    nameClean : string;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    aggregateLikes: number;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions: [
        {
            steps: []
        }
        ];
    cheap: boolean;
    creditsText: string;
    cuisines: any[];
    dairyFree: boolean;
    diets: any[];
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: any[];
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: string[];
    extendedIngredients: ExtendedIngredient[];
    summary:string
}

export interface ExtendedIngredient {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: Measures;
    meta: string[];
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    unit: string;
}

export interface Measures {
    metric: Metric;
    us: Us;
}

export interface Metric {
    amount: number;
    unitLong: string;
    unitShort: string;
}

export interface Us {
    amount: number;
    unitLong: string;
    unitShort: string;
}

export interface IGetDetailsParams{
    id:number;
}

export interface IRecipeDetailsService{
    recipeDetails: InformationInterface
}

