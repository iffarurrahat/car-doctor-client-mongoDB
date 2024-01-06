import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OurServiceCard = ({ service }) => {
    const { _id, img, title, price } = service || {}
    return (
        <div className="card bg-base-100 shadow hover:border hover:duration-300">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-xl h-60 object-cover" />
            </figure>
            <div className="flex justify-between p-5">
                <div className="font-medium">
                    <h2 className="text-xl mb-2">{title}</h2>
                    <p className="text-lg text-primary">Price: ${price}</p>
                </div>
                <Link to={`/checkout/${_id}`} className="mt-auto">
                    <button><IoMdArrowForward className="text-primary text-xl" /></button>
                </Link>
            </div>
        </div>
    );
};

export default OurServiceCard;