import emptyBox from '../../public/Animation.json'
import Lottie from "lottie-react";

const EmptySvg = () => {
    const styles = {
        height: "500px",
        width: 'auto',
    }
    return (
        <div>
            <Lottie
                style={styles}
                animationData={emptyBox}
            >

            </Lottie>
        </div>
    );
};

export default EmptySvg;