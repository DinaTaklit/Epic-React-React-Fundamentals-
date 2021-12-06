// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// Another option
// function Box({style, size, className = '', ...otherProps}) {
//   const sizeClassName = size ? `box--${size}` : ''
//   return (
//     <div
//       className={`box ${className} ${sizeClassName}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     />
//   )
// }

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
