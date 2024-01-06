import { MdDelete } from "react-icons/md";


const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    // console.log(booking);
    const { _id, img, service, email, price, date, status } = booking || {}



    return (
        <tr>
            <th onClick={() => handleDelete(_id)}><MdDelete className="text-2xl text-red-600" /></th>
            <td>
                <div className="avatar">
                    <div className="rounded w-16 h-16">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{date}</td>
            <td>$ {price}</td>
            <td>
                {
                    status === 'Confirm' ?
                        <span className="btn btn-xs bg-primary text-white font-bold">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-xs">Please Confirm</button>
                }
            </td>
        </tr>
    );
};

export default BookingRow;