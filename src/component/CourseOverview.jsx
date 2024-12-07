import React, { useState, useEffect } from "react";
import RenderingTextOnly from "./RenderingTextOnly";

const CourseOverview = ({ courseData, variantData }) => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return (
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <div className="block mt-4 md:mt-0 md:hidden">
                <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                    <div className="relative">
                        <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={56}
                                height={56}
                                fill="none"
                                viewBox="0 0 56 56"
                            >
                                <circle
                                    cx={28}
                                    cy={28}
                                    r={28}
                                    fill="#fff"
                                    fillOpacity="0.5"
                                />
                                <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
                                <path
                                    fill="#1CAB55"
                                    d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                                />
                            </svg>
                        </span>
                        <div className="thumb-wrap">
                            <span>
                                <div
                                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: 0, opacity: 1 }}
                                >
                                    <img
                                        alt="image"
                                        data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                                        draggable="false"
                                        fetchpriority="high"
                                        width={867}
                                        height={480}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-full"
                                        src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=867&h=480"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
                    <div>
                        <div>
                            <div className="relative  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
                                <div
                                    className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: 0, opacity: 1 }}
                                >
                                    <img
                                        alt="preview_gallery"
                                        data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                                        draggable="false"
                                        loading="lazy"
                                        width={86}
                                        height={50}
                                        decoding="async"
                                        data-nimg={1}
                                        className=""
                                        style={{ color: "transparent" }}
                                        src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=86&h=50"
                                    />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                        style={{ fontSize: 0, opacity: 1 }}
                                    >
                                        <img
                                            alt="Play The Video"
                                            data-original-src="/images/annual_exam/play_icon_2.svg"
                                            draggable="false"
                                            fetchpriority="high"
                                            width={20}
                                            height={20}
                                            decoding="async"
                                            data-nimg={1}
                                            className=""
                                            style={{ color: "transparent" }}
                                            src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=20&h=20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="relative  w-[55px] rounded cursor-pointer border-0">
                                <div
                                    className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: 0, opacity: 1 }}
                                >
                                    <img
                                        alt="preview_gallery"
                                        data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png"
                                        draggable="false"
                                        loading="lazy"
                                        width={86}
                                        height={50}
                                        decoding="async"
                                        data-nimg={1}
                                        className=""
                                        style={{ color: "transparent" }}
                                        src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png?w=86&h=50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="relative  w-[55px] rounded cursor-pointer border-0">
                                <div
                                    className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: 0, opacity: 1 }}
                                >
                                    <img
                                        alt="preview_gallery"
                                        data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png"
                                        draggable="false"
                                        loading="lazy"
                                        width={86}
                                        height={50}
                                        decoding="async"
                                        data-nimg={1}
                                        className=""
                                        style={{ color: "transparent" }}
                                        src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png?w=86&h=50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden">
                    <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl" />
                    <div className="mb-4 text-sm font-normal" />
                </div>
            </div>
            <div
                className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: 0, opacity: 1 }}
            >
                <img
                    alt="image"
                    data-original-src={courseData.data.media[0].resource_value}
                    draggable="false"
                    loading="lazy"
                    width={105}
                    height={40}
                    decoding="async"
                    data-nimg={1}
                    className="mb-2"
                    style={{ color: "transparent" }}
                    src={courseData.data.media[0].resource_value}
                />
            </div>
            <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
                {courseData.data.title}
            </h1>
            <div className="mb-2" />
            <div>
                <div
                    className="text-gray-400 "
                    style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
                >
                    <RenderingTextOnly htmlString={courseData.data.description} />
                </div>
            </div>
            <div className="mt-4 mb-6">
                <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                    {variantData.data.items.map((item) =>
                        item.meta.map((item) =>
                            item.key === "checklist" ?
                                item.values.map((item, index) =>
                                    <div key={index} className="flex col-auto gap-2 py-1 text-white">
                                        <div
                                            className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                            style={{ fontSize: 0, opacity: 1 }}
                                        >
                                            <img
                                                alt="image"
                                                data-original-src={item.icon}
                                                draggable="false"
                                                loading="lazy"
                                                width={25}
                                                height={25}
                                                decoding="async"
                                                data-nimg={1}
                                                className=""
                                                src={item.icon}
                                                style={{ color: "transparent" }}
                                            />
                                        </div>
                                        <p className="text-base md:text-lg flex-1">
                                            {item.meta_value}
                                        </p>
                                    </div>
                                ) : null
                        )
                    )}
                </div>
                <div className="mt-4">
                    <p className="mb-4 text-gray-400">১০ম ব্যাচের ভর্তি শেষ হবে:</p>
                    <div className="flex gap-4">
                        <div className="text-white">
                            <span
                                className="flex items-center justify-center text-2xl md:text-4xl"
                                style={{
                                    borderRadius: 14,
                                    border: "3px solid rgb(74, 74, 74)",
                                    background:
                                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                                    height: 70,
                                    width: 65
                                }}
                            >
                                {timeLeft.days}
                            </span>
                            <p className="mt-2 text-sm text-center text-gray-300">Days</p>
                        </div>
                        <div className="text-white">
                            <span
                                className="flex items-center justify-center text-2xl md:text-4xl"
                                style={{
                                    borderRadius: 14,
                                    border: "3px solid rgb(74, 74, 74)",
                                    background:
                                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                                    height: 70,
                                    width: 65
                                }}
                            >
                                {timeLeft.hours}
                            </span>
                            <p className="mt-2 text-sm text-center text-gray-300">Hours</p>
                        </div>
                        <div className="text-white">
                            <span
                                className="flex items-center justify-center text-2xl md:text-4xl"
                                style={{
                                    borderRadius: 14,
                                    border: "3px solid rgb(74, 74, 74)",
                                    background:
                                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                                    height: 70,
                                    width: 65
                                }}
                            >
                                {timeLeft.minutes}
                            </span>
                            <p className="mt-2 text-sm text-center text-gray-300">
                                Minutes
                            </p>
                        </div>
                        <div className="text-white">
                            <span
                                className="flex items-center justify-center text-2xl md:text-4xl"
                                style={{
                                    borderRadius: 14,
                                    border: "3px solid rgb(74, 74, 74)",
                                    background:
                                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                                    height: 70,
                                    width: 65
                                }}
                            >
                                {timeLeft.seconds}
                            </span>
                            <p className="mt-2 text-sm text-center text-gray-300">
                                Seconds
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseOverview