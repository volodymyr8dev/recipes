import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import BasketRecipe from "../BasketRecipe/BasketRecipe";
import css from './BasketRecipes.module.css';

const BasketRecipes:FC = () => {

    const {basketRecipes} = useAppSelector(state => state.recipeReducer);

    console.log(basketRecipes);

    return (
        <div className={css.wrapper}>
            <div className={css.ItemBlock}>
                {basketRecipes.data.map((item, index)=> <BasketRecipe key={index} item={item}/>)}
            </div>
        </div>
    );
};

export default BasketRecipes;