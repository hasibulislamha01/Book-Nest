import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PropTypes from 'prop-types'

const BorrowModal = ({ book }) => {
    const { user } = useContext(AuthContext)

    const handleBorrow = event => {
        event.preventDefault()
        const form = event.target;
        const borrowerName = form.name.value;
        const borrowerEmail = form.email.value;
        const returnDate = form.date.value;
        const borrowerData = { borrowerName, borrowerEmail, returnDate, book }
        console.log(borrowerData)
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-block" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-300">Please fill the form to Continue</h3>
                    <form onSubmit={handleBorrow} className="mt-12 flex flex-col items-center justify-between gap-4">

                        <div>
                            <input
                                className="w-full input input-bordered"
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                disabled
                            />
                        </div>
                        <div>
                            <input
                                className="w-full input input-bordered"
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                disabled
                            />
                        </div>
                        

                        <label className="form-control w-1/2 mt-4 relative">
                            <span className="label-text absolute left-[5%] bottom-[99%]">Pick a date of return</span>
                            <input
                                type="date"
                                placeholder="Pick a date"
                                name="date"
                                defaultValue='none'
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                        </label>

                        <div className="modal-action justify-center">
                            <button type="submit" className="btn bg-teal-400">Borrow</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-red-400">Cancel</button>
                            </form>
                        </div>
                    </form>

                </div>
            </dialog>
        </div>
    );
};

BorrowModal.propTypes = {
    book: PropTypes.any
}

export default BorrowModal;