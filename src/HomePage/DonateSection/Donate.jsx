import DonationButton from "../../Components/DonateButton";
import DonationAnimation from "../../Components/DonationAnimation";

const Donate = () => {
    return (
        <div className="mt-12 md:mt-28 lg:mt-40 text-center space-y-6">
            <h1 className="text-3xl ">Join Our <span className="text-emerald-500">Donation</span> Programme</h1>
            <p className="leading-7 px-2 md:px-12 lg:px-20">

                Your donation can make a significant impact in providing education to underprivileged children. By contributing to our cause, you are directly supporting the dreams and aspirations of these kids who lack access to quality education. Your generosity will help provide essential resources such as school supplies, textbooks, and educational programs, empowering these children to break the cycle of poverty and build a brighter future.  Together, we can make a difference in transforming young lives through education. <br /> Thank you for your support!
            </p>
            <img className="max-h-[400px] w-full object-cover rounded-xl" src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            <div className="flex flex-col-reverse lg:flex-row  lg:justify-between items-center">
                <DonationAnimation></DonationAnimation>
                <div className="w-[95%] lg:w-3/5 space-y-6">
                    <p className="leading-8">

                        Your donation can make a significant impact in providing education to underprivileged children. By contributing to our cause, you are directly supporting the dreams and aspirations of these kids who lack access to quality education.  Together, we can make a difference in transforming young lives through education. Thank you for your support!
                    </p>
                    <div className="w-[95%] lg:w-4/5 space-y-4 mx-auto">
                        <p className="text-xl text-[#1d2b3a] font-semibold">Enter your email to Join the Programme</p>
                        <div className="flex items-center relative">
                            <input type="text" placeholder="Your email" className="input border border-gray-400 rounded-3xl w-full" />
                            <span className="absolute max-h-min right-[0%]"><DonationButton></DonationButton></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;