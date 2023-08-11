import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import IngredientFromRecipeDetails from "../ingredientFromRecipeDetails/IngredientFromRecipeDetails";
import css from './RecipeDetails.module.css';
import StepInstruction from "../StepInstruction/StepInstruction";


const RecipeDetails:FC = () => {
    const {recipeDetails} = useAppSelector(state => state.recipeReducer);

    return (
        <div className={css.wrapper}>
            <div className={css.rowMain}>
                <div>
                    <h2>{recipeDetails.title}</h2>
                    <p className={css.instruction} dangerouslySetInnerHTML={{__html:recipeDetails.instructions}}></p>
                </div>
                <div>
                    <img className={css.img} src={recipeDetails.image} alt=""/>
                </div>
            </div>
            <div className={css.ingredientBlock}>
                <p className={(css.p)}>ingredients:</p>
                {recipeDetails.extendedIngredients.map((ingredient)=> <IngredientFromRecipeDetails key={ingredient.id} ingredient={ingredient}/>)}
            </div>

            <div className={css.stepByStep}>
                <div className={css.stepTitle}>
                    <p className={css.p1}>Recipe Steps</p> <p className={css.p2}>{recipeDetails.analyzedInstructions[0].steps.length} steps</p>
                </div>
                <div>
                    {recipeDetails.analyzedInstructions[0].steps.map((step:any)=> <StepInstruction step={step} key={step.number} id={recipeDetails.id}/>)}
                </div>
            </div>
            <div>
               <p className={css.Ad}>About Dish:</p>
                <div className={css.html} dangerouslySetInnerHTML={{__html:recipeDetails.summary}}/>

            </div>

        </div>
    );
};

export default RecipeDetails;