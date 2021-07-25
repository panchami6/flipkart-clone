export const ProductsReducer = (state, action) => {
    switch (action.type){
        case "GET_DATA": 
        return {
            ...state, data: action.payload
        }
        case "SORT":
            return {
                ...state,
                sortBy: action.payload
            }
        case "SIZE":
            return{
                ...state,
                size:action.payload,
                data: action.payload.data.filter(product => product.size === action.payload.size)
            }
        case "IDEAL_FOR":
            return{
                ...state,
                gender:action.payload,
                data: action.payload.data.filter(product => product.gender === action.payload.gender)
            }
        case "BRAND":
            return{
                ...state,
                brand:action.payload,
                data: action.payload.data.filter(product => product.brand === action.payload.brand)
            }
        case "CLEAR_ALL":
            return{
                sortBy:null,
                size: null,
                gender:null,
                brand:null
            }
        default:
            return state;
    }
}