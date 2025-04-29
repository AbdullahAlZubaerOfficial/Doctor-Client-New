import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Opening from '../Opening/Opening';
import FeedBack from '../FeedBack/FeedBack';
import DoctorCard from '../../../Components/DoctorCard/DoctorCard';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="bg-[rgba(229,231,235,0.4)] text-black">
            <div className='w-[410px] sm:w-full lg:max-w-screen-xl mx-auto px-4 lg:px-8 space-y-14'>
                <Header />
               
                <Services />
              
                <Opening />
                <FeedBack />
                <DoctorCard />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
