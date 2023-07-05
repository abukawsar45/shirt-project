import { Outlet } from "react-router-dom";
import ActiveLink from "../../shared/ActiveLink/ActiveLink";
import { useEffect, useState } from "react";
import useTitles from "../../hooks/useTitles";

const Home = () => {
  useTitles('| Home')
  const [shirtData, setShirtData] = useState([]);

  useEffect(() => {
    fetch('./data.json').then(res => res.json()).then(data => {
      // console.log(data);
      setShirtData(data);
    })
  },[])
   return (
     <div className='drawer lg:drawer-open'>
       <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
       <div className='drawer-content flex flex-col items-center justify-center'>
         {/* Page content here */}
         <label
           htmlFor='my-drawer-2'
           className='btn btn-primary drawer-button lg:hidden'
         >
           Open drawer
         </label>
         <Outlet />
       </div>
       <div className='drawer-side'>
         <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
         <div className='menu px-4 w-80  bg-base-200  '>
           <div className='border-2 border-lime-500 rounded-lg px-4 py-3'>
             <h4>List of Items </h4>
           </div>
         </div>
         <ul className='menu px-4 w-80 h-full bg-base-200 text-base-content'>
           {/* Sidebar content here */}
           <table className='border-collapse'>
             <tbody>
               {shirtData?.map((shirt) => (
                 <tr
                   className='border-2 border-lime-500 rounded-lg'
                   key={shirt?.id}
                 >
                   <td className='py-2 px-4'>
                     <ActiveLink className='w-full' to={`shirt/${shirt?.id}`}>
                       <span className='block w-64 flex items-center'>
                         {shirt?.Name}
                       </span>
                     </ActiveLink>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </ul>
       </div>
     </div>
   );
};

export default Home;