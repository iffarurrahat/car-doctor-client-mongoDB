import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Container from "../../ui/Container";
import { Link } from "react-router-dom";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `https://car-doctor-server-n1lm9ftde-iffarur-rahats-projects.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        // <-!------with axios-------->
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })

        // <-!------old version-------->
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-n1lm9ftde-iffarur-rahats-projects.vercel.app/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });

                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }

                    })

            }
        });
    }

    // handle confirm
    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-n1lm9ftde-iffarur-rahats-projects.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ status: "Confirm" })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    // updated status
                    // console.log(data);
                    // alert('updated status')

                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'Confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
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
                            <span> / Bookings</span>
                        </div>
                    </p>
                </Container>
            </div>
            {/* <-!----- main__content table-----> */}
            <div className="my-20">
                <Container>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/*<-!-----head----->*/}
                            <thead>
                                <tr>
                                    <th>Delete </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*<-!-----row----->*/}
                                {
                                    bookings?.map(booking => <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                        handleDelete={handleDelete}
                                        handleBookingConfirm={handleBookingConfirm}
                                    ></BookingRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Bookings;