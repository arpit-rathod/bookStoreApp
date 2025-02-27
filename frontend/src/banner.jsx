import React from "react";
import bannerImg from "../public/banner.png"

export default function Banner(props) {
  return (
    <>
      <div className=" container max-w-screen-2xl mx-auto md:px-10 px-4 flex flex-col md:flex-row text-black py-10 dark:bg-slate-900 dark:text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt:12 md:mt-32 ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500 font-2xl">new everyday!!</span>
            </h1>
            <p className="text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              molestiae alias rerum cum inventore totam, porro delectus culpa
              neque ducimus, eaque nobis, facilis eos? Ratione suscipit
              assumenda doloribus adipisci cupiditate!
            </p>

              <label className="input input-bordered flex items-center gap-2 
              bg-white dark:bg-slate-900 dark:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow " placeholder="Email" />
              </label>
              <button className="btn btn-secondary">Send Email</button>

          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center h-2/3-screen">
        <img className=" w-42 h-42" src={bannerImg} alt="" sizes="" />

        </div>
      </div>
    </>
  );
}
