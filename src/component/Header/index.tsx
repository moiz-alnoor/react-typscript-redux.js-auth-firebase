import playtomic_ from "./playtomic_.png"
import { AiOutlineUser } from "react-icons/ai"
import { useSelector } from "react-redux"


export default function Header() {
  // get the user name from the store 
  const user = useSelector((state:any) => state.user.value);
  
  return (
    <>
      <div className=" bg-white border-b-2 border-yellow-300 p-5">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center">
              <img src={playtomic_} width="30" height="30" />
              <p>PLAYTOMIC</p>
            </div>
          </div>
          <div className="col-span-6  flex justify-end">
            
             <span className="m-1"> <AiOutlineUser /> </span>{user.name}
         
          </div>
        </div>
      </div>
    </>
  );
}
