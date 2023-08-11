import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {IngredientsActions} from "../../redux";
import css from "../Pagination/Pagination.module.css";

const IngredientsPagination:FC = () => {
    const dispatch = useAppDispatch();

    const {obj} = useAppSelector(state => state.ingredientReducer);

    useEffect(()=>{
        dispatch(IngredientsActions.resetOffset());
    },[obj.totalResults])

    return (
        <div className={css.boxRow}>
            <div className={css.arrowBox}>
                <button onClick={()=> {
                    dispatch(IngredientsActions.decrementOffset(10));
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}><img className={css.imgLeft} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcY7AAvhn5Bt92t4jtcJeGYHE10X-_IwW3A&usqp=CAU" alt="arrow"/></button>
            </div>
            <div>
                {obj.offset===0?'1' : (obj.offset/10)+1 }
            </div>
            <div className={css.arrowBox}>
                <button onClick={()=> {
                    dispatch(IngredientsActions.incrementOffset(10)) ;
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}><img className={css.imgRight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcY7AAvhn5Bt92t4jtcJeGYHE10X-_IwW3A&usqp=CAU" alt="arrow"/></button>
            </div>
        </div>
    );
};

export default IngredientsPagination;