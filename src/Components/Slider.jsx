import { Carousel } from "antd";
import { Typewriter } from "react-simple-typewriter";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Slider = () => {
    const img2 = 'books.jpg';
    const img3 = 'cup.jpg';
    const img1 = 'kids.jpg';

    const sent1 = 'be in a dream'
    const sent2 = 'feel the dream'
    const sent3 = 'learn to dream'

    const sentArr = [sent1, sent2, sent3]

    const imgArr = [img1, img2, img3]
    return (
        <Carousel autoplay autoplaySpeed={2500}>
            {
                imgArr.map((slide, index) =>

                    <div key={index} style={contentStyle}>

                        <div className="hero min-h-screen mono" style={{ backgroundImage: `url(${slide})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="text-rose-100 opacity-50">
                                    <h1 className="mb-5 text-3xl  lg:text-5xl font-bold">
                                        A book is a dream <br />

                                    </h1>
                                    <p className=" text-3xl  lg:text-5xl font-bold w-full">
                                        <Typewriter
                                            words={sentArr}
                                        ></Typewriter>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </Carousel>
    );
};

export default Slider;