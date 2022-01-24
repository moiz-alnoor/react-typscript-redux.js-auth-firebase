import Header from "./Header"
import { AiOutlineDashboard } from "react-icons/ai"
import MenuBar from "./menu_bar"
import Footer from "./footer"
import { SpinnerRoundOutlined } from "spinners-react"
import { useEffect, useState } from "react"
import axois from "axios"
import notFound from "./../file/not_found.png"
import { jsonPlaceholder } from "../helper/url"

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface fakeData {
  id: number
  name: string
  username: string
  email: string
  address: Address
}

export default function Dashboard() {
  const [data, setData] = useState<[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    axois
      .get(jsonPlaceholder)
      .then((res) => {
        const todos = res.data
        setData(todos)
        setIsloading(false)
        setIsError(false)
      })
      .catch((error) => {
        setData([])
        setIsError(true)
        setIsloading(false)
      });
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
            ) : data.length > 0 ? (
              <div className=" flex justify-center  ml-48">
                <div className="overflow-hidden shadow-md sm:rounded-lg bg-white mt-26 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:cursor-pointer">
                  <div className="py-3 px-6 text-md font-medium tracking-wider text-left ">
                    Fake data, from jsonplaceholder
                    <hr className="mt-4"/>
                  </div>
                  <table className="table-auto ">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                          Name
                        </th>
                        <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                          Email
                        </th>
                        <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                          City
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.map((fakeData_: fakeData, index) => (
                          <tr key={index}>
                            <td className="py-3 px-6 text-xs font-medium ">
                              {fakeData_.name}
                            </td>
                            <td className="py-3 px-6 text-xs font-medium ">
                              {fakeData_.email}
                            </td>
                            <td className="py-3 px-6 text-xs font-medium ">
                              {fakeData_.address.city}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              false
            )}

            {isError ? (
              <>
                {" "}
                <span className="absolute">Empty</span>{" "}
                <img src={notFound} width="130" alt="" className="rounded-full" />
              </>
            ) : (
              false
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
