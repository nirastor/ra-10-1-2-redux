import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWorkName, setWorkPrice } from '../../app/formSlice'
import { addWork } from '../../app/worksSlice'

export default function Form() {
  const workName = useSelector((state) => state.form.workName)
  const workPrice = useSelector((state) => state.form.workPrice)
  const dispatch = useDispatch()

  const stringToNumber = (s) => parseInt(s.replaceAll(/\s/g, ''), 10) 

  const onTextChange = (e) => dispatch(setWorkName(e.target.value))
  const onPriceChange = (e) => dispatch(setWorkPrice(e.target.value))
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!workName) return
    const correctPrice = stringToNumber(workPrice) || '0'
    dispatch(addWork({id: Math.random(10000), workName: workName, workPrice: correctPrice }))
    // не удалось сделть очистку формы через экшн.
    // Можно ли одним экшеном установить значения нескольких полей?
    dispatch(setWorkName(''))
    dispatch(setWorkPrice(''))
  }

  return (
    <form className="app-form" onSubmit={onFormSubmit}>
      <input type="text" value={workName} id="form-text" onChange={onTextChange} />
      <input type="digit" value={workPrice} id="form-price" onChange={onPriceChange} />
      <button type="submit">Сохранить</button>
    </form>
  );
}