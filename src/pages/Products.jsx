import React from 'react'
import 'react-tabulator/lib/styles.css'

// COMPONENTS
import { ProductCard } from '../components'

const Products = () => {
  return (
    <div className="col-9 full_hieght products px-5 overflow-scroll">
      <h3 className="pt-5 ps-3">
        <b>Hombres (8)</b>
      </h3>

      <div className="row pt-5">
        {[1, 2, 3, 4, 5, 6].map((item, i) => {
          return <ProductCard key={i}>{item}</ProductCard>
        })}
      </div>

    </div>
  )
}

export default Products
