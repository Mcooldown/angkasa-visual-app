import "./Input.scss";

const Input = ({ label, id, type, error, ...rest }) => {
     return (
          <div className="row align-items-center">
               {
                    label &&
                    <label htmlFor={id} className="col-lg-4">
                         <h1 class="paragraph fw-bold">{label}</h1>
                    </label>
               }
               <div className={label ? "col-lg-8" : "col-lg-12"}>
                    <input type={type} className={"form-control cFormInput" + (error ? ' is-invalid' : '')} id={id} {...rest} />
                    {
                         error &&
                         <small className="text-danger">{error}</small>
                    }
               </div>
          </div>
     )
}

export default Input;
