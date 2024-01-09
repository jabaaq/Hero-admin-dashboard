import { v4 as uuidv4 } from 'uuid';
import { addHero } from '../../actions';
import { useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { heroCreated } from '../../actions';
import { useState } from 'react';
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')

    const dispatch = useDispatch()
    const { request } = useHttp()

    const handleSubmit = (event) => {
        event.preventDefault()
        const addedHero = {
            "id": uuidv4(),
            "name": name,
            "description": description,
            "element": element
        }
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(addedHero))
            .then(dispatch(heroCreated(addedHero)))
            .catch(error => console.log(error))

        setName('')
        setDescription('')
        setElement('')
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={(event) => {
            handleSubmit(event)
            event.target.reset()
        }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element" value={element} onChange={(e) => setElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;