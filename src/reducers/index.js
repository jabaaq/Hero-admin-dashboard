const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'DELETED_HERO':
            const newHeroList = [...state.heroes]
            newHeroList.splice(action.payload, 1)
            return {
                ...state,
                heroes: newHeroList
            }
        case 'ADD_NEW_HERO':
            const addedIntoHeroesList = [...state.heroes]
            addedIntoHeroesList.push(action.payload)
            return {
                ...state,
                heroes: addedIntoHeroesList
            }
        case 'DB_DELETED_HERO':
            const updatedHeroList = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: updatedHeroList
            }
        default: return state
    }
}

export default reducer;