import React from 'react';

import ComplexSearch from "../components/ComplexSearch/ComplexSearch";
import ComplexRecipes from "../components/ComplexRecipes/ComplexRecipes";
import Pagination from "../components/Pagination/Pagination";

const MainPage = () => {
    return (
        <div>
            <div>
                <ComplexSearch/>
                <ComplexRecipes/>
                <Pagination/>
            </div>
        </div>
    );
};

export default MainPage;