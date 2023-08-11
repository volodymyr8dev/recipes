const baseURL = process.env.REACT_APP_API
const apiKey = process.env.REACT_APP_TOKEN

const urls = {
    searchRecipes:'recipes/complexSearch',
    findByIngredients: 'recipes/findByIngredients',
    information:'/information',
    ingredientsById:'/ingredientWidget.json',
    ingredients: '/food/ingredients/search',
    ingredientInfo:'/food/ingredients',
    auth:{
        apiKey: '?apiKey=' + apiKey
    }
}

export {
    baseURL,
    urls
}