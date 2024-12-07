import React from 'react'

const DemoClassBook = ({courseData}) => {
    return (
        <div
            style={{
                backgroundImage:
                    "url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)",
                backgroundSize: "cover"
            }}
            className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
        >
            <div className="w-full md:w-1/2">
                <img
                    src={courseData.data.sections[0].values[0].top_left_icon_img}
                    style={{ height: 40 }}
                    className="mb-4"
                />
                <h2
                    className="text-xl font-semibold"
                    style={{ color: "#ffffff" }}
                >
                    {courseData.data.sections[0].values[0].title}
                </h2>
                <p className="mt-2 text-base" style={{ color: "#f1eded" }}>
                    {courseData.data.sections[0].values[0].description}
                </p>
                <button className="hover:bg-green-700 transition text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-800 rounded bg-green-600 whitespace-nowrap button primary text-center mt-6 centered-buttons">
                    {courseData.data.sections[0].values[0].cta.text}
                </button>
            </div>
            <div className="items-center hidden w-1/2 md:flex">
                <img
                    src={courseData.data.sections[0].values[0].thumbnail}
                    height={200}
                />
            </div>
        </div>
    )
}

export default DemoClassBook