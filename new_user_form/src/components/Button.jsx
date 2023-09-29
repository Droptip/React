import { FaFacebook, FaGoogle } from "react-icons/fa";

const Button = () => {
  return (
    <div>
      <button>
        <FaFacebook /> Sign up with Facebook
      </button>
      <button>
        <FaGoogle /> Sign up with Google
      </button>
    </div>
  );
};

export default Button;
