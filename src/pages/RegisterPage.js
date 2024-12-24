import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
    // Simulate successful registration
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <>
      <div className="register__form">
        <div className="container mx-auto p-4 flex justify-center min-h-[600px] items-center">
          <form onSubmit={handleSubmit}>
            <div className="w-full max-w-lg p-4 shadow-md md:p-10">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold text-brand">
                  Join the Adventure!
                </h2>
                <p className="text-gray-500">
                  Create your account and start your journey with us
                </p>
              </div>
              
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 relative">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                />
              </div>

              <div className="mb-6">
                <input
                  name="phoneNumber"
                  placeholder="Phone"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                />
              </div>

              <div className="mb-6">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                />
              </div>

              <div className="mb-6">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border block w-full px-4 py-3 mb leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                />
              </div>

              <div className="flex items-center w-full my-3">
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-bold text-white rounded bg-button hover:bg-button-hover focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>

              <Link
                to="/login"
                className="inline-block w-full text-lg text-center text-gray-500 align-baseline hover:text-blue-800"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;