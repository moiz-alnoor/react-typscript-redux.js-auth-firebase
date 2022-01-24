import Header from "./Header";
import MenuBar from "./menu_bar";
import Footer from "./footer";
import {  SpinnerDotted } from "spinners-react";
import { useEffect, useState } from "react";
import axois from "axios";
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

          <div className="col-span-8  grid place-items-center ml-48">
            {isLoading ? (
              <SpinnerDotted
                size={150}
                thickness={100}
                speed={100}
                color="#E8A317"
              />
            ) : data.length > 0 ?(
              <>
                {" "}
                {data && data?.map((d: any) => (
                    <ul>
                      <li>{d.id}</li>
                    </ul>
                  ))}{" "}
              </>
            ): false}


            {isError? <>  <span className="absolute">Empty</span> <img src={notFound} width="130"  className="rounded-full"/></> :false}
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
}
