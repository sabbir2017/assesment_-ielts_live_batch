import React from 'react'

const BuyCourseCardMobile = () => {
    return (
        <>
            <div className="block md:hidden">
                <div className="w-full p-4 md:h-auto ">
                    <div className="relative md:static ">
                        <div>
                            <div className="flex flex-col w-full">
                                <div>
                                    <div className="flex items-center justify-between md:flex-col md:items-start">
                                        <div className="md:mb-3">
                                            <div className="inline-block text-2xl font-semibold">
                                                ৳8500
                                            </div>
                                            <span className="infline-flex">
                                                <del className="ml-2 text-base font-normal md:text-xl">
                                                    ৳10000
                                                </del>
                                                <div className="c-Tukmu inline-block">
                                                    <p className="card-price">1500 ৳ ছাড়</p>
                                                </div>
                                            </span>
                                            <p className="text-xs font-normal text-gray-500 md:text-base">
                                                ব্যাচ ১০: ৬ জানুয়ারি, ২০২৫ - মার্চ ১৯, ২০২৫
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-2" />
                                </div>
                                <button className="hover:bg-green-700 text-white font-bold transition py-2 px-4 border-b-4 border-green-800 hover:border-green-800 rounded bg-green-600 whitespace-nowrap button primary text-center md:w-full centered-buttons">
                                    কোর্সটি কিনুন
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
            <div className="block px-4 bg-white md:hidden">
                <div className="grid py-2 md:p-4">
                    <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ৩৬টি লাইভ ক্লাস (১ ঘণ্টার লেকচার + ৩০ মিনিট প্রশ্নোত্তর)
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ৮টি Reading Practice Test
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ৮টি Listening Practice Test
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ২টি Complete Mock Test
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ১০টি Practice PDF Mock Test
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                মেন্টরদের সাথে ১:১ নির্দেশনা সেশন
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                ফেসবুক সাপোর্ট গ্রুপ
                            </h4>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div
                                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: 0, opacity: 1 }}
                            >
                                <img
                                    alt="icon"
                                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                                    draggable="false"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    className=""
                                    style={{ color: "transparent" }}
                                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png?w=20&h=20"
                                />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                কোর্সের মেয়াদ ১২ মাস
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyCourseCardMobile