const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    filterBy: 'all',
    filteredHeroesList: []
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
                //initial filtration
                filteredHeroesList: state.filterBy === 'all' ? action.payload : action.payload.filter(item => item.element === state.filterBy),
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
            const newCreatedHeroList = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newCreatedHeroList,
                filteredHeroesList: state.filterBy === 'all' ? newCreatedHeroList : newCreatedHeroList.filter(item => item.element === state.filterBy)
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
            const updatedHeroList = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: updatedHeroList,
                filteredHeroesList: state.filterBy === 'all' ? updatedHeroList : updatedHeroList.filter(item => item.element === state.filterBy)
            }
        case 'FILTER_HERO_LIST':
            return {
                ...state,
                filterBy: action.payload,
                filteredHeroesList: action.payload === 'all' ? state.heroes : state.heroes.filter(item => item.element === action.payload)
            }

        default: return state
    }
}

export default reducer;

