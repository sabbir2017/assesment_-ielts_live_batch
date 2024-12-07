import React from 'react'
import RenderingTextOnly from './RenderingTextOnly'

const About = ({ courseData }) => {
    return (
        <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] ">
            <div className="mt-10 md:mt-0">
                <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
                    {courseData.data.sections.map((item) =>
                        item.type === "about" ? item.name : null
                    )}
                </h2>
                <div className="rounded-lg py-2 md:border md:px-5 ">
                    {courseData.data.sections.map((item) =>
                        item.type === "about" ?
                            item.values.map((item, index) =>
                                <details key={index} className="mb-0 border-b border-dashed last:border-none">
                                    <summary className="py-4 cursor-pointer">
                                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                                            <p className="tenms__paragraph" dir="ltr">
                                                <b>
                                                    <strong
                                                        className="tenms__textBold"
                                                        style={{ whiteSpace: "pre-wrap" }}
                                                    >
                                                        <RenderingTextOnly htmlString={item.title}/>
                                                    </strong>
                                                </b>
                                            </p>
                                        </div>
                                    </summary>
                                    <div className="px-0 pb-2 text-gray-500">
                                        <div className="prose prose-ul:pl-4">
                                            <p className="tenms__paragraph" dir="ltr">
                                            <RenderingTextOnly htmlString={item.description}/>
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            ) : null
                    )}
                </div>
            </div>
        </div>
    )
}

export default About