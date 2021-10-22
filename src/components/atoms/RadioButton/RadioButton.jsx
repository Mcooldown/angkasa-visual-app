import { Fragment } from "react"
import { Gap } from "..";

const RadioButton = ({ id, options, label, ...rest }) => {
     return (
          <Fragment>
               <div className="row align-items-center">
                    {
                         label &&
                         <label htmlFor={id} className="col-lg-4">
                              <h1 class="paragraph fw-bold">{label}</h1>
                         </label>
                    }
                    <div className={(label ? "col-lg-8" : "col-lg-12") + " d-flex"}>
                         {
                              options && options.map(optionItem => {
                                   return (
                                        <Fragment>
                                             <div className="form-check">
                                                  <input className="form-check-input" type="radio" id={id}
                                                       {...rest} value={optionItem} />
                                                  <label className="form-check-label" for={id}>
                                                       {optionItem}
                                                  </label>
                                             </div>
                                             <Gap width={30} />
                                        </Fragment>
                                   )
                              })
                         }
                    </div>
               </div>
          </Fragment>
     )
}

export default RadioButton;