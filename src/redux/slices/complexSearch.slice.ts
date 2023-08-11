import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {
    IRecipeInitialState,
    IRecipesServices,
    IParams,
    IGetDetailsParams,
    InformationInterface,
    findByIngredientsInterface,
    IGetBasketRecipeParams,
} from "../../interfaces";
import {searchRecipesService} from "../../services";

// interface MyKnownError {
//     errorMessage: string
// }

const initialState: IRecipeInitialState = {
    basketRecipes:{
        data:[
                {
                    id: 0,
                    image: '',
                    imageType: '',
                    likes: 0,
                    missedIngredientCount: 0,
                    missedIngredients: [
                        {
                            aisle: '',
                            amount: 0,
                            id: 0,
                            image: '',
                            meta: [],
                            name: '',
                            original: '',
                            originalName: '',
                            unit: '',
                            unitLong: '',
                            unitShort: '',
                        }
                    ],
                    title: '',
                    unusedIngredients: [],
                    usedIngredientCount: 0,
                    usedIngredients: [
                        {
                            aisle: '',
                            amount: 0,
                            id: 0,
                            image: '',
                            meta: [],
                            name: '',
                            original: '',
                            originalName: '',
                            unit: '',
                            unitLong: '',
                            unitShort: '',
                        }
                    ]
                }
            ]
        },
    recipes: [],
    offset: 0,
    totalResults: 0,
    recipeDetails: {
        id: 0,
        title: '',
        image: '',
        imageType: '',
        servings: 0,
        readyInMinutes: 0,
        nameClean: '',
        license: '',
        sourceName: '',
        sourceUrl: '',
        spoonacularSourceUrl: '',
        aggregateLikes: 0,
        healthScore: 0,
        spoonacularScore: 0,
        pricePerServing: 0,
        analyzedInstructions:[
            {
                steps: []
            }
        ],
        cheap: false,
        creditsText: '',
        cuisines: [],
        dairyFree: false,
        diets: [],
        gaps: '',
        glutenFree: false,
        instructions: '',
        ketogenic: false,
        lowFodmap: false,
        occasions: [],
        sustainable: false,
        vegan: false,
        vegetarian: false,
        veryHealthy: false,
        veryPopular:false,
        whole30: false,
        weightWatcherSmartPoints: 0,
        dishTypes: [],
        extendedIngredients: [],
        summary:''
    }
}

// @ts-ignore
export const getRecipes = createAsyncThunk<IRecipesServices,IParams, {rejectWithValue?: unknown}>(
    'complexSearch/getRecipes',
    async ({query,cuisine,diet,type,offset},{rejectWithValue})=>{
        try {
            const {data} = await searchRecipesService.getSearchRecipes(query,cuisine,diet,type,offset);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

// // @ts-ignore
// export const getRecipeDetails = createAsyncThunk<InformationInterface,IGetDetailsParams, {rejectWithValue?: unknown}>(
//     'complexSearch/getRecipeDetails',
//     async ({id},{rejectWithValue})=>{
//         try{
//             const {data} = await searchRecipesService.getRecipeByID(id);
//             return data;
//         } catch (e) {
//             return rejectWithValue((e as AxiosError).message)
//         }
//
//     }
// )

// @ts-ignore
export const getRecipeDetails = createAsyncThunk<InformationInterface,IGetDetailsParams, {rejectWithValue?: unknown}>(
    'complexSearch/getRecipeDetails',
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await searchRecipesService.getRecipeByID(id);
            return data;
        } catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }

    }
)

// export const getRecipes = createAsyncThunk<IRecipesServices,IParams,{
//     extra: {
//         jwt: string
//     },
//     rejectValue: MyKnownError
// }>('complexSearch/getRecipes',
// // @ts-ignore
//     async ({query,cuisine,diet,type},{rejectValue})=>{
//         try {
//             const {data} = await searchRecipesService.getSearchRecipes(query,cuisine,diet,type);
//             return data
//         }catch (e) {
//             return rejectValue((e as AxiosError).message)
//         }
//     }
//     )


// @ts-ignore
export const getRecipesByIngredients = createAsyncThunk<findByIngredientsInterface[],IGetBasketRecipeParams,{rejectWithValue?: unknown}>(
    'complexSearch/getRecipesByIngredients',
    async ({ingredients},{rejectWithValue})=>{
        try {
            const {data} = await searchRecipesService.getRecipeByIngredients(ingredients);
            return data;
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers:{
        incrementOffset: (state, action) => {
            state.offset += action.payload;
        },
        decrementOffset: (state, action) => {
            state.offset -= action.payload
            if (state.offset < 10) {
                state.offset = 10
            }
        },
        resetOffset:(state)=>{
            state.offset = 0
        },
    },
    extraReducers: builder => builder
        .addCase(getRecipes.fulfilled,(state, action)=>{
            state.recipes = action.payload.results;
            state.totalResults = action.payload.totalResults;
        })
        .addCase(getRecipeDetails.fulfilled,(state, action)=>{
            state.recipeDetails = action.payload;
        })
        .addCase(getRecipesByIngredients.fulfilled,(state,action)=>{

            state.basketRecipes.data = action.payload;
        })

})

const {
    reducer: recipeReducer, actions:{
        incrementOffset,decrementOffset,resetOffset
    }
} = searchSlice;

const searchActions = {
    getRecipes,
    incrementOffset,
    decrementOffset,
    resetOffset,
    getRecipeDetails,
    getRecipesByIngredients
}

export {recipeReducer,searchActions}



