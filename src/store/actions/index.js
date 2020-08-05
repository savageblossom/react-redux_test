export const onDataFetched = (currentPage = 1) => (
    async dispatch => {
        let data = await fetch(`http://swapi.dev/api/people/?page=${currentPage}`).then(response => response.json())
        const dataToReturn = {
            type: 'FETCH_DATA',
            payload: data
        }
        console.log('fetched')
        dispatch(dataToReturn)
    }
)