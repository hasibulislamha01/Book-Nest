import { Rating } from "@mui/material";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import PurpleButton from "../../Components/UI/PurpleButton";

const SameCategoryCard = ({ book }) => {
    console.log(book)
    return (
        <Card
            className="bg-lavender dark:bg-ash dark:border-ash shadow-xl pb-0"
            hoverable
            // cover
            style={{
                width: 300,
            }}
            cover={<img alt="book image" src={book?.image} style={{ height: '300px', objectFit: 'cover' }} />}
        >
            <Meta
                className=""
                title={
                    <h2
                        className="text-purple dark:text-offWhite"
                        style={
                            {
                                textAlign: "center",
                                fontSize: "1.3rem",
                                wordWrap: "break-word"
                            }
                        }>
                        {book?.name}
                    </h2>
                }
                description={
                    <h3
                        style={{
                            textAlign: "center",
                            fontSize: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >

                    </h3>
                }



            />
            <div className='text-center space-y-1'>

                <Rating name="read-only" value={book?.rating} readOnly size="small" />

                <p className='font-bold text-olive text-lg'>{book?.author}</p>

                <Link to={`/allBooks/${book?._id}`} className="mt-2">
                    <PurpleButton
                        btnTxt={"Details"}
                    ></PurpleButton>
                </Link>
            </div>
        </Card>
    );
};

SameCategoryCard.propTypes = {
    book: PropTypes.object
}

export default SameCategoryCard;