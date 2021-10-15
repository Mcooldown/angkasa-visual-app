import { Sample } from "../../../assets";
import { Gap } from "../../atoms";
import "./DesignerCard.scss";

const DesignerCard = ({ name, specialty, description, image }) => {
     return (
          <div className="cDesignerCard card">
               <div className="card-img-top">
                    <img src={image ? image : Sample} width="100%" alt="sample" />
               </div>
               <div className="card-body text-center my-3">
                    <h3 className="textBlue2 heading2">{name}</h3>
                    <Gap height={50} />
                    <h5 className="textBlue2 subHeading3">{specialty}</h5>
                    <Gap height={10} />
                    <p className="textGray3 paragraph">
                         {description}
                    </p>
               </div>
          </div>
     )
}

export default DesignerCard;
