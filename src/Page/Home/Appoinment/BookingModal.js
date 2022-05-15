import React from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ treatment, setTreatment, date }) => {

    const [user, loading] = useAuthState(auth);

    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot,);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-secondary btn-circle absolute right-4 top-4">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />


                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs my-3" />
                    </form>



                </div >
            </div >
        </div >
    );
};

export default BookingModal;