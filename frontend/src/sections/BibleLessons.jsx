import background1 from '../assets/images/background19.jpg';
import background2 from '../assets/images/background3.jpg';
import background3 from '../assets/images/background16.jpg';
import background4 from '../assets/images/background18.jpg';
import pimage1 from '../assets/images/product1.jpg';
import pimage2 from '../assets/images/product2.jpg';
import pimage3 from '../assets/images/product3.jpg';
import "../sections/animate.css";


const BibleLessons = () => {
  return (
    <div className="p-5">
      <h1 className="font-extrabold text-[50px] text-center m-5 fadeInUp">Bible Lessons.</h1>
      <p className="text-center m-5 fadeInUp">To see more posts or subscribe to the newsletter, click on the blogposts tab to view them.</p>
      <div className=" justify-around gap-4 md:flex md:justify-around fadeInUp">        
      <div className="w-80 shadow-lg shadow-white-500/50 bg-white rounded-2xl m-5 fadeInUp">
          <img src={pimage2} alt="" className="w-full rounded-lg"/>
          <div className="p-5">
            <h1 className=" text-black font-bold">Branding</h1>
            
            <p className=" text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit perferendis blanditiis excepturi...
            </p>
            <button className="teal-btn">Learn More</button>
          </div>
        </div>
        <div className="w-80 shadow-lg shadow-white-500/50 bg-white rounded-2xl m-5 fadeInUp">
          <img src={pimage2} alt="" className="w-full rounded-lg"/>
          <div className="p-5">
            <h1 className=" text-black">Branding</h1>
            
            <p className=" text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit perferendis blanditiis excepturi...
            </p>
            <button className="teal-btn">Learn More</button>
          </div>
        </div>
        <div className="w-80 shadow-lg shadow-white-500/50 bg-white rounded-2xl m-5 fadeInUp">
          <img src={pimage2} alt="" className="w-full rounded-lg"/>
          <div className="p-5">
            <h1 className=" text-black">Branding</h1>
            
            <p className=" text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit perferendis blanditiis excepturi...
            </p>
            <button className="teal-btn">Learn More</button>
          </div>
        </div>

        

    </div>
    </div>
  )
}

export default BibleLessons
