import React from 'react'

function Dropdown({options, onChange, value, id }) {
  return (
    <select
    onChange={onChange}
    value={value}
    id={id}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full p-2.5"
  >
    {options.map((value) => (
      <option key={value} className="text-xl py-4" value={value}>
        {value}
      </option>
    ))}
  </select>
  )
}

export default Dropdown