import { Fragment } from "react"
import { Gap } from "..";

const RadioButton = ({ id, options, label, error, value, ...rest }) => {
     return (
          <Fragment>
               <div className="row align-items-center">
                    {
                         label &&
                         <label htmlFor={id} className="col-lg-4">
                              <h1 className="paragraph fw-bold">{label}</h1>
                         </label>
                    }
                    <div className={(label ? "col-lg-8" : "col-lg-12") + " d-flex"}>
                         {
                              options && options.map(optionItem => {
                                   return (
                                        <Fragment key={optionItem}>
                                             <div className="form-check">
                                                  <input className="form-check-input" type="radio" id={id}
                                                       value={optionItem} checked={optionItem === value} {...rest} />
                                                  <label className="form-check-label" htmlFor={id}>
                                                       {optionItem}
                                                  </label>
                                             </div>
                                             <Gap width={30} />
                                        </Fragment>
                                   )
                              })
                         }
                         {
                              error &&
                              <small className="text-danger">{error}</small>
                         }
                    </div>
               </div>
          </Fragment>
     )
}

export default RadioButton;
