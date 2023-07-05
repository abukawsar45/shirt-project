import { useEffect, useState } from 'react';
import './Custom.css';
import AOS from 'aos';

const Shirt3byDefault = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);
  const [specifikData, setSpecifikData] = useState({});
  // //console.log(specifikData);
  const { id, Name, Price } = specifikData || {};

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const byDefault = 3;
        const specifikShirt = data.find((item) => item.id === byDefault);
        // //console.log(specifikShirt);
        setSpecifikData(specifikShirt);
      });
  }, []);
  return (
    <div data-aos='fade-up' data-aos-delay='500'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='py-3 md:py-5 text-center'>
          <h3 className='text-green-500 text-4xl lg:text-7xl font-bold font-barlow'>
            Card
          </h3>
        </div>
        <div className='card-body border-2 border-sky-500 items-center text-center'>
          <h2 className='card-title my-1 md:mb-4 text-6xl'>{Name} </h2>
          <p className='font-nato mb-1 md:mb-3 lg:mb-4 text-2xl'>
            Price: Rs. {Price}{' '}
          </p>
          <h3 className='font-medium my-2 md:my-3 text-5xl'>Item Id: {id}</h3>
        </div>
      </div>
    </div>
  );
};

export default Shirt3byDefault;
