import { CaretDown } from '@phosphor-icons/react'
import React from 'react'
import RenderingTextOnly from './RenderingTextOnly'

const Instructors = ({ courseData }) => {
    return (
        <div className="mb-10 xs:bg-[#EEF2F4] xs:py-2 ">
            <div className="pt-4 pb-2 bg-white relative">
                <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                    {courseData.data.sections.map((item) =>
                        item.type === "instructors" ? item.name : null
                    )}
                </h2>
                <div className="grid grid-cols-1 px-4 mb-4 border rounded-md lg:grid-cols-2">
                    {courseData.data.sections.map((item) =>
                        item.type === "instructors" ?
                            item.values.slice(0, 4).map((item, index) =>
                                <div key={index} className="flex items-center py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                                    <div
                                        className="mt-2 rounded-md"
                                        style={{
                                            width: 73,
                                            height: 73,
                                            position: "relative",
                                            overflow: "hidden",
                                            minWidth: 50
                                        }}
                                    >
                                        <div
                                            className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                                            style={{ fontSize: 0, opacity: 1 }}
                                        >
                                            <img
                                                alt={item.name}
                                                data-original-src={item.image}
                                                draggable="false"
                                                loading="lazy"
                                                width={73}
                                                height={73}
                                                decoding="async"
                                                data-nimg={1}
                                                className=""
                                                src={item.image}
                                                style={{ color: "transparent" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 ml-3">
                                        <h3 className="text-lg">{item.name}</h3>
                                        <p className="text-sm">
                                            <RenderingTextOnly htmlString={item.description}/>
                                        </p>
                                    </div>
                                </div>
                            ) : null
                    )}
                </div>
                <button className="absolute bottom-2 left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                    বিস্তারিত দেখুন
                    <CaretDown size={18} />
                </button>
            </div>
        </div>
    )
}

export default Instructors