const Select = ({ label, id, options, error, ...rest }) => {
     return (
          <div className="row align-items-center">
               {
                    label &&
                    <label htmlFor={id} className="col-lg-4">
                         <h1 class="paragraph fw-bold">{label}</h1>
                    </label>
               }
               <div className={label ? "col-lg-8" : "col-lg-12"}>
                    <select className={"form-select cFormInput" + (error ? ' is-invalid' : '')} id={id} {...rest} >
                         <option value="">Choose...</option>
                         {
                              options.map(optionItem => {
                                   return (
                                        <option value={optionItem}>{optionItem}</option>
                                   )
                              })
                         }
                    </select>
                    {
                         error &&
                         <small className="text-danger">{error}</small>
                    }
               </div>
          </div>
     )
}

export default Select;
