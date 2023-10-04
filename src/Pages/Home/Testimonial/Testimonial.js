import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import img from '../../../image/choose.png'
import './testimonial.css'
const Testimonial = () => {
  return (
    <section className="teamMember py-16 px-2 md:px-20 lg:px-20">
      <div className="container mx-auto">
        {/*----- section header -----*/}
        <div className="text-center pb-12 md:pb-10 lg:pb-10">
          <h5 className=" text-3xl lg:text-5xl team-member-title font-bold mb-6">My Team Members</h5>
          {/* <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div> */}
        </div>
        {/*----- section header -----*/}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto sticky-top items-center">
          <div>
            
            <img
              className="w-full mx-auto"
              src={img}
              alt="Testimonial image"
            />
          </div>
          <div className="shadow-xl">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              <SwiperSlide>
                <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">
                  <div className="text-[#627FF4] font-bold text-5xl text-end ">
                    99
                  </div>
                  <div className="col-span-4">
                    <h1 className="text-justify text-black font-semibold text-xl mt-4">
                      Mern Stack Developer
                    </h1>
                    <div className="flex">
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                    </div>
                    <h5 className="text-justify text-slate-600 font-normal text-md font-sans mt-3 divide-y mb-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa natus veniam maiores alias accusamus reprehenderit, architecto eos maxime corrupti, quaerat odit tenetur incidunt veritatis!
                    </h5>
                    <span className="text-black">
                      <hr />
                    </span>
                    <div className="mt-4 text-start flex items-center">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/273697680_1750139388710738_1390151488551285119_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHb7awUOOQzA6CZfFqhnZ1yGf0JqwY3ZgcZ_QmrBjdmB8MhuOarwfcNRe0msWa57rNQXv46GSYikK0DrSPEuqnn&_nc_ohc=T0w2LnzSXB4AX-lzB-m&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfDtgetqUVDthLW3_NQ_5Y6jC59aBuCmFZbw3LtgeA76fQ&oe=644B3A55"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className=" text-start ml-3">
                        <h3 className="text-black text-lg text-start ">
                          Md Ashraful
                        </h3>
                        <p className=" text-slate-400 text-sm text-start ">
                          Founder & CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">
                  <div className="text-[#627FF4] font-bold text-5xl text-end ">
                    99
                  </div>
                  <div className="col-span-4">
                    <h1 className="text-justify text-black font-semibold text-xl mt-4">
                      Front End Developer
                    </h1>
                    <div className="flex">
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                      <span className="text-orange-500 text-2xl font-bold">
                        <AiFillStar />
                      </span>
                    </div>
                    <h5 className="text-justify text-slate-600 font-normal text-md font-sans mt-3 divide-y mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum laudantium reiciendis odio placeat quis maxime possimus nemo tenetur a excepturi, quasi ab aliquid dolores!
                    </h5>
                    <span className="text-black">
                      <hr />
                    </span>
                    <div className="mt-4 text-start flex items-center">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/281642023_1160901547784373_5316712392554900564_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGv0HdHcgFsUtg2wKXLyW0BJG02v8sK5ewkbTa_ywrl7PSfoH04Sxurgmb_wW1-kcVOrkOYTLZYXRWjQg5SOKj9&_nc_ohc=ef9WmhwV6Y8AX9lmfzf&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfDADyMbtqmCUDV7B4zcsktUIsZl0WhHIG7nR11Jk0m-Hg&oe=644C29EE"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className=" text-start ml-3">
                        <h3 className="text-black text-lg text-start ">
                          Md Salahuddin
                        </h3>
                        <p className=" text-slate-400 text-sm text-start ">
                          Senior Executive
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
