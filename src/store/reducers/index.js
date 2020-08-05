const initialState = {
    swapi_data: {
        count: 0,
        items: {}
    }
};

const reducer = (state = initialState, action) =>  {
    const newState = {...state};

    switch(action.type){
        case 'FETCH_DATA':
            return {
                ...state,
                swapi_data: {
                    ...action.payload
                }
            }
        default: 
            return newState;
    }
};

export default reducer;