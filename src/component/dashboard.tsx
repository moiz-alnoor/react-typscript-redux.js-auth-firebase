import Header from './Header'
import MenuBar from "./menu_bar"
import Footer from './footer'
import { SpinnerRoundOutlined,SpinnerDotted } from 'spinners-react';
import useFetch from "../hook/get.data"
import { useState } from 'react'


interface Data { id: number}
export default function Dashboard() {
  const [isLoading, setIsloading] = useState<boolean>(true)
  const data:any []= useFetch("https://jsonplaceholder.typicode.com/todos/10")
  console.log(data)
  if(data.length > 0){
    setIsloading(false)
  }


  return (
    <>
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">

          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8  grid place-items-center">
          {isLoading? 
          
          <SpinnerDotted size={150} thickness={100} speed={100} color="#E8A317" />  : false} 


     
        </div>
        { data && data.map((data:Data) => <ul><li>{data.id}</li></ul>) }
      </div>
      </div>
<Footer/>
    </>
  );
}
