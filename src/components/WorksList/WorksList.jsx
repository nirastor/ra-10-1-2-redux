import React from 'react'
import { useSelector } from 'react-redux'
import WorkItem from '../WorkItem/WorkItem'

export default function WorksList() {
  const filter = useSelector((state) => state.worksList.filter)
  const allItems = useSelector((state) => state.worksList.works)
  let filtered = []

  if (filter) {
    const fileredText = allItems.filter((item) => item.workName.toLowerCase().includes(filter.toLowerCase()))
    const fileredNumber = allItems.filter((item) => item.workPrice.toString().toLowerCase().includes(filter.toLowerCase()))
    filtered = [...fileredText, ...fileredNumber]
  } else {
    filtered = allItems
  }

  const items = filtered.map((item) => (
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