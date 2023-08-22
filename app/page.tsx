'use client';

import Image from 'next/image'

const navigation = [
  { name: 'Section 1', href: '#' },
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
  return (
    <div className="flex flex-col min-h-full h-screen w-full">
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full bg-black border-b-2 border-gray-950">
          <nav className="flex flex-row justify-between mx-auto max-w-7xl p-6 lg:px-8">
            <div className="">
              <a href="#" className="text-2xl md:text-3xl">
                Challenge
              </a>
            </div>
            {navigation.map((item, index) => (
              <div key={index} className='my-auto'>
                <a key={item.name} href={item.href} className='text-sm md:text-md'>
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        </header>
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
      <div className="min-h-screen flex place-items-center bg-white text-black text-center border border-y-0 border-l-1 border-r-1 border-white px-4 md:px-8 lg:px-12 xl:px-16">
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
      <div className="min-h-screen flex place-items-center text-center md:border border-x-white border-y-black mx-4 md:mx-8 lg:mx-12 xl:mx-16">
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
      <div className="min-h-screen flex place-items-center bg-white text-black text-center border border-y-0 border-l-1 border-r-1 border-white px-4 md:px-8 lg:px-12 xl:px-16">
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
      <div className="min-h-screen flex place-items-center text-center md:border border-x-white border-y-black mx-4 md:mx-8 lg:mx-12 xl:mx-16">
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
        <div className="border-black rounded-full w-5 h-5 border-2">
          <div className="bg-white rounded-full w-4 h-4 border-white border-2"/>
        </div>
        <div className="border-black rounded-full w-5 h-5 border-2">
          <div className="bg-black rounded-full w-4 h-4 border-white border-2"/>
        </div>
        <div className="border-black rounded-full w-5 h-5 border-2">
          <div className="bg-black rounded-full w-4 h-4 border-white border-2"/>
        </div>
        <div className="border-black rounded-full w-5 h-5 border-2">
          <div className="bg-black rounded-full w-4 h-4 border-white border-2"/>
        </div>
        <div className="border-black rounded-full w-5 h-5 border-2">
          <div className="bg-black rounded-full w-4 h-4 border-white border-2"/>
        </div>
      </div>
    </div>
  )
}