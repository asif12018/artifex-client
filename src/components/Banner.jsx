

const Banner = () => {
    return (
        <div className="carousel w-full min-h-[500px] my-5 animate__animated animate__zoomIn">
        <div id="slide1" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/fRf09gYW/pexels-sadi-gokpinar-321165339-18025831.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center" style={{backgroundColor:'#3C5B6F66', zIndex:'10'}}>
        <h1 className="text-xl md:text-4xl  font-bold text-white">Elevate Your Space with Handcrafted Ceramics and Pottery</h1>
          <p className="text-white text-[10px] md:text-lg">Explore elegance in our ceramics, crafted by artisans for quality, perfect for your home.</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/pd4tds9q/pexels-cottonbro-6694305.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
        <h1 className="text-xl md:text-4xl  font-bold text-white">Elevate Your Space with Handcrafted Ceramics and Pottery</h1>
          <p className="text-white text-[10px] md:text-lg">Explore elegance in our ceramics, crafted by artisans for quality, perfect for your home.</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3"  className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/bN98R0Mw/pexels-cottonbro-3094018.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
        <h1 className="text-xl md:text-4xl  font-bold text-white">Elevate Your Space with Handcrafted Ceramics and Pottery</h1>
          <p className="text-white text-[10px] md:text-lg">Explore elegance in our ceramics, crafted by artisans for quality, perfect for your home.</p>
          <a href="#state" className="btn">Expore more</a>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full flex flex-col gap-3 justify-center items-center bg-[url('https://i.postimg.cc/fbLwy38T/pexels-cottonbro-6694306.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center">
          
        <h1 className="text-xl md:text-4xl  font-bold text-white">Elevate Your Space with Handcrafted Ceramics and Pottery</h1>
          <p className="text-white text-[10px] md:text-lg">Explore elegance in our ceramics, crafted by artisans for quality, perfect for your home.</p>
          <button className="btn">Expore more</button>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;