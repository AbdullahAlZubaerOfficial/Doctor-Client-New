import React from 'react';
import serviceImage from '../../../assets/doctor8.jpg';
import teeth from '../../../assets/teeth.jpg';

const Services = () => {
    return (
        <div className="hero bg-base-100 lg:pt-10 ">
            <div className="hero-content flex-col space-x-8 lg:flex-row ">
                <img
                    src={serviceImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-left"> {/* Added text-left here */}
                    <h1 className="text-5xl font-bold mt-6 lg:mb-12">Our Services</h1>
                    <p className="py-6 text-slate-500">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven­tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <button className="rounded-[10px] bg-[#f7a582] text-black p-4 font-size-[20px]">Cavity Protection</button>
                    <button className=" bg-[#] text-black p-4 border border-[#e6e6e6] rounded-[10px] font-size-[20px]">Cosmetic Dentisty</button>
                    <button className="border border-[#e6e6e6] rounded-[10px] text-black p-4 font-size-[20px]"> Oral Surgery</button>

                    <div className="flex mt-6">
                        <img src={teeth} className="h-[250px] w-3/4 rounded-lg" alt="Teeth" />
                    </div>

                    <h1 className="text-4xl font-bold py-6">Electro  Gastrology Therapy </h1>

                    <p className='pb-4 text-slate-500'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven­tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>        

                    <button className="rounded-[10px] text-[#f7a582] border border-[#f7a582] p-4 font-bold mb-10"> More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
