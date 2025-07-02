import React from "react";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <>
      <div className="p-7 flex justify-center bg-[#F2F0FF] w-full">
        <div class="flex flex-col justify-center p-4 md:w-96">
          <div class="w-full mx-auto border bg-white border-gray-300 rounded-2xl p-8">
            <div class="text-center mb-7">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <small className="text-gray-400">
                Enter Your details to continue
              </small>
            </div>

            <form>
              <div class="space-y-4">
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
            
              </div>

              <div class="mt-5">
                <button
                  type="button"
                  class="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-full rounded-tr-none text-white bg-[#5e50bf] hover:bg-[#4e38db] focus:outline-none cursor-pointer"
                >
                  Sign In
                </button>
              </div>
              <p class="text-slate-600 text-sm mt-3 text-center">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-[#5e50bf] font-medium hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
