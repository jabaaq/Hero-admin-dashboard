import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { fetchFilters } from "./filtersSlice";
import { filtersHeroList } from "./filtersSlice";

const HeroesFilters = () => {
    const dispatch = useDispatch()
    const { filters, filterBy } = useSelector((state) => state.filters)

    useEffect(() => {
        dispatch(fetchFilters())
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
                                dispatch(filtersHeroList(filter.name))
                            }}>{filter.label}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;