import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWorkName, setWorkPrice, setBoth, setEditID } from '../../app/formSlice'
import { addWork, updateWork } from '../../app/worksSlice'

export default function Form() {
  const workName = useSelector((state) => state.form.workName)
  const workPrice = useSelector((state) => state.form.workPrice)
  const editID = useSelector((state) => state.form.editID)
  const dispatch = useDispatch()

  const stringToNumber = (s) => parseInt(s.toString().replaceAll(/\s/g, ''), 10) 

  const onTextChange = (e) => dispatch(setWorkName(e.target.value))
  const onPriceChange = (e) => dispatch(setWorkPrice(e.target.value))

  const handleCancel = () => {
    dispatch(setBoth({name: '', price: ''}))
    dispatch(setEditID(null))
  }
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!workName) return
    const correctPrice = stringToNumber(workPrice) || '0'
    if (editID) {
      dispatch(updateWork({id: editID, workName: workName, workPrice: correctPrice }))
      dispatch(setEditID(null))
    } else {
      dispatch(addWork({id: Math.random(10000), workName: workName, workPrice: correctPrice }))
    }
    dispatch(setBoth({name: '', price: ''}))
  }

  return (
    <form className="app-form" onSubmit={onFormSubmit}>
      <input type="text" value={workName} id="form-text" onChange={onTextChange} />
      <input type="digit" value={workPrice} id="form-price" onChange={onPriceChange} />
      <button type="submit">Сохранить</button>
      {editID && <button type="button" onClick={handleCancel}>Отменить</button>}
    </form>
  );
}