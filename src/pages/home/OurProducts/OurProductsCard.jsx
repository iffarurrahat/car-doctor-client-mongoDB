import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const OurProductsCard = ({ product }) => {
    const { image, title, rating, price } = product || {}
    return (
        <div className="card bg-base-100 shadow ">
            <figure className="px-10 pt-10">
                <img className="rounded-xl h-40 w-40" src={image} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <p>
                    <Rating
                        emptySymbol={< FaStarHalfAlt className="text-orange-600 pl-1 h-5 w-5" />}
                        fullSymbol={<FaStar className="text-orange-600 pl-1 h-5 w-5" />}
                        initialRating={rating}
                        readonly
                    />
                </p>
                <h2 className="card-title">{title}</h2>
                <h4>$ {price}</h4>
            </div>
        </div>
    );
};

export default OurProductsCard;