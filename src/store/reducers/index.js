const initialState = {
    count: 0,
    swapi_data: {
        count: 0,
        items: {}
    }
};

const reducer = (state = initialState, action) =>  {
    const newState = {...state};

    switch(action.type){
        case 'FETCH_DATA':
            console.log(action.payload)
            return {
                ...state,
                swapi_data: {
                    ...action.payload
                }
            }
    }

    return newState;
};

export default reducer;