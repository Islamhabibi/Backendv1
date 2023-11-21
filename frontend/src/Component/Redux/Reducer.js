import { ALLPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: []
}

export const products_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALLPRODUCT:
            return { ...state, products: payload }
        

        default:
            return state
    }
}
