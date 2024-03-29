import './button.scss';

const Button = ({ isLoading, type, children, isFull, ...rest }) => {

     if (isLoading) return (
          <button className={"btn cButton d-flex align-items-center justify-content-center " + (type === 1 ? 'cButtonDefault' : (type === 2) ? 'cButtonVar2' : '') + (isFull ? ' w-100' : '')} disabled {...rest} >
               <span className="spinner-border" role="status">
               </span>
               <span className="paragraph ms-3 fw-bold">Please wait...</span>
          </button>
     );
     else return (
          <button className={"btn cButton  " + (type === 1 ? 'cButtonDefault' : (type === 2) ? 'cButtonVar2' : '') + (isFull ? ' w-100' : '')} {...rest} >
               {children}
          </button>
     );
}

export default Button;