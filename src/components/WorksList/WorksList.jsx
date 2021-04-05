import React from 'react'
import { useSelector } from 'react-redux'
import WorkItem from '../WorkItem/WorkItem'

export default function WorksList() {
  const arr = useSelector((state) => state.worksList.works);
  console.log(arr)
  
  const items = arr.map((item) => (<li key={item.id}><WorkItem /></li>))
  
  return (
    <ul className="app-list">
      {items}
    </ul>
  );
}