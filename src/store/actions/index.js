export const onDataFetched = () => (
    async dispatch => {
        let data = await fetch('http://swapi.dev/api/people/').then(response => response.json())
        const dataToReturn = {
            type: 'FETCH_DATA',
            payload: data
        }
        dispatch(dataToReturn)
    }
)