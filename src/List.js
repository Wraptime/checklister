import React from 'react'

const List = ({ items = [] }) => (
  <div>
    { items.map(item => (
      <div>
        <input type="checkbox" />
        {item}
      </div>
    ))}
  </div>
)

export default List
