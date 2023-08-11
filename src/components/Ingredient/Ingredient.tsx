import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Ingredient.module.css';
import {getIngredientInfo} from "../../redux";
import {useAppDispatch} from "../../hooks";

export interface IProps{
    ingredient:{
        id: number;
        name: string;
        image: string;
    }
}

const Ingredient:FC<IProps> = ({ingredient}) => {

    const dispatch = useAppDispatch();

    let id = ingredient.id;

    return (
            <div className={css.wrapper}>
                <NavLink className={css.ingredientBlock} to={'/IngredientInfo'} onClick={()=> {
                    dispatch(getIngredientInfo({id}))
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
                }>
                    <div className={css.ingredientTitle}>{ingredient.name}</div>
                    <div>
                             <img className={css.ingredientImage} src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="ingredientImg"/>
                    </div>
                </NavLink>
            </div>
    );
};

export default Ingredient;