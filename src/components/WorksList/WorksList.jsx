import React from 'react'
import { useSelector } from 'react-redux'
import WorkItem from '../WorkItem/WorkItem'

export default function WorksList() {
  const items = useSelector((state) => state.worksList.works)
    .map((item) => (
      <li key={item.id}>
        <WorkItem item={item}/>
      </li>)
    )
  
  return (
    <ul className="app-list">
      {items}
    </ul>
  );
}