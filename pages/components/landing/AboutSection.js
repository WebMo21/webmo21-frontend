import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div
            className="w-full md:w-4/12 ml-auto mr-auto px-4"
            data-aos="fade-right"
          >
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="./backgrounds/bg-fitness-woman-time.jpeg"
            />
          </div>
          <div
            className="w-full md:w-5/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
          >
            <div className="md:pr-12">
              <small className="text-white">Über Fitness Time</small>
              <h3 className="text-4xl uppercase font-bold">
                Bleibe deinen Zielen treu
              </h3>
              <p className="mt-4 text-lg leading-relaxed">
                Erstelle deinen individuellen Trainingsplan und ordne
                vordefinierte oder eigene Übungen ganz nach deinen Vorstellungen
                in diesen ein.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                        <svg
                          className="h-10 w-10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#10b981"
                          viewBox="0 0 512 512"
                          enableBackground="new 0 0 512 512"
                          width="512"
                          height="512"
                        >
                          <g>
                            <path
                              d="m389.447 64.015h-127.015l-13.932 6.972-15.583-6.972h-125.364c-38.202 0-69.171 30.969-69.171 69.171v294.642c0 38.202 30.969 69.171 69.171 69.171h281.893c38.202 0 69.171-30.969 69.171-69.171v-294.642c.001-38.202-30.968-69.171-69.17-69.171z"
                              fill="#10b981"
                            />
                            <path
                              d="m108.432 266.716c0-81.651 26.914-154.585 77.639-202.701h-78.517c-38.202 0-69.171 30.969-69.171 69.171v294.643c0 38.202 30.969 69.171 69.171 69.171h102.638c-67.716-40.264-101.76-117.96-101.76-230.284z"
                              fill="#10b981"
                            />
                            <path
                              d="m107.554 446.95c-10.544 0-19.122-8.578-19.122-19.122v-294.642c0-10.543 8.578-19.121 19.122-19.121h281.893c10.544 0 19.122 8.578 19.122 19.121v294.642c0 10.544-8.578 19.122-19.122 19.122z"
                              fill="#fff"
                            />
                            <path
                              d="m322.98 44.024h-26.63c-2.037-24.65-22.674-44.024-47.85-44.024-25.176 0-45.813 19.374-47.849 44.024h-26.631c-15.284 0-27.674 12.39-27.674 27.674v32.678c0 15.284 12.39 27.674 27.674 27.674h148.96c15.284 0 27.674-12.39 27.674-27.674v-32.677c0-15.284-12.39-27.675-27.674-27.675zm-74.48 21.93c-8.606 0-15.583-6.977-15.583-15.583s6.977-15.583 15.583-15.583 15.583 6.977 15.583 15.583-6.977 15.583-15.583 15.583z"
                              fill="#c7c5cb"
                            />
                            <g>
                              <path
                                d="m292.592 102.875h-88.184c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h88.184c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
                                fill="#10b981"
                              />
                            </g>
                            <path
                              d="m172.826 202.717 18.976-18.976c2.929-2.929 2.929-7.678 0-10.606-2.929-2.93-7.678-2.93-10.606 0l-18.976 18.975-18.976-18.976c-2.928-2.929-7.677-2.93-10.606 0-2.929 2.929-2.929 7.677 0 10.606l18.976 18.976-18.976 18.977c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l18.976-18.977 18.976 18.977c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.677 0-10.606z"
                              fill="#10b981"
                            />
                            <circle
                              cx="308.531"
                              cy="365.288"
                              fill="#10b981"
                              r="29.302"
                            />
                            <g>
                              <path
                                d="m142.503 367.732c-4.142 0-7.5-3.358-7.5-7.5 0-46.53 37.855-84.385 84.385-84.385h28.414c38.259 0 69.385-31.126 69.385-69.385 0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5c0 46.53-37.855 84.385-84.385 84.385h-28.414c-38.259 0-69.385 31.126-69.385 69.385 0 4.142-3.358 7.5-7.5 7.5z"
                                fill="#423e4f"
                              />
                            </g>
                            <path
                              d="m352.429 185.1-48.5 5.955c-9.314 1.143-13.227 12.507-6.591 19.142l42.545 42.545c6.635 6.635 17.999 2.722 19.142-6.591l5.955-48.5c.892-7.269-5.282-13.443-12.551-12.551z"
                              fill="#10b981"
                            />
                            <path
                              d="m108.432 266.716c0-56.945 13.096-109.646 38.224-152.65h-39.103c-10.544 0-19.122 8.578-19.122 19.121v294.642c0 10.544 8.578 19.122 19.122 19.122h48.014c-31.375-43.479-47.135-103.841-47.135-180.235z"
                              fill="#e5e5e5"
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">
                        Deine Trainingsübersicht - Überall & Kostenlos
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                        <svg
                          className="h-10 w-10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#10b981"
                          viewBox="0 0 512 512"
                          enableBackground="new 0 0 512 512"
                          width="512"
                          height="512"
                        >
                          <g>
                            <path
                              d="m30.905 301.538h-20.603c-5.69 0-10.302-4.612-10.302-10.302v-61.811c0-5.69 4.612-10.302 10.302-10.302h20.604v82.415z"
                              fill="#10b981"
                            />
                            <path
                              d="m159.923 233.846h192.154v52.97h-192.154z"
                              fill="#10b981"
                            />
                            <path
                              d="m301.843 233.846h50.234v52.97h-50.234z"
                              fill="#10b981"
                            />
                            <g>
                              <path
                                d="m81.714 371.512h-35.932c-8.216 0-14.876-6.66-14.876-14.876v-201.272c0-8.216 6.66-14.876 14.876-14.876h35.932c8.216 0 14.876 6.66 14.876 14.876v201.272c0 8.216-6.66 14.876-14.876 14.876z"
                                fill="#546e7a"
                              />
                              <path
                                d="m81.263 140.488h-32.842c8.465 0 15.326 6.465 15.326 14.439v202.146c0 7.974-6.862 14.439-15.326 14.439h32.842c8.465 0 15.326-6.465 15.326-14.439v-202.146c.001-7.975-6.861-14.439-15.326-14.439z"
                                fill="#455a64"
                              />
                              <path
                                d="m466.259 371.512h-35.655c-8.193 0-14.835-6.642-14.835-14.835v-201.354c0-8.193 6.642-14.835 14.835-14.835h35.655c8.193 0 14.835 6.642 14.835 14.835v201.354c.001 8.193-6.641 14.835-14.835 14.835z"
                                fill="#546e7a"
                              />
                              <path
                                d="m465.852 140.488h-32.663c8.418 0 15.243 6.465 15.243 14.439v202.146c0 7.974-6.824 14.439-15.243 14.439h32.663c8.418 0 15.243-6.465 15.243-14.439v-202.146c0-7.975-6.825-14.439-15.243-14.439z"
                                fill="#455a64"
                              />
                              <path
                                d="m156.575 404h-41.181c-12.524 0-22.677-10.153-22.677-22.677v-250.646c0-12.524 10.153-22.677 22.677-22.677h41.181c12.524 0 22.677 10.153 22.677 22.677v250.646c0 12.524-10.153 22.677-22.677 22.677z"
                                fill="#546e7a"
                              />
                              <path
                                d="m156.588 108h-30.905c12.517 0 22.664 10.159 22.664 22.69v250.62c0 12.531-10.147 22.69-22.664 22.69h30.905c12.517 0 22.664-10.159 22.664-22.69v-250.62c0-12.531-10.147-22.69-22.664-22.69z"
                                fill="#455a64"
                              />
                              <path
                                d="m396.607 404h-41.181c-12.524 0-22.677-10.153-22.677-22.677v-250.646c0-12.524 10.153-22.677 22.677-22.677h41.181c12.524 0 22.677 10.153 22.677 22.677v250.646c0 12.524-10.153 22.677-22.677 22.677z"
                                fill="#546e7a"
                              />
                              <path
                                d="m396.62 108h-30.905c12.517 0 22.664 10.159 22.664 22.69v250.62c0 12.531-10.147 22.69-22.664 22.69h30.905c12.517 0 22.664-10.159 22.664-22.69v-250.62c0-12.531-10.147-22.69-22.664-22.69z"
                                fill="#455a64"
                              />
                            </g>
                            <path
                              d="m501.698 301.538h-20.604v-82.414h20.604c5.69 0 10.302 4.612 10.302 10.302v61.811c0 5.689-4.612 10.301-10.302 10.301z"
                              fill="#10b981"
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">Eigene Übungen - Eigene Pläne</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                        <svg
                          className="h-10 w-10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#10b981"
                          viewBox="0 0 512 512"
                          enableBackground="new 0 0 512 512"
                          width="512"
                          height="512"
                        >
                          <path
                            d="m394.199219 440.3125-188.453125 68.589844c-26.53125 9.65625-55.867188-4.023438-65.527344-30.554688l-124.160156-341.132812c-9.65625-26.53125 4.023437-55.871094 30.554687-65.527344l188.453125-68.589844c26.535156-9.65625 55.871094 4.023438 65.527344 30.554688l124.164062 341.132812c9.65625 26.53125-4.027343 55.871094-30.558593 65.527344zm0 0"
                            fill="#10b981"
                          />
                          <path
                            d="m205.746094 508.902344 122.542968-44.601563c-182.476562-75.796875-219.5-293.949219-239.171874-408.082031l-42.503907 15.46875c-26.53125 9.65625-40.210937 38.996094-30.554687 65.527344l124.160156 341.132812c9.660156 26.53125 38.996094 40.210938 65.527344 30.554688zm0 0"
                            fill="#10b981"
                          />
                          <path
                            d="m242.65625 34.558594-42.175781 15.347656c-4.058594 1.480469-6.839844 5.25-7.042969 9.570312l-.574219 12.089844c-.246093 5.121094-3.539062 9.59375-8.355469 11.351563l-47.855468 17.414062c-4.816406 1.753907-10.21875.445313-13.695313-3.324219l-8.214843-8.890624c-2.929688-3.175782-7.484376-4.28125-11.546876-2.800782l-42.171874 15.347656c-11.726563 4.269532-17.773438 17.234376-13.507813 28.960938l121.679687 334.3125c4.269532 11.726562 17.234376 17.773438 28.960938 13.503906l181.636719-66.105468c11.726562-4.269532 17.769531-17.234376 13.503906-28.960938l-121.679687-334.3125c-4.269532-11.726562-17.234376-17.773438-28.960938-13.503906zm0 0"
                            fill="#7e9bde"
                          />
                          <path
                            d="m198.15625 477.441406 90.632812-32.984375c-134.484374-80.402343-174.230468-247.042969-194.027343-356.070312l-33.738281 12.28125c-11.726563 4.265625-17.773438 17.230469-13.507813 28.960937l121.679687 334.308594c4.269532 11.726562 17.238282 17.773438 28.960938 13.503906zm0 0"
                            fill="#5a7ccc"
                          />
                          <path
                            d="m190.824219 356.734375-17.734375 6.453125c-5.910156 2.152344-12.441406-.894531-14.589844-6.800781l-6.457031-17.738281c-2.152344-5.910157.894531-12.441407 6.800781-14.589844l17.738281-6.457032c5.910157-2.148437 12.441407.898438 14.589844 6.804688l6.457031 17.738281c2.148438 5.90625-.894531 12.4375-6.804687 14.589844zm0 0"
                            fill="#f2d073"
                          />
                          <path
                            d="m193.304688 355.457031c-8.296876-11.496093-15.910157-23.40625-22.902344-35.605469l-11.554688 4.207032c-5.910156 2.148437-8.957031 8.679687-6.804687 14.589844l6.457031 17.738281c2.148438 5.90625 8.679688 8.953125 14.589844 6.800781l17.738281-6.453125c.894531-.328125 1.71875-.765625 2.476563-1.277344zm0 0"
                            fill="#e3a554"
                          />
                          <path
                            d="m258.191406 332.214844-17.738281 6.457031c-5.90625 2.148437-12.441406-.898437-14.589844-6.804687l-6.457031-17.738282c-2.148438-5.90625.898438-12.4375 6.804688-14.589844l17.738281-6.453124c5.90625-2.152344 12.4375.894531 14.589843 6.800781l6.453126 17.738281c2.152343 5.90625-.894532 12.4375-6.800782 14.589844zm0 0"
                            fill="#aad7ef"
                          />
                          <path
                            d="m325.554688 307.695312-17.738282 6.457032c-5.90625 2.148437-12.4375-.894532-14.589844-6.804688l-6.457031-17.738281c-2.148437-5.90625.898438-12.4375 6.804688-14.589844l17.738281-6.453125c5.90625-2.152344 12.441406.894532 14.589844 6.800782l6.457031 17.738281c2.148437 5.910156-.894531 12.441406-6.804687 14.589843zm0 0"
                            fill="#f8eed1"
                          />
                          <path
                            d="m215.101562 423.425781-17.738281 6.457031c-5.910156 2.148438-12.441406-.898437-14.589843-6.804687l-6.457032-17.738281c-2.148437-5.90625.894532-12.441406 6.800782-14.589844l17.738281-6.457031c5.910156-2.148438 12.441406.898437 14.589843 6.804687l6.457032 17.738282c2.152344 5.90625-.894532 12.4375-6.800782 14.589843zm0 0"
                            fill="#97d1c2"
                          />
                          <path
                            d="m282.464844 398.90625-17.738282 6.457031c-5.910156 2.148438-12.441406-.898437-14.589843-6.804687l-6.457031-17.738282c-2.148438-5.90625.894531-12.4375 6.804687-14.589843l17.738281-6.457031c5.90625-2.148438 12.4375.898437 14.589844 6.804687l6.453125 17.738281c2.152344 5.90625-.894531 12.441406-6.800781 14.589844zm0 0"
                            fill="#f19a87"
                          />
                          <path
                            d="m349.828125 374.386719-17.738281 6.457031c-5.90625 2.148438-12.4375-.898438-14.589844-6.804688l-6.453125-17.738281c-2.152344-5.90625.894531-12.4375 6.800781-14.589843l17.738282-6.453126c5.90625-2.152343 12.441406.894532 14.589843 6.800782l6.457031 17.738281c2.148438 5.910156-.898437 12.441406-6.804687 14.589844zm0 0"
                            fill="#97d1c2"
                          />
                          <path
                            d="m159.304688 231.617188c-4.316407-11.859376-19.890626-17.082032-34.78125-11.660157-14.894532 5.417969-23.46875 19.425781-19.152344 31.285157 4.316406 11.863281 19.890625 17.082031 34.78125 11.660156 14.894531-5.417969 23.46875-19.425782 19.152344-31.285156zm0 0"
                            fill="#f19a87"
                          />
                          <path
                            d="m251.539062 198.035156c4.316407 11.859375 19.886719 17.078125 34.78125 11.660156 14.890626-5.421874 23.464844-19.429687 19.148438-31.289062s-19.886719-17.082031-34.78125-11.660156c-14.890625 5.421875-23.464844 19.429687-19.148438 31.289062zm0 0"
                            fill="#f19a87"
                          />
                          <g fill="#10b981">
                            <path
                              d="m140.257812 221.785156c-3.0625 0-5.9375-1.890625-7.046874-4.9375l-3.464844-9.523437c-1.417969-3.890625.589844-8.195313 4.480468-9.609375 3.890626-1.417969 8.195313.589844 9.613282 4.480468l3.46875 9.523438c1.414062 3.890625-.589844 8.195312-4.484375 9.613281-.847657.308594-1.714844.453125-2.566407.453125zm0 0"
                              fill="#495059"
                            />
                            <path
                              d="m254.988281 180.027344c-3.0625 0-5.9375-1.890625-7.046875-4.9375l-3.464844-9.523438c-1.417968-3.890625.589844-8.195312 4.480469-9.609375 3.894531-1.417969 8.195313.589844 9.613281 4.480469l3.464844 9.523438c1.417969 3.890624-.589844 8.195312-4.480468 9.609374-.847657.3125-1.714844.457032-2.566407.457032zm0 0"
                              fill="#495059"
                            />
                            <path
                              d="m192.996094 209.503906c-4.828125 0-9.640625-1.214844-13.972656-3.609375-3.625-2.003906-4.9375-6.566406-2.933594-10.191406s6.566406-4.9375 10.191406-2.933594c3.511719 1.941407 7.679688 2.269531 11.4375.898438 3.757812-1.367188 6.742188-4.296875 8.183594-8.042969 1.488281-3.863281 5.832031-5.789062 9.695312-4.300781 3.863282 1.488281 5.789063 5.828125 4.300782 9.695312-3.003907 7.789063-9.214844 13.894531-17.050782 16.746094-3.191406 1.160156-6.527344 1.738281-9.851562 1.738281zm0 0"
                              fill="#495059"
                            />
                            <path d="m399.753906 238.429688c-.324218 0-.648437-.023438-.972656-.0625-4.109375-.53125-7.007812-4.292969-6.476562-8.398438 1.539062-11.917969.21875-23.730469-3.921876-35.105469-4.140624-11.378906-10.722656-21.273437-19.5625-29.414062-3.046874-2.804688-3.242187-7.550781-.4375-10.597657 2.804688-3.042968 7.550782-3.242187 10.597657-.4375 10.472656 9.644532 18.597656 21.855469 23.496093 35.316407 4.902344 13.460937 6.527344 28.039062 4.703126 42.160156-.488282 3.78125-3.714844 6.539063-7.425782 6.539063zm0 0" />
                            <path d="m432.296875 248.496094c-.320313 0-.644531-.019532-.972656-.0625-4.105469-.53125-7.007813-4.292969-6.476563-8.398438 2.464844-19.070312.355469-37.964844-6.269531-56.164062-6.621094-18.199219-17.152344-34.03125-31.296875-47.054688-3.046875-2.804687-3.242188-7.546875-.4375-10.597656 2.804688-3.042969 7.546875-3.242188 10.597656-.4375 15.703125 14.457031 27.886719 32.773438 35.234375 52.957031 7.347657 20.191407 9.785157 42.046875 7.046875 63.21875-.488281 3.78125-3.714844 6.539063-7.425781 6.539063zm0 0" />
                            <path d="m66.910156 359.566406c-1.816406 0-3.636718-.65625-5.078125-1.980468-10.472656-9.640626-18.597656-21.855469-23.496093-35.316407-4.902344-13.460937-6.527344-28.039062-4.703126-42.15625.53125-4.109375 4.289063-7.003906 8.398438-6.480469 4.109375.53125 7.011719 4.292969 6.480469 8.398438-1.542969 11.917969-.222657 23.730469 3.917969 35.109375 4.140624 11.375 10.722656 21.269531 19.5625 29.410156 3.046874 2.804688 3.242187 7.546875.4375 10.597657-1.480469 1.605468-3.496094 2.417968-5.519532 2.417968zm0 0" />
                            <path d="m48.453125 388.199219c-1.816406 0-3.636719-.65625-5.078125-1.980469-15.703125-14.457031-27.886719-32.769531-35.234375-52.960938-7.347656-20.1875-9.785156-42.046874-7.050781-63.214843.53125-4.109375 4.285156-7.007813 8.398437-6.476563 4.109375.53125 7.007813 4.289063 6.476563 8.398438-2.460938 19.066406-.355469 37.964844 6.269531 56.164062 6.625 18.199219 17.15625 34.03125 31.296875 47.050782 3.050781 2.808593 3.246094 7.550781.4375 10.597656-1.476562 1.609375-3.492188 2.421875-5.515625 2.421875zm0 0" />
                          </g>
                          <path
                            d="m160.097656 70.289062c0 4.019532-3.261718 7.28125-7.285156 7.28125s-7.28125-3.261718-7.28125-7.28125c0-4.023437 3.257812-7.285156 7.28125-7.285156s7.285156 3.261719 7.285156 7.285156zm0 0"
                            fill="##10b981"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">Im Browser & Smartphone</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
