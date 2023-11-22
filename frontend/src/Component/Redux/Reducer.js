import { ALLPRODUCT, ONEPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: [],
    product:{}
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
