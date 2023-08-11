import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";

import ComplexRecipe from "../ComplexRecipe/ComplexRecipe";
import css from './ComplexRecipes.module.css'

const ComplexRecipes:FC = () => {
        const {recipes, totalResults} = useAppSelector(state => state.recipeReducer)
    console.log(recipes[0]);
    return (
        <div className={css.mainWrapper}>
            <div className={css.totalResults}>
                <p className={css.totalResultsTxt}>Searched <span className={css.fw}>{totalResults}</span> dishes from your request</p>
            </div>
            <div className={css.recipesWrapper}>
                {recipes.map((recipe)=> <ComplexRecipe key={recipe.id} recipe={recipe}/>)}
            </div>
        </div>
    );
};

export default ComplexRecipes;