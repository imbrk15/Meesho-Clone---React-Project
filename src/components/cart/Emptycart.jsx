import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

export default function Emptycart() {
  return (
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>
            Your Cart is Empty
          </h3>
        </div>
      </div>
    </div>
  )
}
