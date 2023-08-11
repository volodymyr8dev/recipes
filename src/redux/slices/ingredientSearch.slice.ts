import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {searchIngredientService} from "../../services";
import {
    IIngredientsInitialState,
    IIngredientsParams,
    IIngredientsServices,
} from "../../interfaces/ingredients.interface";
import {IIngredientInfoParams,IIngredientInfoServices} from "../../interfaces/IngredientInformation.interface"



const initialState: IIngredientsInitialState = {
    basketItems:[
        {
            id: 0,
            name: '',
            image: ''
        }
    ],
    i:0,
    obj:{
        results: [],
        offset: 0,
        number: 0,
        totalResults: 0,

    },
    ingredientDetails:{
        data:{
            id: 0,
            original: '',
            originalName: '',
            name: '',
            amount: 0,
            unit: '',
            unitShort: '',
            unitLong: '',
            possibleUnits: [],
            estimatedCost: {
                value: 0,
                unit: '',
            },
            consistency: '',
            shoppingListUnits: [],
            aisle: '',
            image: '',
            meta: [],
            nutrition: {
                nutrients: [],
                caloricBreakdown: {
                    percentCarbs: 0,
                    percentFat: 0,
                    percentProtein: 0,
                },
                weightPerServing: {
                    amount: 0,
                    unit: ''
                }
            }
        }
    }

}

// @ts-ignore
export const getIngredients = createAsyncThunk<IIngredientsServices,IIngredientsParams, {rejectWithValue?: unknown}>(
    'IngredientsSlice/getIngredients',
    async ({query,offset},{rejectWithValue})=>{
        try {
            const {data} = await searchIngredientService.getIngredients(query,offset);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

// @ts-ignore
export const getIngredientInfo = createAsyncThunk<IIngredientInfoServices,IIngredientInfoParams,{rejectWithValue?: unknown}>(
    'IngredientsSlice/getIngredientInfo',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await searchIngredientService.getIngredientInfo(id);
            return data
        }catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)


const IngredientsSlice = createSlice({
    name: 'IngredientsSlice',
    initialState,
    reducers:{
        incrementOffset: (state, action) => {
            state.obj.offset += action.payload;
        },
        decrementOffset: (state, action) => {
            state.obj.offset -= action.payload
            if (state.obj.offset < 10) {
                state.obj.offset = 10
            }
        },
        resetOffset:(state)=>{
            state.obj.offset = 0
        },
        addItem:(state,action)=>{
            state.basketItems.push(action.payload);
            for (let i = 0; i < state.basketItems.length; i++) {
                if(state.basketItems[i].id === 0){
                    state.basketItems.splice(i,1);
                }
            }
        },
        removeItem:(state,action)=>{
            for (let i = 0; i < state.basketItems.length; i++) {
                if(state.basketItems[i].id === action.payload){
                    state.basketItems.splice(i,1);
                }
            }
        }
    },
    extraReducers: builder => builder
        .addCase(getIngredients.fulfilled,(state, action)=>{
            state.obj = action.payload;
        })
        .addCase(getIngredientInfo.fulfilled, (state,action)=>{
            state.ingredientDetails.data = action.payload
        })

})

const {
    reducer: ingredientReducer, actions:{
        incrementOffset,decrementOffset,resetOffset,addItem,removeItem
    }
} = IngredientsSlice;

const IngredientsActions = {
    getIngredients,
    incrementOffset,
    decrementOffset,
    resetOffset,
    getIngredientInfo,
    addItem,
    removeItem
}

export {ingredientReducer,IngredientsActions}



