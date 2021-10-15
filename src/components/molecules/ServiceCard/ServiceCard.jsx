import { Sample } from "../../../assets";
import { Gap, Button } from "../../atoms";
import "./ServiceCard.scss";

const ServiceCard = ({ title, rangeMin, rangeMax, description, image }) => {
     return (
          <div className="cServiceCard card">
               <div className="card-img-top">
                    <img src={image ? image : Sample} width="100%" alt="sample" />
               </div>
               <div className="card-body text-center my-3">
                    <h3 className="textBlue2 heading2">{title}</h3>
                    <Gap height={10} />
                    <p className="textGray3 paragraph">
                         {description}
                    </p>
                    <Gap height={30} />
                    <h5 className="textBlue1 subHeading2">Price Range: Rp.{rangeMin} - Rp{rangeMax}</h5>
                    <Gap height={40} />
                    <Button type={1}><h5 className="textBlue1 m-0 p-2">Service Details</h5></Button>
               </div>
          </div>
     )
}

export default ServiceCard;
