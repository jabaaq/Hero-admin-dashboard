const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterBy: 'all',
}

const filters = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCHING_FILTERS':
            return {
                ...state,
                filtersLoadingStatus: "loading"
            }
        case 'FETCHED_FILTERS':
            return {
                ...state,
                filters: action.payload
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_HERO_LIST':
            return {
                ...state,
                filterBy: action.payload,
            }

        default: return state
    }
}

export default filters;

