import Header from './Header'
import MenuBar from "./menu_bar"
import Footer from './footer'
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Dashboard() {

  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>
          <div className="col-span-8">
          <button
        onClick={() => {
          dispatch(login({ name: "Pedro", isLog:true}));
        }}
      >
        Login
      </button>
          </div>
        </div>
      </div>
<Footer/>
    </>
  );
}
