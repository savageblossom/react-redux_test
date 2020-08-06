const initialState = {
    currentPage: 1,
    prevPage: 1,
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
        case 'CHANGE_PAGE':
                // action.payload[0] -> operation
                // action.payload[1] -> number
            if(action.payload[0] === 'ADD') {
                return {
                    ...state,
                    currentPage: state.currentPage + action.payload[1],
                    prevPage: state.prevPage !== state.currentPage
                    ? state.currentPage
                    : state.prevPage
                }
            }
            else if(action.payload[0] === 'SUBSTR') {
                return {
                    ...state,
                    currentPage: state.currentPage - action.payload[1] <= 0 
                        ? state.currentPage
                        : state.currentPage - action.payload[1],
                    prevPage: state.prevPage !== state.currentPage
                        ? state.currentPage
                        : state.prevPage
                }
            }
            else { 
                return newState;
            }
        default: 
            return newState;
    }
};

export default reducer;