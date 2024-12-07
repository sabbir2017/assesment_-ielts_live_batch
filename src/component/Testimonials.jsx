import React from 'react'

const Testimonials = ({ courseData }) => {
    return (
        <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">
                {courseData.data.sections.map((item) =>
                    item.type === "testimonials" ? item.name : null
                )}
            </h2>
            <div className="relative">
                <div className="tenms-carousel relative  light right">
                    <div className="w-full overflow-hidden">
                        <div className="absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={33}
                                height={32}
                                fill="none"
                                viewBox="0 0 33 32"
                                className="xl:mr-[-40px]"
                            >
                                <path
                                    fill="#000"
                                    fillOpacity="0.5"
                                    fillRule="evenodd"
                                    d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={33}
                                height={32}
                                fill="none"
                                viewBox="0 0 33 32"
                                className="rotate-180 xl:ml-[-40px]"
                            >
                                <path
                                    fill="#000"
                                    fillOpacity="0.5"
                                    fillRule="evenodd"
                                    d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                        {courseData.data.sections.map((item) =>
                            item.type === "testimonials" ?
                                item.values.slice(0, 4).map((item, index) =>
                                    <div className="mr-4 ">
                                        <div
                                            className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px]  flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[297px]"
                                            style={{ width: 372 }}
                                        >
                                            <div>
                                                <div
                                                    className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                                                >
                                                    <div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={10}
                                                            height={10}
                                                            fill="none"
                                                            viewBox="0 0 20 30"
                                                        >
                                                            <path
                                                                fill="#D33242"
                                                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={10}
                                                            height={10}
                                                            fill="none"
                                                            viewBox="0 0 20 30"
                                                        >
                                                            <path
                                                                fill="#D33242"
                                                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 overflow-hidden rounded-md youtube-video aspect-video">
                                                    <div className="relative">
                                                        <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                                            <div
                                                                className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                                                style={{ fontSize: 0, opacity: 1 }}
                                                            >
                                                                <img
                                                                    alt="Play The  Video"
                                                                    data-original-src={item.video_url}
                                                                    draggable="false"
                                                                    fetchpriority="high"
                                                                    width={100}
                                                                    height={100}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="max-w-[20vw]"
                                                                    src={item.video_url}
                                                                    style={{ color: "transparent" }}
                                                                />
                                                            </div>
                                                        </span>
                                                        <div className="thumb-wrap">
                                                            <span>
                                                                <div
                                                                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                                                    style={{ fontSize: 0, opacity: 1 }}
                                                                >
                                                                    <img
                                                                        alt="image"
                                                                        data-original-src={item.thumb}
                                                                        draggable="false"
                                                                        fetchpriority="high"
                                                                        width={867}
                                                                        height={480}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="w-full"
                                                                        src={item.thumb}
                                                                        style={{ color: "transparent" }}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                                                <div>
                                                    <div
                                                        className="rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                                                        style={{ fontSize: 0, opacity: 1 }}
                                                    >
                                                        <img
                                                            alt="image"
                                                            data-original-src={item.profile_image}
                                                            draggable="false"
                                                            loading="lazy"
                                                            width={50}
                                                            height={50}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className=""
                                                            src={item.profile_image}
                                                            style={{ color: "transparent", height: 50 }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>{item.name}</h3>
                                                    <p className="text-sm text-gray-400">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials