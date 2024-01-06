import Container from "../../../ui/Container";
import OurProductsCard from "./OurProductsCard";

const OurProducts = () => {

    const ourProducts = [
        {
            "id": 1,
            "image": "https://i.imgur.com/F2KwtAg.png",
            "title": "Car Engine Plug",
            "rating": 4.6,
            "price": 19.99
        },
        {
            "id": 2,
            "image": "https://i.imgur.com/V8Rp0Vh.png",
            "title": "LED Headlights",
            "rating": 3.7,
            "price": 49.99
        },
        {
            "id": 3,
            "image": "https://i.imgur.com/BfMvgVj.png",
            "title": "All-Season Tires",
            "rating": 2.1,
            "price": 89.99
        },
        {
            "id": 4,
            "image": "https://i.imgur.com/V8Rp0Vh.png",
            "title": "Premium Brake Pads",
            "rating": 2.9,
            "price": 39.99
        },
        {
            "id": 5,
            "image": "https://i.imgur.com/IRJO0US.png",
            "title": "High-Performance Oil Filter",
            "rating": 3.3,
            "price": 12.99
        },
        {
            "id": 6,
            "image": "https://i.imgur.com/tRIJf9i.pngpg",
            "title": "Reusable Air Filter",
            "rating": 4.9,
            "price": 29.99
        }
    ]





    return (
        <div className="my-24 font-inter">
            <Container>
                <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-primary">Our Products</h3>
                    <h5 className="text-3xl md:text-5xl font-bold my-3 md:my-5">Browse Our Products</h5>
                    <p className="md:w-1/2 mx-auto text-tertiary">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-3 md:px-0">
                    {
                        ourProducts.map(product => <OurProductsCard
                            key={product.id}
                            product={product}></OurProductsCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurProducts;