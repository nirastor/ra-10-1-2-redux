import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, clearFilter } from '../../app/worksSlice'

export default function Filter() {
  const filter = useSelector((state) => state.form.filter)
  const dispatch = useDispatch()

  const handleInput = (e) => dispatch(setFilter(e.target.value))
  const handleClear = () => dispatch(clearFilter())

  return (
    <div className="app-filter">
      <div>Фильтр</div>
      <input value={filter} onChange={handleInput} type="text"></input>
      <button onClick={handleClear}>Очистить</button>
    </div>
  );
}