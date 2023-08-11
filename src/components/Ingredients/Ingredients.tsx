import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import Ingredient from "../Ingredient/Ingredient";
import css from './Ingredinets.module.css';

const Ingredients:FC = () => {

    const {obj} = useAppSelector(state => state.ingredientReducer);


    return (
        <div>
            <div className={css.totalProducts}>
                <p className={css.totalProductsTxt}>Searched <span className={css.wf}>{obj.totalResults}</span> products from your request</p>
            </div>
            <div>
                {obj.results.map((ingredient)=> <Ingredient key={ingredient.id} ingredient={ingredient}/>)}
            </div>
        </div>
    );
};

export default Ingredients;