import donationSvg from '../../public/donation.json'
import Lottie from "lottie-react";

const DonationAnimation = () => {
    const styles = {
        height: "300px",
        width: 'auto',
    }
    return (
        <div>
            <Lottie
                style={styles}
                animationData={donationSvg}
            >

            </Lottie>
        </div>
    );
};

export default DonationAnimation;