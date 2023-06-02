import React from 'react'
import { Link } from 'react-router-dom'

export default function Signout() {
  // console.log('Signout', data)
  return (
    <div className="flex justify-between">
      <button onClick={()=>showModal()}>
        Suraj Gaundel
      </button>
      <dialog>
        <p>hEllo from dailog</p>
      </dialog>
    </div>
  )
}
