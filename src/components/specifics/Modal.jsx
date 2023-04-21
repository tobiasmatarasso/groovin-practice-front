import React from 'react'

import Colors from './Colors'
import Sizes from './Sizes'

const Modal = () => {
  return (
    <div
      class="modal"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div className="row">
            <img
              className="col-5 p-0 rounded-start modal_img"
              src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg"
              alt="..."
            />

            <div className="col-7 p-4">
              <p className="tx-primary mb-2">Hombres</p>

              <h3>Title of clothes</h3>

              <h5 className="tx-grey mt-3">$200</h5>

              <p className="tx-grey small mt-4 mb-2">SELECT SIZE</p>

              <div className="row ps-2">

                <Sizes />
                
              </div>

              <p className="tx-grey small mt-4 mb-2">SELECT COLOR</p>

              <div className="row ps-3">
                <Colors className="ps-2" />
              </div>

              <p className="tx-grey small mt-4 mb-2">PRODUCT DETAIL</p>
              <p className="tx-grey small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quidem facere dolor maiores dolorum aut laboriosam minus,
                temporibus a neque facilis quis magni excepturi, unde, deserunt
                nisi quisquam vitae cumque.
              </p>

              <div className="row justify-content-end pe-4">

                <div className="cart-button">+</div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
