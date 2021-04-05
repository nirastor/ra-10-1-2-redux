import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delWork } from '../../app/worksSlice'
import { setBoth, setEditID } from '../../app/formSlice'

export default function WorkItem({ item }) {
  const dispatch = useDispatch()
  const editID = useSelector((state) => state.form.editID)
  
  const handleDelete = () => {
    dispatch(delWork(item.id))
    if (editID) {
      dispatch(setBoth({name: '', price: ''}))
      dispatch(setEditID(null))
    }
  }
  
  const handleEdit = () => {
    dispatch(setBoth({name: item.workName, price: item.workPrice}))
    dispatch(setEditID(item.id))
  }
  
  return (
    <>
      <span className="mr1r">{item.workName}</span>
      <span className="mr1r">{item.workPrice}</span>
      <button className="mr1r" onClick={handleEdit}>Редактировать</button>
      <button onClick={handleDelete}>Удалить</button>
    </>
  )
}