import { ALLPRODUCT, ALLUSERS, ONEPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: [],
    product:{},
    users:[]
}

export const products_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state, products: payload }
        case ONEPRODUCT:
            return { ...state, product: payload }    
        

        default:
            return state
    }
}
export const users_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLUSERS:
            return { ...state, users: payload }
         
        

        default:
            return state
    }
}


