import React from "react"

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const login = () => {
  return (
    <>
    <NavBar />
    <main>
    <section className="relative w-full h-full min-h-screen py-40">
      <div
        className="absolute top-0 w-full h-full bg-top bg-cover"
        style={{
          backgroundImage: 'url("./backgrounds/bg-fitness-cardio-dark.png")',
        }}
      ></div>
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center content-center justify-center h-full mt-60">
          <div className="w-full px-4 m-auto lg:w-4/12">
            <div className="relative flex flex-col w-full mb-6 bg-white rounded-lg shadow-lg">
              <div className="px-6 py-6 mb-0">
                <div className="mb-3 text-center">
                  <h6 className="text-sm font-bold text-blueGray-500">
                    Schnell einloggen mit
                  </h6>
                </div>
                <div className="text-center">
                  <a
                    href="#pablo"
                    className="inline-block px-3 py-2 mr-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-github-regular border-github-regular active:bg-github-active active:border-github-active hover:shadow-md"
                  >
                    <i className="mr-1 fab fa-github" /> {/* */}github
                  </a>
                  <a
                    href="#pablo"
                    className="inline-block px-3 py-2 mr-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active hover:shadow-md"
                  >
                    <i className="mr-1 fab fa-facebook" /> {/* */}facebook
                  </a>
                  <a
                    href="#pablo"
                    className="inline-block px-3 py-2 mr-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active hover:shadow-md"
                  >
                    <i className="mr-1 fab fa-twitter" /> {/* */}twitter
                  </a>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-200" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 font-bold text-center text-blueGray-500">
                  <small>Oder mit E-Mail fortfahren</small>
                </div>
                <form>
                  <div className="relative w-full">
                    <label className="block mb-2 ml-1 text-xs font-bold uppercase text-blueGray-500">
                      Email
                    </label>
                    <div className="pt-0 mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 "
                        autoComplete="off"
                        style={{
                          backgroundImage: 'url("data:image/png',
                          backgroundRepeat: "no-repeat",
                          backgroundAttachment: "scroll",
                          backgroundSize: "16px 18px",
                          backgroundPosition: "98% 50%",
                          cursor: "auto",
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label className="block mb-2 ml-1 text-xs font-bold uppercase text-blueGray-500">
                      Password
                    </label>
                    <div className="pt-0 mb-3">
                      <input
                        type="password"
                        placeholder="Password"
                        className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 "
                        autoComplete="off"
                        style={{
                          backgroundImage: 'url("data:image/png',
                          backgroundRepeat: "no-repeat",
                          backgroundAttachment: "scroll",
                          backgroundSize: "16px 18px",
                          backgroundPosition: "98% 50%",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div className="inline-block mt-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border rounded appearance-none form-checkbox border-blueGray-300 checked:bg-blueGray-700 checked:border-blueGray-700 focus:border-blueGray-300"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-500">
                        Angemeldet bleiben
                      </span>
                    </label>
                  </div>
                  <div className="mt-5 text-center">
                    <button className="inline-block w-full px-6 py-2 mr-2 text-sm font-bold text-center text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 hover:shadow-lg">
                      Einloggen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
  </>
  )
}

export default login;
