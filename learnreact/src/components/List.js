import React from 'react'

function List() {
    const arr = [
        'item1',
        'item2',
        'item3',
        'item4'
    ]
  return (
    <div>
      {
        arr.map( (item, index) => {
            return (
                <div key={index}>{item}</div>
            )
        })
      }
    </div>
  )
}

export default List
