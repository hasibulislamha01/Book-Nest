import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {


    return (
        <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('that you hold in your hand')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('that is a gateway for dreams to be unfold')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('that makes you feel you haven`t')
                        .start();
                }}
            />
        </div>
    );
};

export default TypeWriter;