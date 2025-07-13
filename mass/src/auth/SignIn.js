import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({
    name: "",
    birth: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "" ? "Full name is required" : "",
      birth: formData.birth.trim() === "" ? "Date of birth is required" : "",
      email: formData.email.trim() === "" ? "Email is required" : "",
      password: formData.password.trim() === "" ? "Password is required" : "",
      cpassword:
        formData.cpassword.trim() === "" ? "Confirm password is required" : "",
    };

    setError(newErrors);

    // Optional: Only proceed if no errors
    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (!hasError) {
      console.log("Form submitted", formData);
    }
  };

  console.log(error);
  console.log(formData);
  return (
    <>
      <div className="p-7 flex justify-center bg-[#F2F0FF] w-full">
        <div class="flex flex-col justify-center p-3 md:w-96 w-[440px]">
          <div class="w-full mx-auto border bg-[#FAFAFA] border-gray-300 rounded-2xl p-8">
            <div class="text-center mb-7">
              <h1 className="text-3xl font-bold text-[#0E1E40] font-montserrat">
                Sign In
              </h1>
              <small className="text-[#858FAD] text-xs font-montserrat font-medium">
                Enter Your details to continue
              </small>
            </div>

            <form onSubmit={handleSubmit}>
              <div class="space-y-4">
                <div>
                  <label class="text-[#858FAD] text-xs font-montserrat font-semibold mb-2 block">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    class="text-[#858FAD] bg-[#F3F2F8]  w-full h-[48px] text-sm px-4 py-3 rounded-xl outline-blue-500"
                    placeholder="John@email.com"
                  />
                  <p className="text-red-500 text-xs mt-1">{error.email}</p>
                </div>
                <div>
                  <label class="text-[#858FAD] text-xs font-montserrat font-semibold mb-2 block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      class="text-[#858FAD] bg-[#F3F2F8]  w-full h-[48px] text-sm px-4 py-3 rounded-xl outline-blue-500"
                      placeholder="Enter password"
                    />
                    <p className="text-red-500 text-xs mt-1">
                      {error.password}
                    </p>
                    <div className="absolute top-4 right-3 text-[#858FAD] cursor-pointer">
                      <FaRegEyeSlash />
                    </div>
                  </div>
                  <small className="text-[#5E50BF] text-xs cursor-pointer float-right font-montserrat font-semibold">Forgot password?</small>
                </div>
              </div>

              <div class="mt-7">
                <button
                  type="submit"
                  class="w-full py-3 px-4 text-sm tracking-wider font-semibold font-montserrat rounded-full rounded-tr-none text-white bg-[#5E50BF] focus:outline-none cursor-pointer"
                >
                  Sign in
                </button>
              </div>
              <p class="text-[#858FAD] text-xs font-montserrat font-medium mt-7 text-center">
                Don't have an account?
                <br />
                <Link
                  to="/signup"
                  className="text-[#5e50bf] font-medium hover:underline ml-1"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
