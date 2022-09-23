import React from 'react'
import "./checkbox.css"

export const CheckBox = () => {
  return (
    <label className="container">
    <input type="checkbox" />
    <span className="checkmark"></span>
  </label>
  )
}
