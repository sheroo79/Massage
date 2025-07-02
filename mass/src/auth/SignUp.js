import React from "react";

function SignUp() {
  return (
    <>
    <div className="p-7 flex justify-center bg-[#F2F0FF] w-full">
      <div class="flex flex-col justify-center  p-4">
        <div class="max-w-md w-full mx-auto border bg-white border-gray-300 rounded-2xl p-8">
          <div class="text-center mb-7">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <small className="text-gray-400">
              Enter Your details to continue
            </small>
          </div>

          <form>
            <div class="space-y-4">
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  class="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Date of Birth
                </label>
                <input
                  name="birth"
                  type="date"
                  class="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Jan, 12 1980"
                />
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="John@email.com"
                />
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  class="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Confirm Password
                </label>
                <input
                  name="cpassword"
                  type="password"
                  class="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter confirm password"
                />
              </div>

              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="text-slate-600 ml-3 block text-sm"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-[#5e50bf] font-medium hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div class="mt-5">
              <button
                type="button"
                class="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-full rounded-tr-none text-white bg-[#5e50bf] hover:bg-[#4e38db] focus:outline-none cursor-pointer"
              >
                Create an account
              </button>
            </div>
            <p class="text-slate-600 text-sm mt-3 text-center">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                className="text-[#5e50bf] font-medium hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
