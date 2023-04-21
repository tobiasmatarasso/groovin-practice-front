import React from 'react'

// SPECIFICS
import { Modal, Colors } from './specifics'

const ProductCard = () => {
  return (
    <div
      className="col-4 px-4 mb-5 pointer"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <div className="card">
        <img src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg" className="card-img-top product_img" alt="..." />

        <div className="card-body">
          <div className="row">
            <h5 className="card-title col-8">Card title</h5>
            <div className="col-4 text-end">$200</div>
          </div>

          <div className="row pt-2 ps-2">
            <Colors />
          </div>
          
        </div>
      </div>

      {/* Modal */}
        <Modal />

    </div>
  )
}

export default ProductCard
