import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {Measures} from "../../interfaces";
import css from './ingredientFromRecipeDetails.module.css';
import {useAppDispatch} from "../../hooks";
import {getIngredientInfo} from "../../redux";

export interface IIngredientProps{
    ingredient:{
        aisle?: string;
        amount?: number;
        consistency?: string;
        id: number;
        image?: string;
        measures?: Measures;
        meta?: string[];
        nameClean?: string
        name?: string;
        original?: string;
        originalName?: string;
        unit?: string;
    }

}

const IngredientFromRecipeDetails:FC<IIngredientProps> = ({ingredient}) => {

    const dispatch = useAppDispatch();

    let id = ingredient.id;

    return (
        <div>
            <div className={css.block}>
                <NavLink to={'/IngredientInfo'} className={css.name} onClick={()=> {
                    dispatch(getIngredientInfo({id}))
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
                }>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="imgIngredient"/>
                    {ingredient.nameClean}</NavLink>
                <div className={css.inf}>{ingredient.original? ingredient.original: '...'}</div>
            </div>
        </div>
    );
};

export default IngredientFromRecipeDetails;