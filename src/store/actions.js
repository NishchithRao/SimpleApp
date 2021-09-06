const actions = {
    SET_EVEN_DATA: (value) => ({type:"SET_EVEN_DATA",value}),
    SET_ODD_DATA: (value) => ({type:"SET_ODD_DATA",value}),
    LOADING: () => ({type:"LOADING"}),
    ERROR: (value) => ({type:"ERROR",value}),
    TYPE: (value) => ({type:"TYPE",value}),
}

export default actions;