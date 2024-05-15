import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PropTypes from 'prop-types'
import axios from "axios";
import Swal from "sweetalert2";
import ExperimentModal from "./ExperimentModal";

const BorrowModal = ({ bookName, bookId, quantity }) => {
    const { user } = useContext(AuthContext)
    console.log(bookName, bookId, quantity)

    const handleBorrow = event => {
        event.preventDefault()
        const form = event.target;
        const borrowerName = form.name.value;
        const borrowerEmail = form.email.value;
        const returnDate = form.date.value;
        const borrowerData = { borrowerName, borrowerEmail, returnDate, bookName }
        console.log(borrowerData)


        // send borrower data to database


        // update book information of the borrowed book
        const confirmBorrowBook = () => {
            const url = `https://booknest-phi.vercel.app/borrowed/${bookId}`;
            axios.patch(url)
                .then(response => {
                    console.log(response.data)
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "You borrowed the book",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                })
                .catch(error => {
                    console.error(error)
                })
        }

        if (quantity > 0) {
            confirmBorrowBook()
        } else {
            Swal.fire({
                icon: "error",
                title: "Out of stock",
                text: "There are no copies left to borrow now",
                footer: '<a href="#">Why do I have this issue?</a>',
                customClass: {
                    container: 'custom-swal-container'
                }
            });
        }

    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className={`btn btn-block  ${quantity === 0 ? 'disabled' : 'active'}`} onClick={() => document.getElementById('my_modal_4').showModal()}>Borrow</button>
            <dialog  id="my_modal_4" className="modal">
                <div className="modal-box lg:w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-red-300">Please fill the form to Continue</h3>
                    <form onSubmit={handleBorrow} className="mt-12 flex flex-col items-center justify-between gap-4  border border-red-400">

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


                        <label className="form-control w-1/4 mx-auto mt-4 relative">
                            <span className="label-text absolute left-[5%] bottom-[99%]">Pick a date of return</span>
                            <input
                                type="date"
                                placeholder="Pick a date"
                                name="date"
                                defaultValue='none'
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <div className="modal-action justify-center">
                            <button type="submit" className={`btn bg-teal-400`}>Borrow</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-red-400">Cancel</button>
                            </form>
                        </div>
                        <ExperimentModal></ExperimentModal>
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