import React, {FC} from 'react';
import { VictoryPie, VictorySharedEvents,VictoryLabel,VictoryBar} from 'victory';

import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './IngredientDetails.module.css';
import Nutrient from "../Nutrient/Nutrient";
import {IngredientsActions} from "../../redux";


const IngredientDetails:FC = () => {

    let {ingredientDetails} = useAppSelector(state => state.ingredientReducer);

    const dispatch = useAppDispatch();

    return (
        <div className={css.wrapper}>
            <div className={css.row}>
                <div className={css.mainBlock}>
                    <div className={css.Up}>
                        {ingredientDetails.data.name}
                    </div>
                    <div className={css.tablet}>
                        <svg viewBox="0 0 650 350">
                            <VictorySharedEvents
                                events={[{
                                    childName: ["pie", "bar"],
                                    target: "data",
                                    eventHandlers: {
                                        onMouseOver: () => {
                                            return [{
                                                childName: ["pie", "bar"],
                                                mutation: (props) => {
                                                    return {
                                                        style: Object.assign({}, props.style, {fill: "tomato"})
                                                    };
                                                }
                                            }];
                                        },
                                        onMouseOut: () => {
                                            return [{
                                                childName: ["pie", "bar"],
                                                mutation: () => {
                                                    return null;
                                                }
                                            }];
                                        }
                                    }
                                }]}
                            >
                                <g transform={"translate(220, 50)"}>
                                    <VictoryBar name="bar"
                                                width={300}
                                                standalone={false}
                                                style={{
                                                    data: { width: 30 },
                                                    labels: {fontSize: 17}
                                                }}
                                                data={[
                                                    {x: "Carbs", y: ingredientDetails.data.nutrition.caloricBreakdown.percentCarbs},
                                                    {x: "Fat", y: ingredientDetails.data.nutrition.caloricBreakdown.percentFat},
                                                    {x: "Protein", y: ingredientDetails.data.nutrition.caloricBreakdown.percentProtein}
                                                ]}
                                                labels={[`Carbs${ingredientDetails.data.nutrition.caloricBreakdown.percentCarbs}%`,
                                                    `Fat${ingredientDetails.data.nutrition.caloricBreakdown.percentFat}%`,
                                                    `Protein${ingredientDetails.data.nutrition.caloricBreakdown.percentProtein}%`]}
                                                labelComponent={<VictoryLabel y={290}/>}
                                    />
                                </g>
                                <g transform={"translate(0, -75)"}>
                                    <VictoryPie name="pie"
                                                width={250}
                                                standalone={false}
                                                style={{ labels: {fontSize: 25, padding: 10}}}
                                                data={[
                                                    {x: "Carbs", y: ingredientDetails.data.nutrition.caloricBreakdown.percentCarbs},
                                                    {x: "Fat", y: ingredientDetails.data.nutrition.caloricBreakdown.percentFat},
                                                    {x: "Protein", y: ingredientDetails.data.nutrition.caloricBreakdown.percentProtein}
                                                ]}
                                    />
                                </g>
                            </VictorySharedEvents>
                        </svg>
                    </div>
                </div>
                <div className={css.btnBlock}>
                    <button className={css.btn} onClick={()=> {
                        dispatch(IngredientsActions.addItem(ingredientDetails.data));

                        // localStorage.setItem('ingredient',`${ingredientDetails.data.name}`);
                        // i++;
                    }}>Add to basket</button>
                </div>
                <div className={css.img}>
                    <img src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredientDetails.data.image}`} alt="imgIngredient"/>
                </div>
            </div>
            <div className={css.nutrientsBlock}>
                <p className={css.nutrientsTxt}>Nutrients per serving {ingredientDetails.data.nutrition.weightPerServing.amount}
                    {ingredientDetails.data.nutrition.weightPerServing.unit}</p>
                <div>
                    {ingredientDetails.data.nutrition.nutrients.map((nutrient,index)=> <Nutrient key={index} nutrient={nutrient}/>)}
                </div>
            </div>
        </div>


    );
};

export default IngredientDetails;

