import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react'
import React from 'react'

const FreeItemTop = () => {
    return (
        <div className="sticky top-0 z-20 hidden bg-white md:block">
            <div className="tenms-carousel relative  light right">
                <div className="w-full overflow-hidden">
                    <div className="absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                        <CaretCircleRight size={32} weight="fill" />
                    </div>
                    <div className="absolute z-10 left-0 top-1/2 block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                        <CaretCircleLeft size={32} weight="fill" />
                    </div>
                </div>
                <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                    <ul className="flex my-4 border-b flex-nowrap">
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>কোর্স ইন্সট্রাক্টর</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>কোর্সটি যেভাবে সাজানো হয়েছে</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>কোর্সটি করে যা শিখবেন</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>ক্লাস রুটিন</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>এই কোর্সের সাথে ফ্রি পাচ্ছেন–</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>শিক্ষার্থীরা যা বলছে</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>কোর্স সম্পর্কে বিস্তারিত</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>যেভাবে পেমেন্ট করবেন</button>
                        </li>
                        <li className="text-nowrap p-2 text-base  text-gray-600 ">
                            <button>সচরাচর জিজ্ঞাসা</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FreeItemTop