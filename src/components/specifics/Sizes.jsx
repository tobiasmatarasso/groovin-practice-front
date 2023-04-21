import React from 'react'

const Sizes = () => {
  return [1, 2, 3].map((sizes, i) => {
    return (
      <span className="tx-grey small fit size_selected">L</span>
    )
  })
}

export default Sizes
