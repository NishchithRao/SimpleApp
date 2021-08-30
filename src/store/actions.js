const actions = {
    SET_DATA: (value) => ({type:"SET_DATA",value}),
    LOADING: () => ({type:"LOADING"}),
    ERROR: (value) => ({type:"ERROR",value})
}

export default actions;