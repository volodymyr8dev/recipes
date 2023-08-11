import React, {FC, useEffect, useState} from 'react';

import css from './ComplexSearch.module.css';
import {getRecipes} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";


const ComplexSearch:FC = () => {

    const dispatch = useAppDispatch();

    const {offset} = useAppSelector(state => state.recipeReducer);


    const [query,setQuery] =useState('');
    const [cuisine,setCuisine] =useState('');
    const [diet,setDiet] = useState('');
    const [type,setType] = useState('');
    const [switcher,setSwitcher] = useState(false);

        useEffect(()=>{
            if(offset > 1){
                dispatch(getRecipes({query, cuisine,diet,type,offset}))
            }
        },[offset])



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(getRecipes({query, cuisine,diet,type,offset}))
    };

    return (
        <div className={css.ComplexSearchContainer} onSubmit={handleSubmit}>
            <form className={css.form}>
                <div className={css.searchTxt}>
                    <span>Here you can search some dishes</span>
                </div>
                <div>
                    <input className={css.input}
                           type="text"
                           name="query"
                           placeholder="Search recipes..."
                           onChange={(e)=> {
                               setQuery(e.target.value)
                           }}
                    />
                    <button className={css.submit} type="submit">Search</button>
                </div>

                <div className={css.listOfParams}>
                    {!switcher && <button className={css.filter} onClick={()=>{
                        setSwitcher(true);
                    }
                    }>
                        <p>Filter</p>
                        <img className={css.img} src="http://reilandangus.com.au/wp-content/uploads/intense-cache/icons/plugin/font-awesome/angle-double-down.svg" alt=""/>
                    </button>}

                    {switcher && <div className={css.filterWrapper}>
                        <div className={css.filterBlock}>
                            <p className={css.text}>Cousine:</p>
                            <select className={css.submit} name="cuisine" onChange={(e)=> setCuisine(e.target.value)}>
                                <option value="italian">Italian</option>
                                <option value="mexican">Mexican</option>
                                <option value="chinese">Chinese</option>
                                <option value="african">African</option>
                                <option value="american">American</option>
                                <option value="british">British</option>
                                <option value="cajun">Cajun</option>
                                <option value="caribbean">Caribbean</option>
                                <option value="eastern_european">Eastern European</option>
                                <option value="european">European</option>
                                <option value="french">French</option>
                                <option value="german">German</option>
                                <option value="greek">Greek</option>
                                <option value="indian">Indian</option>
                                <option value="irish">Irish</option>
                                <option value="japanese">Japanese</option>
                                <option value="jewish">Jewish</option>
                                <option value="korean">Korean</option>
                                <option value="latin_american">Latin American</option>
                                <option value="mediterranean">Mediterranean</option>
                                <option value="middle_eastern">Middle Eastern</option>
                                <option value="nordic">Nordic</option>
                                <option value="southern">Southern</option>
                                <option value="spanish">Spanish</option>
                                <option value="thai">Thai</option>
                                <option value="vietnamese">Vietnamese</option>
                            </select>
                        </div>
                        <div className={css.filterBlock}>
                            <p className={css.text}>diet:</p>
                            <select className={css.submit} name="diet" onChange={(e)=> setDiet(e.target.value)}>
                                <option value="Gluten_Free">Gluten Free</option>
                                <option value="Ketogenic">Ketogenic</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                                <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Pescetarian">Pescetarian</option>
                                <option value="Paleo">Paleo</option>
                                <option value="Primal">Primal</option>
                                <option value="Low_FODMAP">Low FODMAP</option>
                                <option value="Whole30">Whole30</option>
                            </select>
                        </div>
                        <div className={css.filterBlock}>
                            <p className={css.text}>type dish:</p>
                            <select className={css.submit} name="type" onChange={(e)=> setType(e.target.value)}>
                                <option value="main_course">Main Course</option>
                                <option value="side_dish">Side Dish</option>
                                <option value="dessert">Dessert</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="salad">Salad</option>
                                <option value="bread">Bread</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="soup">Soup</option>
                                <option value="beverage">Beverage</option>
                                <option value="sauce">Sauce</option>
                                <option value="marinade">Marinade</option>
                                <option value="fingerfood">Finger food</option>
                                <option value="snack">Snack</option>
                                <option value="drink">Drink</option>

                            </select>
                        </div>
                    </div>}


                </div>

            </form>
        </div>

    );
}

export default ComplexSearch;