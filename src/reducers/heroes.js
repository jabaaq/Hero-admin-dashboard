const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',

}

const heroes = (state = initialState, action) => {
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

        case 'DB_DELETED_HERO':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
            }


        default: return state
    }
}

export default heroes;

