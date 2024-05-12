import PropTypes from 'prop-types'
import { Rating, } from '@mui/material';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import LoadingSkeleton from '../../Components/Skeleton';
const { Meta } = Card;


const BookCard = ({ book }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false); 
        }, 2000);
        return () => clearTimeout(delay);
    }, [])
    // console.log(book)
    // Initialize AOS
    Aos.init();
    return (
        <div>
            {
                loading ?
                   <LoadingSkeleton/>
                    :
                    <Card
                        data-aos="fade-up" data-aos-duration="1000"
                        hoverable
                        // cover
                        style={{
                            width: 300,
                        }}
                        cover={<img alt="example" src={book?.image} style={{ height: '300px', objectFit: 'cover', }} />}
                    >
                        <Meta

                            title={<h2
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
                        <div data-aos="fade-up" data-aos-duration="2000" className='text-center space-y-2'>
                            <div>
                                <Rating name="read-only" value={book?.rating} readOnly size="small" />
                            </div>

                            <p className='font-bold'>
                                <span className='text-indigo-500 mr-2'>{book?.category}</span>
                                by
                                <span className='text-teal-500 ml-2'>{book?.author}</span>
                            </p>
                            <Link to={`/allBooks/update/${book?._id}`} className='btn btn-sm bg-sky-200'>Update</Link>
                        </div>
                    </Card>
            }
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;