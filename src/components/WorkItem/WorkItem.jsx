import React from 'react'
import { useDispatch } from 'react-redux'
import { delWork } from '../../app/worksSlice'

export default function WorkItem({ item }) {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(delWork(item.id))
  
  return (
    <>
      <span className="mr1r">{item.workName}</span>
      <span className="mr1r">{item.workPrice}</span>
      <button className="mr1r">Редактировать</button>
      <button onClick={handleDelete}>Удалить</button>
    </>
  )
}