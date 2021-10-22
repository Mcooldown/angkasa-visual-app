const Select = ({ label, id, options, ...rest }) => {
     return (
          <div className="row align-items-center">
               {
                    label &&
                    <label htmlFor={id} className="col-lg-4">
                         <h1 class="paragraph fw-bold">{label}</h1>
                    </label>
               }
               <div className={label ? "col-lg-8" : "col-lg-12"}>
                    <select className="form-select cFormInput" id={id} {...rest} >
                         {
                              options.map(optionItem => {
                                   return (
                                        <option value={optionItem}>{optionItem}</option>
                                   )
                              })
                         }
                    </select>
               </div>
          </div>
     )
}

export default Select;
