import { DefaultProfile } from "../../../assets"
import { Gap } from "../../atoms"
import "./TestimonyCard.scss";

const TestimonyCard = ({ name, gender, age, description, image, leftSideImage }) => {
     return (
          <div className="cTestimonyCard card border-0 bg-white">
               <div className="card-body">
                    <div className="row justify-content-between align-items-center">
                         <div className={"col-lg-3 my-3 " + (leftSideImage ? '' : 'order-lg-2')}>
                              <div className="cImageSquare">
                                   <img src={image ? image : DefaultProfile} alt={name} className="" />
                              </div>
                         </div>
                         <div className={"col-lg-9 textBlue1 my-3 " + (leftSideImage ? 'pe-lg-5' : 'ps-lg-5 order-lg-1 text-lg-end')}>
                              <h1 className="heading2">{name}</h1>
                              <Gap height={20} />
                              <p className="paragraph fst-italic">{gender}, {age}</p>
                              <Gap height={10} />
                              <p className="paragraph">
                                   {description}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default TestimonyCard
