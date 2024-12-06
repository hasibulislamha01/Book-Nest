import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import readSvg from '../../assets/readSvg.svg'
import BookCardSkeleton from "../../Components/UI/Skeleton/Skeleton";

const SameCategoryCard = ({ book, loading }) => {
    console.log(book)
    return (
        <div>
            {
                loading ?
                    <BookCardSkeleton />
                    :
                    <Card
                        className='antdCard bg-lavender dark:bg-charcoal dark:border-charcoal'

                        style={{
                            width: 250,
                            fontFamily: "IBM Plex Mono, monospace",
                        }}
                        cover={
                            <img alt="book image" src={book?.image} style={{ height: '250px', objectFit: 'cover', }} />
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
                        <div className='space-y-2'>


                            <p className='text-center font-bold'>

                                <span className='text-olive ml-2'>{book?.author}</span>
                            </p>
                            <Link to={`/allBooks/${book?._id}`} className='absolute right-[50%] top-[55%] transform translate-x-[50%] detailsBtn btn btn-sm p-1 rounded-full bg-lavender hover:bg-lavender hover:scale-105 border-none transition-all duration-500'>
                                <img src={readSvg} alt="" />
                            </Link>
                        </div>
                    </Card>
            }
        </div>
    );
};

SameCategoryCard.propTypes = {
    book: PropTypes.object,
    loading: PropTypes.bool
}

export default SameCategoryCard;