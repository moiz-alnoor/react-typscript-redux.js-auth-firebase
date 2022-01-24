import Header from "./Header"
import  MenuBar from "./menu_bar"
import { useEffect, useState } from "react"
import Footer from "./footer"
import axois from "axios";
import notFound from "./../file/not_found.png"
import { gitHub } from "../helper/url"
import {AiFillSetting} from "react-icons/ai"
import { SpinnerRoundOutlined } from "spinners-react"

export interface profileData {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

export default function Setting() {

  const [githubPofile, setGithubPofile] = useState<any>({})
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    axois
      .get(gitHub)
      .then((res) => {
        const profileData: profileData = res.data
        setGithubPofile(profileData)
        setIsloading(false)
        setIsError(false)
      })
      .catch((error) => {
        setGithubPofile({})
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

          <div className="col-span-8  ">
          <div className="py-7 px-7 text-xs font-medium tracking-wider text-left flex items-center">
              <AiFillSetting size={25} /> Setting
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
            ) : Object.keys(githubPofile).length > 0 ? (
              <div className="grid place-items-center ml-48">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:cursor-pointer">
                  <div className="flex justify-center md:justify-end -mt-16">
                    <img
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                      src={githubPofile.avatar_url}
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                    {githubPofile.name}, github profile
                    </h2>
                    <hr className="my-3" />
                    <p className="mt-2 text-gray-600">
                      location: {githubPofile.location}
                    </p>
                    <p className="mt-2 text-gray-600">
                      company: {githubPofile.company}
                    </p>
                    <p className="mt-2 text-gray-600">
                      twitter username: {githubPofile.twitter_username}
                    </p>
                    <p className="mt-2 text-gray-600">
                      linkedin:
                      <a href={githubPofile.blog} target="_blank">
                        {githubPofile.blog}
                      </a>
                    </p>

                    <p className="mt-2 text-gray-600">
                      profile api:
                      <a href={githubPofile.url} target="_blank">
                        {githubPofile.url}
                      </a>
                    </p>
                    <p className="mt-2 text-gray-600">
                      html_url:
                      <a href={githubPofile.html_url} target="_blank">
                        {githubPofile.html_url}
                      </a>
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">
                        UI, enthusiast :)
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}

            {isError ? (
              <>
                <span className="absolute">Empty</span>
                <img src={notFound} width="130" className="rounded-full" />
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
