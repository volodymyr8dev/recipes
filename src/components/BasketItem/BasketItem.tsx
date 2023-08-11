import React, {FC} from 'react';

import css from './BasketItem.module.css';
import {useAppDispatch} from "../../hooks";
import {IngredientsActions} from "../../redux";

export interface IBasketItemProps{
    data:{
        id:number,
        name:string,
        image:string
    }
}

const BasketItem:FC<IBasketItemProps> = ({data}) => {
    const dispatch = useAppDispatch()
    return (
        <>
            {data.name &&  <div className={css.row}>
                <div className={css.wrapper}>
                    <div>
                        <img className={css.img} src={`https://spoonacular.com/cdn/ingredients_100x100/${data.image}`} alt=""/>
                    </div>
                    <div>
                        {data.name}
                    </div>
                </div>
                <div>
                    <p className={css.minus} onClick={()=>{
                    dispatch(IngredientsActions.removeItem(data.id))
                    }
                    }>-</p>
                </div>
             </div>}
        </>

    );
};

export default BasketItem;