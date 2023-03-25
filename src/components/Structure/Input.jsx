import React from 'react'

function Input({ value, onChange, type, id, placeholder, required }) {
    return (
        <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full p-2.5"
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type={type}
            value={value}
        />
    )
}

export default Input