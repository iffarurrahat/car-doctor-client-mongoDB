import Container from "../../../ui/Container";

const Schedule = () => {
    return (
        <div className="bg-secondary my-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 py-16 px-10">
                    <div className="flex items-center gap-5">
                        <img src="https://i.ibb.co/N9swxjc/time-date.png" className="h-10 w-10" alt="" />
                        <div className="text-white">
                            <p><small>We are open monday-friday</small></p>
                            <p className="text-2xl font-bold mt-2">7:00 am - 9:00 pm</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 my-8 md:my-0">
                        <img src="https://i.ibb.co/dDvMc37/location.png"  className="h-10 w-10" alt="" />
                        <div className="text-white">
                            <p><small>Have a question?</small></p>
                            <p className="text-2xl font-bold mt-2">+2546 251 2658</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="https://i.ibb.co/dm3w7kQ/contact.png"  className="h-10 w-10" alt="" />
                        <div className="text-white">
                            <p><small>Need a repair? our address</small></p>
                            <p className="text-2xl font-bold mt-2">Liza Street, New York</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Schedule;