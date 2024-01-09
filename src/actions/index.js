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