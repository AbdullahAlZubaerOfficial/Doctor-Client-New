import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import doc4 from '../../assets/assets_frontend/doc4.png';
import doc5 from '../../assets/assets_frontend/doc5.png';
import doc6 from '../../assets/assets_frontend/doc6.png';


const DoctorCard = () => {
    return (
        
        <section>
              <h1 className='text-[rgb(10,8,8)] pt-12 pb-6  text-[40px] font-bold leading-[57px] tracking-[0%] text-center'>Our Expert Doctors</h1>

<p className='text-[rgb(59,58,58)] pb-10 font-[Source_Sans_3] text-[16px] leading-[26px] tracking-[0%] text-center mb-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>


 <div className="card bg-base-100 w-[400px] shadow-sm box-border border border-[rgb(230,230,230)] bg-[rgb(255,255,255)]">
<figure>
<img
src={doc4}
className='rounded-[10px] bg-gray-200'
alt="Shoes"

/>
</figure>
<div className="card-body text-left">
<h2 className="card-title">Karyen Anderson</h2>
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>BTP -  Senior Physiotherapist</p>

<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>

<div className='flex space-x-2 mt-8'>
<FiMapPin className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Dhanmondi, Dhaka, Bangladesh</p>
</div>

<div className='flex space-x-2'>
<SlCalender className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Available On Mon, 22 December</p>
</div>

<div className='flex space-x-2'>
<MdAttachMoney className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>$15</p>
</div>

<button className="btn p-7 mt-6 box-border border border-[rgb(247,165,130)] rounded-[10px] text-[rgb(247,165,130)] text-[20px]  tracking-[0%] text-left">View Profile</button>

</div>
</div>


 <div className="card bg-base-100 w-[400px] shadow-sm box-border border border-[rgb(230,230,230)] bg-[rgb(255,255,255)]">
<figure>
<img
src={doc5}
className='rounded-[10px]  bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#111111]'
alt="Shoes"

/>
</figure>
<div className="card-body text-left">
<h2 className="card-title">Karyen Anderson</h2>
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>BTP -  Senior Physiotherapist</p>

<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>

<div className='flex space-x-2 mt-8'>
<FiMapPin className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Dhanmondi, Dhaka, Bangladesh</p>
</div>

<div className='flex space-x-2'>
<SlCalender className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Available On Mon, 22 December</p>
</div>

<div className='flex space-x-2'>
<MdAttachMoney className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>$15</p>
</div>

<button className="btn p-7 mt-6 box-border border border-[rgb(247,165,130)] rounded-[10px] text-[rgb(247,165,130)] text-[20px]  tracking-[0%] text-left">View Profile</button>

</div>
</div>



 <div className="card bg-base-100 w-[400px] shadow-sm box-border border border-[rgb(230,230,230)] bg-[rgb(255,255,255)]">
<figure>
<img
src={doc6}
className='rounded-[10px] bg-gray-200'
alt="Shoes"

/>
</figure>
<div className="card-body text-left">
<h2 className="card-title">Karyen Anderson</h2>
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>BTP -  Senior Physiotherapist</p>

<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>

<div className='flex space-x-2 mt-8'>
<FiMapPin className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Dhanmondi, Dhaka, Bangladesh</p>
</div>

<div className='flex space-x-2'>
<SlCalender className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>Available On Mon, 22 December</p>
</div>

<div className='flex space-x-2'>
<MdAttachMoney className='mt-1 text-[20px]' />
<p className='text-[rgb(108,107,107)] text-[16px] font-normal leading-[26px] tracking-[0%] text-left'>$15</p>
</div>

<button className="btn p-7 mt-6 box-border border border-[rgb(247,165,130)] rounded-[10px] text-[rgb(247,165,130)] text-[20px]  tracking-[0%] text-left">View Profile</button>

</div>
</div>
</div>
        </section>
      
    );
};

export default DoctorCard;