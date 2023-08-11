import React, {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
// @ts-ignore
import img from './IMG_0616.jpg';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";
import BasketItem from "../BasketItem/BasketItem";

const Header:FC = () => {

    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [show, setShow] = useState(false);


    const dispatch = useAppDispatch();


    const {offset} = useAppSelector(state => state.recipeReducer);

    const {basketItems} = useAppSelector(state => state.ingredientReducer);

    console.log(basketItems);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);

    const handleScroll = () => {
        let scroll = window.scrollY;
        if (scroll > lastScroll && scroll > 500) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastScroll(scroll);
    }
    return (
        <div className={hidden ? css.hidden : css.headerContainer}>

            <div className={css.logo}>
                <img className={css.logoImg} src={img} alt="logo"/>
            </div>

            <div className={css.link}>
                <NavLink to={''}><span className={css.text}>Recipes</span></NavLink>
                <NavLink to={'/IngredientsPage'}><span className={css.text}>Ingredients</span></NavLink>
            </div>

            <div className={css.basketBlock}>
                <img className={css.basketImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOFm4oyvxfckjiKaYSvUBN2a33fii1icJLg&usqp=CAU" alt="basketImg"
                     onClick={() => setShow(!show)}/>

                {show && <div className={`${css.cart} ${show ? css.show : ''}`}>
                    {basketItems.map((item)=> <BasketItem data={item} key={item.id}/>)}

                    {basketItems[0].id > 1 && <NavLink to={'/BasketRecipes'}>
                        <div className={css.btnSearchBlock}>
                            <button  className={css.btnSearch} onClick={()=>{
                                let ingredients ='';
                                for (let i = 0; i < basketItems.length; i++) {
                                    ingredients += `${basketItems[i].name},+`
                                }
                                dispatch(searchActions.getRecipesByIngredients({ingredients}))
                                document.body.scrollTop = 0;
                                document.documentElement.scrollTop = 0;
                            }
                            }>Search recipe with this ingredients</button>
                        </div>
                    </NavLink>}

                </div>}

            </div>
        </div>
    );
};

export default Header;