import React, {FC} from 'react';

import css from './StepInstruction.module.css';

export interface IStepProps{
    step :{
        equipment: [
            {
                image?: string
            }
        ]
        ingredients: [
            { name: string }
        ]
        length?: {
            number: number
            unit: string
        }
        number: number
        step: string
    },
    id: number

}


const StepInstruction:FC<IStepProps> = ({step,id}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.mainTxt}>
                <div className={css.centerText}>
                    <span>Step </span>{step.number}
                </div>
                {step.length && <div>
                    {step.length.number} {step.length.unit} for this step
                </div>}
            </div>

            <div>
                ingredients: {step.ingredients.map((ingredient)=>ingredient.name)}
            </div>
            <div className={css.step}>
                {step.step}
                {step.equipment[0] && <div>
                    <img src={`https://spoonacular.com/cdn/equipment_250x250/${step.equipment[0].image}`} alt="image"/>
                </div>}
            </div>
        </div>
    );
};

export default StepInstruction;