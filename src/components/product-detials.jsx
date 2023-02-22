
import { RadioGroup, Tab } from '@headlessui/react'
// import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
// import { StarIcon } from '@heroicons/react@v1/solid'
import { useCallback, useState } from 'react'

import Purple from '@/images/product/color/purple.png'
import MainLogo from '@/images/product/mainProduct.png'
import Image from 'next/image'
import { Counter } from './counter'
import { TabSection } from './tabSection'

const product = {
     name: 'Jlanaganvik sofae',
     priceOld: '$ 5.999.000',
     price: '$ 1.999.000',
     rating: 4.6,
     reviewCount: 89,

     images: [
          {
               id: 1,
               name: 'Angled view',
               src: "https://images.unsplash.com/photo-1556196148-1fb724238998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
               alt: 'Angled front view with bag zipped and handles upright.',
               price:"$18.99",
          },
          {
               id: 2,
               name: 'Angled view',
               src: "https://images.unsplash.com/photo-1595268005256-f9032d8d49fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
               alt: 'Angled front view with bag zipped and handles upright.',
               price:"$12.99",
          },
          {
               id: 3,
               name: 'Angled view',
               src: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
               alt: 'Angled front view with bag zipped and handles upright.',
               price:"$17.99",
          },



     ],
     colors: [
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',

               price:"$18.99",

          },
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',
               price:"$18.99",

          },
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',
               price:"$18.99",

          },
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',

               price:"$18.99",

          },
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',
               price:"$18.99",

          },
          {
               name: 'Purple',
               src: Purple,
               bgColor: 'border-2 border-purple-500 rounded', selectedColor: '  border-2 border-purple-500 rounded',
               price:"$18.99",

          },

          {
               name: 'green', src:
                    MainLogo,
               bgColor: 'border-2 border-green-500 rounded', selectedColor: '  border-2 border-green-500 rounded',
               price:"$18.99",
          },
     ],
     description: `
    <p class="mt-4 text-lg">Bringing a new look to the iconic Waffle franchise, the Nike Waffle One balances everything you love most about heritage Nike running with fresh innovations.Its new durable plastic heel clip adds energy, while a mixture of transparent mesh and luscious suedes get you ready for summertime.The new springy midsole features the classic wedge shape while the updated Waffle outsole provides a level of support and traction you have to feel to believe.
    <br><br>

Colour Shown: Active Fuchsia/Black/Coconut Milk/University Gold
Style: DA7995-600.</p>
  `,

}

export function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
     const [counter, setCounter] = useState(1)
     const countInstack = 10
     const onDecrement = useCallback(
          () => {
               if (counter <= 1 || counter > countInstack) {
                    return;

               }

               setCounter(counter - 1)

          },
          [counter],
     )
     const onIncrement = useCallback(
          () => {
               if (counter < 1 || counter >= countInstack) {

                    return;
               }
               setCounter(counter + 1)
          },
          [counter],
     )

const onSubmit = useCallback(
          (e) => {
e.preventDefault();
          },
          [],
     )




     const [selectedColor, setSelectedColor] = useState(product?.colors[0] || {})

     return (
          <div className="bg-white">
               <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start ">
                         {/* Image gallery */}
                         <Tab.Group as="div" className="flex flex-col-reverse">
                              {/* Image selector */}
                              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                   <Tab.List className="grid grid-cols-4 gap-6">
                                        {product.images.map((image) => (
                                             <Tab
                                                  key={image.id}
                                                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                             >
                                                  {({ selected }) => (
                                                       <>
                                                            <span className="sr-only">{image.name}</span>
                                                            <span className="absolute inset-0 rounded-md overflow-hidden">
                                                                 <Image

                                                                      layout="fill"
                                                                      unoptimized
                                                                      src={image.src} alt="" className="w-full h-full object-center object-cover" />
                                                            </span>
                                                            <span
                                                                 className={classNames(
                                                                      selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                      'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                                 )}
                                                                 aria-hidden="true"
                                                            />
                                                       </>
                                                  )}
                                             </Tab>
                                        ))}
                                   </Tab.List>
                              </div>

                              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                                   {product.images.map((image) => (
                                        <Tab.Panel key={image.id}>
                                             <img
                                                  src={image.src || MainLogo}
                                                  alt={image.alt}
                                                  className="w-full h-full object-center object-cover sm:rounded-lg"
                                             />
                                        </Tab.Panel>
                                   ))}
                              </Tab.Panels>
                         </Tab.Group>

                         {/* Product info */}
                         <div className="mt-10 sm:px-0 sm:mt-16 lg:mt-0">
                              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 headerTitle">{product.name}</h1>

                              <div className="mt-3">
                                   <h2 className="sr-only">Product rating</h2>
                                   {/*  svg  start */}
                                   <div className="flex items-center mb-8">
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M15 0L19.188 9.23575L29.2658 10.3647L21.7763 17.2017L23.8168 27.1353L15 22.125L6.18322 27.1353L8.22372 17.2017L0.734152 10.3647L10.812 9.23575L15 0Z" fill="#FFC540" />
                                        </svg>
                                        <p className='px-2 text-black'> ${product.rating}</p>
                                        <span className='text-[#121212] countReview'>{`( ${product.reviewCount} reviews )`} </span>
                                   </div>
                                   <p className="text-3xl mt-2 priceOld ">{product.priceOld}</p>
                                   <p className="text-5xl mt-2 price">{product.price}</p>
                              </div>

                              {/*  svg  end */}
                              <form className="mt-6" onSubmit={onSubmit}>
                                   {/* Colors */}
                                   <div>
                                        <h3 className="text-sm font-bold ">Band Color</h3>
                                        <h5 className="text-sm">Color <span>444</span></h5>

                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                             <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                             <div className="flex flex-wrap items-center space-x-3 space-y-2">
                                                  {product.colors.map((color) => (
                                                       <div className='flex flex-col p-1'>
                                                       <RadioGroup.Option
                                                            key={color.name}
                                                            value={color}
                                                            className={({ active, checked }) =>
                                                                 classNames(
                                                                      color.selectedColor,
                                                                      active && checked ? `${color?.selectedColor || ""}` : '',
                                                                      !active && checked ? 'border-0' : '',
                                                                      '-m-0.5 relative p-0.5 rounded-full flex flex-col w-[75px] h-[75px] items-center justify-center cursor-pointer focus:outline-none'
                                                                 )
                                                            }
                                                       >
                                                            <span className=" w-full h-full rounded-md overflow-hidden flex flex-col">
                                                                 <Image
                                                                      layout="fill"
                                                                      unoptimized
                                                                      src={color.src} alt="" className="w-full h-full object-center object-cover" />
                                                            </span>
                                                       </RadioGroup.Option>
                                                        <RadioGroup.Label as="p"
                                                         className={({ active, checked }) =>
                                                                 classNames(
                                                                      "text-center py-2",
                                                                      active && checked ? `${color?.selectedColor} border-0`:" text-[#D8D8D8] text-center"
                                                                 )
                                                            }
                                                        >
                                                                 {color.price}
                                                            </RadioGroup.Label>
                                                       </div>
                                                  ))}
                                             </div>
                                        </RadioGroup>
                                        <div className='mt-8'>

                                         <Counter counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} />
                                             <div className='flex  mt-4 space-x-4 '>
                                                  <button
                                                       type="submit"
                                                       className="max-w-xs flex-1 bg-[#456ED6] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full max-w-[275px] border-xl"
                                                  >
                                                       Add to cart
                                                       <span className="px-2">
                                                            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                 <path d="M9.94001 15.4H20.37C21.42 15.4 22.337 14.819 22.82 13.958L27.825 4.872C27.937 4.67598 28 4.44498 28 4.2C28 3.423 27.37 2.80002 26.6 2.80002H5.901L4.57097 0H0V2.80002H2.80002L7.83299 13.419L5.943 16.849C5.72597 17.255 5.59997 17.71 5.59997 18.2C5.59997 19.747 6.85302 21 8.39999 21H25.2V18.2H8.99502C8.79899 18.2 8.64504 18.0459 8.64504 17.85C8.64504 17.787 8.65901 17.731 8.68704 17.682L9.94001 15.4Z" fill="white" />
                                                            </svg>

                                                       </span>
                                                  </button>

                                                  <button

                                                       type="button"
                                                       className="ml-4 favorite py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                                  >
                                                       <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.868 25.8736C15.392 26.0421 14.608 26.0421 14.132 25.8736C10.072 24.4831 1 18.6826 1 8.85112C1 4.51124 4.486 1 8.784 1C11.332 1 13.586 2.23596 15 4.14607C16.414 2.23596 18.682 1 21.216 1C25.514 1 29 4.51124 29 8.85112C29 18.6826 19.928 24.4831 15.868 25.8736Z" stroke="#554AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                       </svg>

                                                       {/* <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" /> */}
                                                       <span className="sr-only">Add to favorites</span>
                                                  </button>
                                             </div>
                                        </div>



                                   </div>

                                   <div className="mt-10 flex sm:flex-col1">


                                   </div>
                              </form>


                         </div>
                         <TabSection description={product.description} specification={""} />
                    </div>
               </div>
          </div>
     )
}
