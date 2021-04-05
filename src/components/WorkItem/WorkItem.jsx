import React from 'react'

export default function WorkItem({ item }) {
  return (
    <>
      <span className="mr1r">{item.workName}</span>
      <span className="mr1r">{item.workPrice}</span>
      <button className="mr1r">Редактировать</button>
      <button>Удалить</button>
    </>
  )
}