import { useEffect, useState } from "react";
import Container from "../../../ui/Container";
import OurServiceCard from "./OurServiceCard";

const OurService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);

    return (
        <div className="mt-24 font-inter">
            <Container>
                <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-primary">Our Service</h3>
                    <h5 className="text-3xl md:text-5xl font-bold my-3 md:my-5">Our Service Area</h5>
                    <p className="md:w-1/2 mx-auto text-tertiary">the majority have suffered alteration in some form, by injected humour, or randomised  words which do not look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-3 md:px-0">
                    {
                        services?.map((service, index) => <OurServiceCard
                            key={index}
                            service={service}></OurServiceCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurService;