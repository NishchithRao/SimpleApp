import appState from "./state";

const reducer = (state=appState,action) => {
    switch(action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data:action.value
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
        default:
            return {...state}
    }
}

export default reducer