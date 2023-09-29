
const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <div className="registration-form-content">
        <div className="registration-form-image">
          <img src="https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups.jpg" alt="Logo" />
        </div>
        <div className="registration-form-fields">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
