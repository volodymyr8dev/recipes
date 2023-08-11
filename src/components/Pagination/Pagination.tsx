import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";
import css from './Pagination.module.css';

const Pagination:FC = () => {

    const dispatch = useAppDispatch();

    const {offset,totalResults} = useAppSelector(state => state.recipeReducer);

    useEffect(()=>{
        dispatch(searchActions.resetOffset());
    },[totalResults])

    return (
        <div className={css.boxRow}>
            <div className={css.arrowBox}>
                <button onClick={()=> {
                    dispatch(searchActions.decrementOffset(10));
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                }}><img className={css.imgLeft} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcY7AAvhn5Bt92t4jtcJeGYHE10X-_IwW3A&usqp=CAU" alt="arrow"/></button>
            </div>
            <div>
                {offset===0?'1' : (offset/10)+1 }
            </div>
            <div className={css.arrowBox}>
                <button onClick={()=> {
                    dispatch(searchActions.incrementOffset(10)) ;
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}><img className={css.imgRight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcY7AAvhn5Bt92t4jtcJeGYHE10X-_IwW3A&usqp=CAU" alt="arrow"/></button>
            </div>
        </div>
    );
};

export default Pagination;