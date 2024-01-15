import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";


const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterBy: 'all',
}

export const fetchFilters = createAsyncThunk(
    'filter/fetchFilters',
    () => {
        const { request } = useHttp()
        return request("http://localhost:3001/filters")
    }
)

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtersHeroList: (state, action) => { state.filterBy = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => { state.filtersLoadingStatus = 'loading' })
            .addCase(fetchFilters.fulfilled, (state, action) => { state.filters = action.payload })
            .addCase(fetchFilters.rejected, state => { state.filtersLoadingStatus = 'error' })
            .addDefaultCase(() => { })
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