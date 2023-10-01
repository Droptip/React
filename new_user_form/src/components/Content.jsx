import SocialButtons from "./SocialButtons.jsx";
import UserForm from "./UserForm.jsx";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div>
          <h1>Get Started</h1>
          <p className="header-text">Already have an account?</p>
          <a className="header-text" href="#">
            Log in
          </a>
        </div>
        <div>
          <SocialButtons />
        </div>
        <div className="text-separator">Or</div>
        <div>
          <UserForm></UserForm>
        </div>
      </div>
    </div>
  );
};

export default Content;
