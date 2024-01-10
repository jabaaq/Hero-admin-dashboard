import { useHttp } from '../../hooks/http.hook';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { heroesFetching, heroesFetched, heroesFetchingError, onDelete, heroDeleteFromDb } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';



const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.filterBy,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(item => item.element === filter)
            }
        }
    )

    const filteredHeroesList = useSelector(filteredHeroesSelector)

    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);

    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    const deleteFromDb = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(dispatch(heroDeleteFromDb(id)))
            .catch(error => console.log(error))
    }, [request])

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({ id, ...props }) => {
            return <HeroesListItem key={id} {...props} onDelete={() => {
                deleteFromDb(id)
            }} />
        })
    }

    const elements = renderHeroesList(filteredHeroesList);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;