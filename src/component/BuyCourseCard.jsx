import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const BuyCourseCard = ({ courseData, variantData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <div className="md:sticky md:top-[112px] ">
                <div className=" md:border">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {courseData.data.media.map(item => {
                            if (item.resource_type === "video") {
                                return (
                                    <SwiperSlide style={{cursor: "pointer"}} key={item.thumbnail_url}>
                                        <img src={item.thumbnail_url} alt="Video Thumbnail" />
                                    </SwiperSlide>
                                );
                            } else if (item.name === "preview_gallery") {
                                return (
                                    <SwiperSlide style={{cursor: "pointer"}} key={item.resource_value}>
                                        <img src={item.resource_value} alt="Preview Gallery" />
                                    </SwiperSlide>
                                );
                            }
                            return null; // Return null for items that don't meet either condition
                        })}

                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {courseData.data.media.map(item => {
                            if (item.resource_type === "video") {
                                return (
                                    <SwiperSlide style={{cursor: "pointer"}} key={item.thumbnail_url}>
                                        <img src={item.thumbnail_url} alt="Video Thumbnail" />
                                    </SwiperSlide>
                                );
                            } else if (item.name === "preview_gallery") {
                                return (
                                    <SwiperSlide style={{cursor: "pointer"}} key={item.resource_value}>
                                        <img src={item.resource_value} alt="Preview Gallery" />
                                    </SwiperSlide>
                                );
                            }
                            return null; // Return null for items that don't meet either condition
                        })}

                    </Swiper>
                    <div className="hidden md:block">
                        <div className="w-full p-4 md:h-auto ">
                            <div className="relative md:static ">
                                <div>
                                    <div className="flex flex-col w-full">
                                        <div>
                                            <div className="flex items-center justify-between md:flex-col md:items-start">
                                                <div className="md:mb-3">
                                                    <div className="inline-block text-2xl font-semibold">
                                                        ৳{variantData.data.items[0].final_price}
                                                    </div>
                                                    <span className="infline-flex">
                                                        <del className="ml-2 text-base font-normal md:text-xl">
                                                            ৳{variantData.data.items[0].price}
                                                        </del>
                                                        <div className="discount inline-block">
                                                            <p className="card-price">{variantData.data.items[0].discount_amount} ৳ ছাড়</p>
                                                        </div>
                                                    </span>
                                                    <p className="text-xs font-normal text-gray-500 md:text-base">
                                                        ব্যাচ ১০: ৬ জানুয়ারি, ২০২৫ - মার্চ ১৯, ২০২৫
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-2" />
                                        </div>
                                        <button className="hover:bg-green-700 transition text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-800 rounded bg-green-600 whitespace-nowrap button primary text-center md:w-full centered-buttons">
                                            {courseData.data.cta_text.name}
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute md:static top-[-45px] left-0 ">
                                    <p className="hidden md:block text-base text-[#F3764E] py-4">
                                        ১০ম ব্যাচের ভর্তি শেষ হবে:৬ জানুয়ারী, ২০২৫
                                    </p>
                                    <p className="md:hidden text-xs text-white bg-[#DA4C5A] p-2 rounded-full">
                                        ১০ম ব্যাচের ভর্তি শেষ হবে: 30:17:29:3
                                    </p>
                                </div>
                                <div className="hidden md:block" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid py-2 md:p-4">
                            <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                            {courseData.data.checklist.map((item, index) => {
                                return (
                                    <div className="flex items-center mb-3 leading-5">
                                        <div
                                            className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                            style={{ fontSize: 0, opacity: 1 }}
                                        >
                                            <img
                                                alt="icon"
                                                data-original-src={item.icon}
                                                draggable="false"
                                                loading="lazy"
                                                width={20}
                                                height={20}
                                                decoding="async"
                                                data-nimg={1}
                                                className=""
                                                style={{ color: "transparent" }}
                                                src={item.icon}
                                            />
                                        </div>
                                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                            {item.text}
                                        </h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                    <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                    <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-500">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                        </svg>{" "}
                        <span className="ml-1">ফোন করুন (16910)</span>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default BuyCourseCard