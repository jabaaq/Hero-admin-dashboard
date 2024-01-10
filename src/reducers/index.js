const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    filterBy: 'all',
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
        case 'CREATED_HERO':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
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

        case 'DB_DELETED_HERO':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
            }
        case 'FILTER_HERO_LIST':
            return {
                ...state,
                filterBy: action.payload,
            }

        default: return state
    }
}

export default reducer;

