import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {findByIngredientsInterface} from "../../interfaces";
import css from './BasketRecipe.module.css';
import {getRecipeDetails} from "../../redux";
import {useAppDispatch} from "../../hooks";

export interface IBasketRecipeProps {
    item: findByIngredientsInterface
}

const BasketRecipe:FC<IBasketRecipeProps> = ({item}) => {

   const dispatch = useAppDispatch()

    let id = item.id;

    return (
        <NavLink to={'/recipeDetails'} className={css.itemBlock} onClick={()=>{
            dispatch(getRecipeDetails({id}))
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        }>

            <div className={css.txt}>
                {item.title}
            </div>

            {item.image && <div >
                <img className={css.img} src={item.image} alt="img"/>
            </div>}

        </NavLink>
    );
};

export default BasketRecipe;