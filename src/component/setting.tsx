
import Header from "./Header";
import MenuBar from "./menu_bar";

export default function Setting() {
  return (
    <>
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8">
            
          </div>
        </div>
      </div>
    </>
  );
}
