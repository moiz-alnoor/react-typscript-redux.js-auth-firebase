import Header from "./Header"
import {  AiOutlineDashboard } from "react-icons/ai"
import MenuBar from "./menu_bar"
import Footer from "./footer"
import {  SpinnerRoundOutlined } from "spinners-react"
import { useEffect, useState } from "react"
import axois from "axios"
import notFound from "./../file/not_found.png"
import {url} from "../helper/url"

interface Data {
  id: number;
}
export default function Dashboard() {
  
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    axois
      .get(url)
      .then((res) => {
        const todos = res.data
        setData(todos)
        setIsloading(false)
        setIsError(false)
        console.log(data)
      })
      .catch((error) => { 
         setData([])
         setIsError(true)
         setIsloading(false)
        })
  }, []);

  return (
    <>
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8 ">
            <div className="py-7 px-7 text-xs font-medium tracking-wider text-left flex items-center">
            <AiOutlineDashboard size={25} /> Dashboard
              </div>
            {isLoading ? (
               <div className="col-span-8  flex justify-center mt-60 ml-48">
                 
              <SpinnerRoundOutlined
                size={150}
                thickness={100}
                speed={100}
                color="#E8A317"
              />
              </div>
            ) : data.length > 0 ?(
              <div className=" flex justify-center  ml-48">
          
              <div className="overflow-hidden shadow-md sm:rounded-lg bg-white mt-26 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:cursor-pointer">
                <div className="py-3 px-6 text-xs font-medium tracking-wider text-left ">Fake data, from jsonplaceholder</div>
              <table className="table-auto ">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Name</th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Email</th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">City</th>
                </tr>
              </thead>
              <tbody>
                {data && data?.map((d: any) => (
             <tr>
               <td className="py-3 px-6 text-xs font-medium ">{d.name}</td>
               <td className="py-3 px-6 text-xs font-medium ">{d.email}</td>
               <td className="py-3 px-6 text-xs font-medium ">{d.address.city}</td>
             </tr>
                  ))}
                   </tbody>
</table>
</div>
              
</div>): false }


            {isError? <>  <span className="absolute">Empty</span> <img src={notFound} width="130"  className="rounded-full"/></> :false}
          </div>
        
        </div>
        <Footer />
      </div>
    
    </>
  );
}
