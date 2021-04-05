import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWorkName, setWorkPrice} from '../../app/formSlice'

export default function Form() {
  const workName = useSelector((state) => state.form.workName)
  const workPrice = useSelector((state) => state.form.workPrice)
  const dispatch = useDispatch()

  const onTextChange = (e) => dispatch(setWorkName(e.target.value))
  const onPriceChange = (e) => dispatch(setWorkPrice(+e.target.value))
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(workName)
    console.log(workPrice)
  }

  return (
    <form className="app-form" onSubmit={onFormSubmit}>
      <input type="text" value={workName} id="form-text" onChange={onTextChange} />
      <input type="digit" value={workPrice} id="form-price" onChange={onPriceChange} />
      <button type="submit">Сохранить</button>
    </form>
  );
}