import React from 'react';

const FeedBack = () => {
    return (
      <section className=''>

        <h1 className='text-[rgb(10,8,8)] pt-12 pb-6  text-[40px] font-bold leading-[57px] tracking-[0%] text-center'>What Our Patients Says</h1>

        <p className='text-[rgb(59,58,58)] pb-10 font-[Source_Sans_3] text-[16px] leading-[26px] tracking-[0%] text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

          <div className="carousel rounded-box bg-base-100 w-[400px] lg:w-[1000px] shadow-sm box-border border border-[rgb(230,230,230)] bg-[rgb(255,255,255)]">
  <div className="carousel-item">
  <div className="card card-border bg-base-100 w-96 md:w-[440px]">
  <div className="card-body">
 <div className='flex space-x-4'>
 <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
    <h2 className="card-title text-2xl mb-6">Awlad Hossain</h2>
  
 </div>
 <p className='text-opacity-20 mr-5 mt-[-28px]'>Product Designer</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-primary">Visit Here</button>    </div>
  </div>
</div>
  </div>
  <div className="carousel-item">
  <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
 <div className='flex space-x-4'>
 <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
    <h2 className="card-title text-2xl mb-6">Awlad Hossain</h2>
  
 </div>
 <p className='text-opacity-20 mr-5 mt-[-28px]'>Product Designer</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-primary">Visit Here</button>    </div>
  </div>
</div>
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
   
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Burger" />
  </div>
</div>
      </section>
    );
};

export default FeedBack;