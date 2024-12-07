import React, { useEffect, useState } from 'react';
import './page-container.css';
import CourseOverview from './component/CourseOverview';
import BuyCourseCard from './component/BuyCourseCard';
import DemoClassBook from './component/DemoClassBook';
import Instructors from './component/Instructors';
import Features from './component/Features';
import Pointers from './component/Pointers';
import Routine from './component/Routine';
import FreeItems from './component/FreeItems';
import Testimonials from './component/Testimonials';
import About from './component/About';
import HowToPay from './component/HowToPay';
import Faq from './component/Faq';
import AskMore from './component/AskMore';
import MoreCourseForYou from './component/MoreCourseForYou';
import FreeItemTop from './component/FreeItemTop';
import BuyCourseCardMobile from './component/BuyCourseCardMobile';

const PageContainer = () => {
    const [courseData, setCourseData] = useState(null);
    const [variantData, setVariantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [variantLoading, setVariantLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await fetch(
                    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch'
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log("API Response Data:", data); // Log the data for inspection
                setCourseData(data);
            } catch (err) {
                console.error("Fetch error:", err); // Log the error for debugging
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();

    }, []);

    useEffect(() => {
        const fetchVariantData = async () => {
            try {
                const response = await fetch(
                    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch/variants'
                );
                console.log("Variant API Raw Response:", response); // Log raw response
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log("Variant API JSON Response:", data); // Log parsed JSON
                setVariantData(data);
            } catch (err) {
                console.error("Fetch variant error:", err); // Log detailed error
                setError(err.message);
            } finally {
                setVariantLoading(false);
            }
        };

        fetchVariantData();

    }, []);


    if (variantLoading) {
        return <div>Loading...</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("variantDatadddddddddddddddd", variantData)
    return (
        <>
            <div className="min-h-[900px] md:min-h-[300px]"
                style={{
                    backgroundImage:
                        'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
                    <CourseOverview courseData={courseData} variantData={variantData} />
                    <BuyCourseCard courseData={courseData} variantData={variantData} />
                </div>
            </div>
            <BuyCourseCardMobile />
            <main className="container flex flex-col gap-4 md:flex-row md:gap-12">
                <section className="order-2 mt-8 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                    {/* <FreeItemTop /> */}
                    <div className="pt-[140px] -mt-[140px]">
                        <DemoClassBook courseData={courseData} />
                        <Instructors courseData={courseData} />
                        <Features courseData={courseData} />
                        <Pointers courseData={courseData} />
                        <Routine courseData={courseData} />
                        <FreeItems courseData={courseData} />
                        <Testimonials courseData={courseData} />
                        <About courseData={courseData} />
                        <HowToPay />
                        <Faq courseData={courseData} />
                    </div>
                    {/* <AskMore /> */}
                </section>
            </main>
            {/* <MoreCourseForYou /> */}
        </>
    )
}

export default PageContainer