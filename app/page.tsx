'use client';

import Image from 'next/image'
import React, { useRef, useState } from 'react';

type SectionRefs = Record<string, React.MutableRefObject<HTMLElement | null>>

const navigation = [
  { name: 'Section 1', href: '#section1' },
  { name: 'Section 2', href: '#' },
  { name: 'Section 3', href: '#' },
  { name: 'Section 4', href: '#' },
]

const slidingText = <p className='inline-block text-xl md:text-2xl tracking-widest px-3'>
  You can do it!
</p>

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  const[isNavOpen, setIsNavOpen] = useState(false)
  const[activeSection, setActiveSection] = useState('top')

  const sectionRef: SectionRefs = {
    'top': useRef(null),
    'Section 1': useRef(null),
    'Section 2': useRef(null),
    'Section 3': useRef(null),
    'Section 4': useRef(null),
  }

  const handleScrollToSection = (ref : React.MutableRefObject<HTMLElement | null>, section: string) => {
    if(ref.current){
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
    setActiveSection(section)
  }

  return (
    <div className="flex flex-col min-h-full h-screen w-full relative scroll-smooth">
      <header className="fixed top-0 z-50 w-full bg-black border-b-2 border-gray-950">
      <section className="flex p-4 justify-end lg:hidden">
          <div
            className={`${isNavOpen && `hidden`} space-y-2 `}
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-50"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-50"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-50"></span>
          </div>

          <div className={`${isNavOpen ? `block`: `hidden`} flex flex-col gap-4 w-full`}>
            <div
              className="absolute top-0 left-0 p-4"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-neutral-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <nav className="flex flex-col justify-between w-full items-center">
              <div className="" onClick={()=>handleScrollToSection(sectionRef.top, 'top')}>
                <a href="#" className="text-2xl md:text-3xl">
                  Challenges
                </a>
              </div>
              {navigation.map((item) => (
                <div key={item.name} className='my-auto p-4' onClick={()=>handleScrollToSection(sectionRef[item.name], item.name)}>
                  <a key={item.name} href={item.href} className={`text-sm py-2 md:text-md ${activeSection === item.name ? `font-bold border-b-2 border-lime-500` : null}`}>
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </section>
        <nav className="flex flex-row justify-between mx-auto max-w-7xl p-6 lg:px-8 hidden">
          <div className="" onClick={()=>handleScrollToSection(sectionRef.top, 'top')}>
            <a href="#" className="text-2xl md:text-3xl">
              Challenges
            </a>
          </div>
          {navigation.map((item) => (
            <div key={item.name} className='my-auto' onClick={()=>handleScrollToSection(sectionRef[item.name], item.name)}>
              <a key={item.name} href={item.href} className={`text-sm py-2 md:text-md ${activeSection === item.name ? `font-bold border-b-2 border-lime-500` : null}`}>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </header>
      <div ref={sectionRef.top} className="min-h-screen flex flex-col">
        <div className="flex flex-1 bg-no-repeat bg-bottom bg-contain bg-w-full" style={{backgroundImage: `url("grid.svg")`}} >
          <div className="mx-auto">
            <Image src="logo.svg" 
              width={1} height={1}
              alt=""
              className="h-full w-full p-8 md:p-16 lg:p-24 xl:p-32 2xl:p-40" />
          </div>
        </div>
        <div className="flex flex-none">
          <div className="w-full overflow-hidden max-w-full border-l-0 border-r-0 border-t-2 border-b-2 border-white pt-2 mb-2">
            <div className="marquee animate-[marquee_5s_linear_infinite] whitespace-nowrap overflow-hidden inline-block">
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
              {slidingText}
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRef['Section 1']} className="min-h-screen flex place-items-center bg-white text-black text-center border border-y-0 border-l-1 border-r-1 border-white px-4 md:px-8 lg:px-12 xl:px-16">
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16'>
          <h1 className="text-4xl font-bold sm:text-6xl">
            Section 1
          </h1>
          <p className="mt-6 text-3xl text-justify">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
            amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div ref={sectionRef['Section 2']} className="min-h-screen flex place-items-center text-center md:border border-x-white border-y-black mx-4 md:mx-8 lg:mx-12 xl:mx-16">
        <div className='max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20'>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Section 2
          </h1>
          <p className="mt-6 text-3xl text-justify text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
            amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div ref={sectionRef['Section 3']} className="min-h-screen flex place-items-center bg-white text-black text-center border border-y-0 border-l-1 border-r-1 border-white px-4 md:px-8 lg:px-12 xl:px-16">
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16'>
          <h1 className="text-4xl font-bold sm:text-6xl">
            Section 3
          </h1>
          <p className="mt-6 text-3xl text-justify">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
            amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div ref={sectionRef['Section 4']} className="min-h-screen flex place-items-center text-center md:border border-x-white border-y-black mx-4 md:mx-8 lg:mx-12 xl:mx-16">
        <div className='max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20'>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Section 4
          </h1>
          <p className="mt-6 text-3xl text-justify text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
            amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="z-50 fixed bottom-1 right-1 md:bottom-1.5 md:right-1.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 flex flex-col place-content-end gap-3">
        <div className="border-black rounded-full w-5 h-5 border-2" onClick={()=>handleScrollToSection(sectionRef.top, 'top')}>
            <div className={`${activeSection === 'top' ? `bg-white` : `bg-black`}  rounded-full w-4 h-4 border-white border-2`}/>
          </div>
        {navigation.map((nav) => 
          <div className="border-black rounded-full w-5 h-5 border-2" onClick={()=>handleScrollToSection(sectionRef[nav.name], nav.name)}>
            <div className={`${activeSection === nav.name ? `bg-white` : `bg-black`}  rounded-full w-4 h-4 border-white border-2`}/>
          </div>
        )}
      </div>
    </div>
  )
}