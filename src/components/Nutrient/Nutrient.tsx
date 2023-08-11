import React, {FC} from 'react';

import css from './Nutrient.module.css';

export interface INutrientProps{
    nutrient:{
        amount: number;
        name: string;
        percentOfDailyNeeds: number;
        unit: string;
    }
}

const Nutrient:FC<INutrientProps> = ({nutrient}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.nutrientTitle}>
                {nutrient.name}: {nutrient.amount} {nutrient.unit}
            </div>
            <div className={css.nutrientPercentage}>
                <span>Percent of daily needs: {nutrient.percentOfDailyNeeds}%</span>

            </div>
        </div>
    );
};

export default Nutrient;