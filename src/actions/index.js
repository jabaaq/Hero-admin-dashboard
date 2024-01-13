import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching())
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(dispatch(filtersFetchingError()))
}

export const filtersFetched = (filters) => {
    return {
        type: 'FETCHED_FILTERS',
        payload: filters
    }
}

export const filtersFetching = () => {
    return {
        type: 'FETCHING_FILTERS'
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const filterHeroList = (filerBy) => {
    return {
        type: 'FILTER_HERO_LIST',
        payload: filerBy
    }
}
