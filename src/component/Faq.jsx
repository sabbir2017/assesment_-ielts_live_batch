import { CaretDown } from '@phosphor-icons/react'
import React from 'react'
import RenderingTextOnly from './RenderingTextOnly'

const Faq = ({ courseData }) => {
    return (
        <div className="mb-0 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
            <div className="pb-1 bg-white md:pb-0">
                <div className="mb-0 ">
                    <h2
                        className="mb-4 text-base font-semibold md:text-2xl"
                    >
                        {courseData.data.sections.map((item) =>
                            item.type === "faq" ? item.name : null
                        )}
                    </h2>
                    <div className="relative mb-20">
                        <div className="rounded-md md:border md:px-5">
                            {courseData.data.sections.map((item) =>
                                item.type === "faq" ?
                                    item.values.slice(0, 5).map((item, index) =>
                                        <details key={index} className="border-b border-dashed last:border-0">
                                            <summary className="py-4 font-medium cursor-pointer">
                                                <h3 className="text-sm font-semibold md:text-base">
                                                    {item.question}
                                                </h3>
                                            </summary>
                                            <div className="pb-4">
                                                <p>
                                                    <RenderingTextOnly htmlString={item.answer} />
                                                </p>
                                            </div>
                                        </details>
                                    ) : null
                            )}
                        </div>
                        <button className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                            সকল প্রশ্ন-উত্তর
                            <CaretDown size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Faq