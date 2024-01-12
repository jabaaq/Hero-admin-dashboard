import { createAction } from "@reduxjs/toolkit";




export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetching = createAction('HEROES_FETCHING')

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED')

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')
// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
export const heroDeleteFromDb = createAction('DB_DELETED_HERO')
// export const heroDeleteFromDb = (id) => {
//     return {
//         type: 'DB_DELETED_HERO',
//         payload: id
//     }
// }

export const onDelete = (index) => {
    return {
        type: 'DELETED_HERO',
        payload: index
    }
}


export const addHero = (hero) => {
    return {
        type: "ADD_NEW_HERO",
        payload: hero
    }

}

export const heroCreated = createAction('CREATED_HERO')

// export const heroCreated = (hero) => {
//     return {
//         type: 'CREATED_HERO',
//         payload: hero
//     }
// }

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
