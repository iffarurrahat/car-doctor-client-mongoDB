import Container from "../../../ui/Container";

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 font-inter">
            <Container>
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative ml-5 md:md:ml-0'>
                        <img src="https://i.ibb.co/mBR0wbf/person.jpg" className="w-3/4 md:h-[450px] object-cover rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/YtRNhT3/parts.jpg" className="w-1/2 md:h-[300px] object-cover absolute right-8 top-1/2 max-w-sm rounded-lg shadow-2xl border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 p-4 mt-10 md:mt-0'>
                        <h3 className='text-xl text-primary font-bold mb-5'>About US</h3>
                        <h1 className="text-3xl md:text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-3 md:pt-6 tex-tertiary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-3 md:py-6 tex-tertiary">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="bg-primary text-white py-3 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">Get More Info</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;