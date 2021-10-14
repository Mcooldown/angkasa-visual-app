import { Sample } from "../../../assets";
import { Gap } from "../../atoms";
import "./WorkCard.scss";

const WorkCard = ({ title, description, image }) => {
     return (
          <div className="cWorkCard card">
               <div className="card-img-top">
                    <img src={image ? image : Sample} width="100%" alt="sample" />
               </div>
               <div className="card-body text-center my-3">
                    <h3 className="textBlue2 heading2">{title}</h3>
                    <Gap height={10} />
                    <p className="textGray3 paragraph">
                         {description}
                    </p>
               </div>
          </div>
     )
}

export default WorkCard;
