import PropTypes from 'prop-types'
import { Rating, } from '@mui/material';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import BookCardSkeleton from '../../Components/UI/Skeleton/Skeleton';
const { Meta } = Card;


const BookCard = ({ book, loading }) => {

    // console.log(book)
    // Initialize AOS
    Aos.init();
    return (
        <div>
            {
                loading ?
                    <BookCardSkeleton />
                    :
                    <Card
                        className='antdCard bg-lavender dark:bg-charcoal dark:border-charcoal'
                        data-aos="fade-up" data-aos-duration="1000"
                        hoverable
                        // cover
                        style={{
                            width: 250,
                            fontFamily: "IBM Plex Mono, monospace",
                        }}
                        cover={
                        <img alt="book image" src={book?.image} style={{ height: '250px',  objectFit: 'cover', }} />
                    }
                    >
                        <Meta

                            title={<h2
                                style={
                                    {
                                        textAlign: "center",
                                        fontSize: "1.3rem",
                                        wordWrap: "break-word"
                                    }
                                }
                                className='text-purple dark:text-lavender'>
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
                        <div data-aos="" data-aos-duration="2000" className='space-y-2'>
                            {/* <div>
                                <Rating name="read-only" value={book?.rating} readOnly size="small" />
                            </div> */}

                            <p className='text-center font-bold'>
                                {/* <span className='text-indigo-500 mr-2'>{book?.category}</span>
                                by */}
                                <span className='text-olive ml-2'>{book?.author}</span>
                            </p>
                            {/* <Link to={`/allBooks/update/${book?._id}`} className='btn btn-sm bg-purple dark:bg-lavender text-lavender dark:text-purple border-none'>
                               Details
                            </Link> */}
                        </div>
                    </Card>
            }
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object,
    loading: PropTypes.bool
}

export default BookCard;