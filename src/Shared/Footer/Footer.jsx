import Container from "../../ui/Container";
import footerLogo from "../../assets/footer_logo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="py-10 md:py-20 bg-secondary font-inter">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center lg:text-start">
                    {/* <-!----- footer__one ----> */}
                    <div>
                        <div>
                            <img className="mx-auto lg:mx-0" src={footerLogo} alt="" />
                            <p className="text-white text-2xl mt-2">Car Doctor</p>
                        </div>
                        <p className="text-protein py-3">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <div className="flex gap-2 justify-center lg:justify-start">
                            <span className="bg-tertiary rounded-full p-2"><FaFacebookF className="text-white" /></span>
                            <span className="bg-tertiary rounded-full p-2"> <FaXTwitter className="text-white" /></span>
                            <span className="bg-tertiary rounded-full p-2"><FaInstagram className="text-white" /></span>
                            <span className="bg-tertiary rounded-full p-2"><FaLinkedinIn className="text-white" /></span>
                        </div>
                    </div>
                    {/* <-!----- footer__tow ----> */}
                    <div className="border-solid">
                        <div className="px-auto lg:pl-32">
                            <h2 className="text-2xl text-white mb-8">About</h2>
                            <div className="text-protein list-none space-y-3">
                                <li>Home</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </div>
                        </div>
                    </div>
                    {/* <-!----- footer__three ----> */}
                    <div className="border-solid">
                        <div className="px-auto lg:pl-32">
                            <h2 className="text-2xl text-white mb-8">Company</h2>
                            <div className="text-protein list-none space-y-3">
                                <li>Why Car Doctor</li>
                                <li>About</li>
                            </div>
                        </div>
                    </div>
                    {/* <-!----- footer__four ----> */}
                    <div className="border-solid">
                        <div className="px-auto lg:pl-32">
                            <h2 className="text-2xl text-white mb-8">Support</h2>
                            <div className="text-protein list-none space-y-3">
                                <li>Support Center</li>
                                <li>Feedback</li>
                                <li>Accessibility</li>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;