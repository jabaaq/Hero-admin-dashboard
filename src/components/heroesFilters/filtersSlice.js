import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterBy: 'all',
}

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtersFetched: (state, action) => { state.filters = action.payload },
        filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
        filtersFetchingError: state => { state.filtersLoadingStatus = 'error' },
        filtersHeroList: (state, action) => { state.filterBy = action.payload }
    }
})

const { actions, reducer } = filtersSlice

export default reducer
export const {
    filtersHeroList,
    filtersFetched,
    filtersFetching,
    filtersFetchingError
} = actions