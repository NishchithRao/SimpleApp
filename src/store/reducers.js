import appState from "./state";

const reducer = (state=appState,action) => {
    switch(action.type) {
        case 'SET_EVEN_DATA':
            return {
                ...state,
                evenData:action.value
            }
        case 'SET_ODD_DATA':
            return {
                ...state,
                oddData:action.value
            }
        case "LOADING":
            return {
                ...state,
                loading: !state.loading
            }
        case "ERROR":
            return {
                ...state,
                error: action.value
            }
        case "TYPE":
            return {
                ...state,
                type: action.value
            }
        default:
            return {...state}
    }
}

export default reducer