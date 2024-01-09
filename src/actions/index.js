export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const onDelete = (index) => {
    return {
        type: 'DELETED_HERO',
        payload: index
    }
}

export const heroDeleteFromDb = (id) => {
    return {
        type: 'DB_DELETED_HERO',
        payload: id
    }
}


export const addHero = (hero) => {
    return {
        type: "ADD_NEW_HERO",
        payload: hero
    }

}
export const heroCreated = (hero) => {
    return {
        type: 'CREATED_HERO',
        payload: hero
    }
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