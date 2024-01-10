import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { filtersFetched } from "../../actions";
import { filtersFetching, filtersFetchingError, filterHeroList } from "../../actions";


const HeroesFilters = () => {
    const { request } = useHttp()
    const dispatch = useDispatch()
    const { filters, filtersLoadingStatus, filterBy } = useSelector((state) => state.filters)

    useEffect(() => {
        dispatch(filtersFetching())
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(dispatch(filtersFetchingError()))
    }, [])

    useEffect(() => {
        console.log(filterBy); // Check if the state is updated
    }, [filterBy]);
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filters.map((filter) => (
                        <button key={filter.name}
                            value={filter.name}
                            className={'btn active ' + filter.className}
                            onClick={() => {
                                dispatch(filterHeroList(filter.name))
                            }}>{filter.label}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;