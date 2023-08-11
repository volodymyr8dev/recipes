import React, {FC} from 'react';

import IngredientSearch from "../components/IngredientSearch/IngredientSearch";
import Ingredients from "../components/Ingredients/Ingredients";
import IngredientsPagination from "../components/IngredientsPagination/IngredientsPagination";

const IngredientsPage:FC = () => {
    return (
        <div>
            <IngredientSearch/>
            <Ingredients/>
            <IngredientsPagination/>
        </div>
    );
};

export default IngredientsPage;