import { Element } from "react-scroll"
import { links, logos } from "../../constants/index.jsx"
import { Marker } from "../components/Marker"
import { useState } from "react"
import clsx from "clsx"

const Download = () => {

  const [activeLink, setActiveLink] = useState("Ios");

  return (
    <section>
      <Element name="download" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
        <div className="container">
          <div className="flex max-lg:flex-col justify-center items-start gap-8 lg:gap-0">
            <div className="relative mr-6 ">
              <div className="mb-10">
                <img src="/images/xora.svg" width={160} height={55} alt="xora" />
              </div>

              <p className="body-1 mb-10 max-w-md">Try it now for free on iOS, Android, PC, Web - whatever your falvor, we've got you covered.</p>

              <ul className="flex flex-wrap items-center gap-6 ">
                {links.map(({id, icon, title}) => (
                  <li key={id} onClick={() => setActiveLink(title)}>
                    <div className={clsx("cursor-pointer size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 transition-borderColor duration-500",
                    activeLink === title ? "border-s4 bg-s2": " border-s3 bg-s1"
                    )}>
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img src="/images/lines.svg" alt="lines" className="absolute size-13/20 object-contain" />

                      <span className="download_tech-icon">{icon}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden ">
              <div className="download_preview-before download_preview-after rounded-40 relative w-full border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  {activeLink === "Ios" && ( <><span className="download_preview-dot left-6 bg-red-500" />
                  <span className="download_preview-dot left-11 bg-yellow-500" />
                  <span className="download_preview-dot left-16 bg-green-500" /></>)}

                  {activeLink === "Android" && (<><span className="download_preview-dot size-1 right-6 top-5 bg-white" />
                  <span className="download_preview-dot size-1 right-6 top-7 bg-white" />
                  <span className="download_preview-dot size-1 right-6 top-9 bg-white" /></>)}

                  {activeLink === "Windows" && (<>
                  <div className="relative w-full">
                  <span className="before:absolute before:right-1 before:-top-7 before:rotate-130 before:h-0.5 before:w-3 before:bg-white before:content-[''] after:absolute after:right-1 after:-top-7 after:h-0.5 after:w-3 after:rotate-50 after:bg-white after:transition-all after:duration-500 after:content-[''] bg-white" />
                  <span className="before:absolute before:right-6.5 before:-top-8.25  before:h-2.75 before:w-2.75 before:border-white before:border-2 before:content-['']" />
                  <span className="before:absolute before:right-12 before:-top-7 before:rotate-0 before:h-0.5 before:w-3 before:bg-white before:content-['']  bg-white" /></div></>)}

                  <img src="/images/screen.jpg" width={600} height={655} alt="screen" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({id, url, width, height, title}) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  )
}

export default Download