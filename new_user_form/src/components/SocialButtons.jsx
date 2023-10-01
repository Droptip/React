import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <button className="margin-right-24">
        <FaGoogle /> Sign up
      </button>
      <button className="fb-button">
        <FaFacebook /> Sign up
      </button>
    </div>
  );
};

export default SocialButtons;
