import React from 'react'

const Loader = ({ isWhite }) => {
     return (
          <div className="d-flex justify-content-center">
               <div class={"spinner-border " + (isWhite === true ? " text-white" : " textBlue1")} style={{ width: "5rem", height: "5rem" }} role="status">
                    <span class="visually-hidden">Loading...</span>
               </div>
          </div>
     )
}

export default Loader
