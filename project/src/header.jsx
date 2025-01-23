import React from 'react'

export const header = () => {
  const test = () => {
    var unusedVariable = 42; // Should trigger 'no-unused-vars' warning
    console.log('Hello World') // Should trigger 'no-console' warning
    return  "Hello"; // Should trigger 'quotes' rule (single quotes expected)
  };
  return (
    <div>header</div>
  )
}
