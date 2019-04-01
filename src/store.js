import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    first_name: '',
    last_name: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const FIRST_NAME = 'FIRST_NAME';
export const LAST_NAME = 'LAST_NAME';
export const INGREDIENTS = 'INGREDIENTS';
export const INSTRUCTIONS = 'INSTRUCTIONS';
export const RECIPES = 'RECIPES'

function reducer (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload}
        case UPDATE_CATEGORY:
            return { ...state, category: payload}
        case FIRST_NAME:
            return { ...state, first_name: payload}
        case LAST_NAME:
            return { ...state, last_name: payload}
        case INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredients}
        case INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return { ...state, instructions: newInstructions}
        case RECIPES:
            const recipes = {
                name: state.name,
                category: state.category,
                first_name: state.first_name,
                last_name: state.last_name,
                ingredients: state.ingredients,
                instructions: state.instructions
            }
            const newRecipes = [...state.recipes, recipes]
            console.log(newRecipes)
            return { ...state, recipes: newRecipes}
        default:
            return state
    }
}

export default createStore(reducer)