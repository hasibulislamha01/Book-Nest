import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { AuthContext } from './AuthProvider';
import { useContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
// import PropTypes from 'prop-types'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};



const NestedModal = ({ bookName, bookId, quantity }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { user } = useContext(AuthContext)
    console.log(bookName, bookId, typeof quantity)

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
            const url = `http://localhost:5000/books/borrowed/${bookId}`;
            axios.patch(url)
                .then(response => {
                    console.log(response.data)
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "You borrowed the book",
                        footer: '<a href="#">Why do I have this issue?</a>',
                        customClass: {
                            container: 'custom-swal-container'
                        }
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
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <h2 id="parent-modal-title" className='text-center font-bold text-xl'>Please fill the form to continue</h2>
                    <form onSubmit={handleBorrow} className="mt-12 flex flex-col items-center justify-between gap-4 ">

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


                        <label className="form-control w-[220px] mx-auto mt-4 relative">
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
                                <button onClick={handleClose} className="btn bg-red-400">Cancel</button>
                            </form>
                        </div>
                        {/* <ExperimentModal></ExperimentModal> */}
                    </form>
                    {/* <ChildModal /> */}
                </Box>
            </Modal>
        </div>
    );
}



export default NestedModal