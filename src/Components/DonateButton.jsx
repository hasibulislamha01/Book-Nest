import donateButton from '../../public/donateButton.json'
import Lottie from "lottie-react";

const DonationButton = () => {
    const styles = {
        height: "50px",
        width: 'auto',
    }
    return (
        <div>
            <Lottie
                style={styles}
                animationData={donateButton}
            >

            </Lottie>
        </div>
    );
};

export default DonationButton;