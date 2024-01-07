import { Link, useLoaderData } from "react-router-dom";
import Container from "../../ui/Container";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {

    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price, img } = service || {}

    const handleCheckout = event => {
        event.preventDefault();

        const from = event.target;
        const name = from.target.value;
        const date = from.date.value;
        const email = user?.email;
        const booking = {
            serviceId: _id,
            service: title,
            customerName: name,
            price: price,
            img,
            email,
            date,
        }
        // console.log(booking);

        fetch('https://car-doctor-server-n1lm9ftde-iffarur-rahats-projects.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "This booking successfully.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="font-inter">
            {/* <-!----- top content-----> */}
            <div className="relative">
                <img src="https://i.ibb.co/N16j5j1/checkout.png" className="bg-no-repeat object-cover w-full h-40 md:h-72 brightness-50" alt="" />
                <Container>
                    <h2 className="text-2xl md:text-4xl absolute top-1/2  text-white font-bold">Check Out</h2>
                    <p className="w-1/6 text-center mx-auto">
                        <div className="absolute bottom-0 bg-primary text-white py-3 px-5">
                            <Link to='/'>Home</Link>
                            <span> / Checkout</span>
                        </div>
                    </p>
                </Container>
            </div>
            {/* <-!----- main content-----> */}
            <div className="font-inter">
                {/*<-!------checkout----->*/}
                <Container>
                    <div className="md:flex justify-between items-center my-10 md:py-26 lg:py-28">
                        <div className="card-body border py-32">
                            <h1 className="text-3xl font-bold text-center mb-10">Checkout Service</h1>
                            {/* <-!------ from -----> */}
                            <form onSubmit={handleCheckout} className="md:w-3/4 mx-auto">
                                {/* <-!------ row name or date -----> */}
                                <div className="md:flex items-center gap-5">
                                    <div className="form-control md:flex-1">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control md:flex-1">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* <-!------ row name or email -----> */}
                                <div className="md:flex items-center gap-5 my-3">
                                    <div className="form-control md:flex-1">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control md:flex-1">
                                        <label className="label">
                                            <span className="label-text">Amount Due</span>
                                        </label>
                                        <input type="text" name='price' defaultValue={'$' + price} placeholder="Amount Due" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded" type="submit" value="Checkout" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default CheckOut;