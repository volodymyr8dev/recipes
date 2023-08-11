import React, {FC, useEffect, useState} from 'react';

import css from "../ComplexSearch/ComplexSearch.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getIngredients} from "../../redux";

const IngredientSearch:FC = () => {

    const dispatch = useAppDispatch();

    const [query,setQuery] =useState('');

    const {obj} = useAppSelector(state => state.ingredientReducer);
    let offset = obj.offset

    useEffect(()=>{
        if(obj.offset > 1){
            dispatch(getIngredients({query,offset}))
        }
    },[obj.offset])


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(getIngredients({query,offset}))
    };

    return (
        <div className={css.ComplexSearchContainer}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.searchTxt}>
                    <span>Here you can get information about ingredients</span>
                </div>
                <div>
                    <input className={css.input}
                           type="text"
                           name="query"
                           placeholder="Search products..."
                           value={query}
                           onChange={(e)=> {
                               setQuery(e.target.value)
                           }}
                    />
                    <button className={css.submit} type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default IngredientSearch;