import React from 'react';
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage";
import css from './App.module.css'
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import IngredientsPage from "./pages/IngredientsPage";
import IngredientDetailsPage from "./pages/IngredientDetailsPage";
import BasketSearchPage from "./pages/BasketSearchPage";

const App = () => {

    return (
        <div className={css.all}>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<MainPage/>} />
                    <Route path={'/recipeDetails'} element={<RecipeDetailsPage/>}/>
                    <Route path={'/IngredientsPage'} element={<IngredientsPage/>}/>
                    <Route path={'/IngredientInfo'} element={<IngredientDetailsPage/>}/>
                    <Route path={'/BasketRecipes'} element={<BasketSearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;