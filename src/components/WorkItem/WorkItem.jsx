import React from 'react'

export default function WorkItem({ workName, workPrice }) {
  return (
    <>
      <span>{workName} </span>
      <span>{workPrice}</span>
      <button>Ред</button>
      <button>Х</button>
    </>
  );
}