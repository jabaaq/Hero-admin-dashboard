import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { filtersFetched } from "../../actions";
import { filtersFetching, filtersFetchingError, filterHeroList } from "../../actions";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const { request } = useHttp()
    const dispatch = useDispatch()
    const { filters, filtersLoadingStatus, filterBy, heroes } = useSelector((state) => state)

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(dispatch(filtersFetching()))
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