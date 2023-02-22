import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { classNames } from './product-detials'
import { ProductItem } from './ProductItem'


export const TabSection = ({description, specification}) => {
  return (
  <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <Tab.Group as="div">
              <div className="border-b border-[#C4C4C4] mt-8">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-[#456ED6] text-black '
                          : 'border-transparent activeTab opacity-60  hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm '
                      )
                    }
                  >
                    Description
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-[#456ED6] text-black '
                          : 'border-transparent activeTab opacity-60  hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm px-2'
                      )
                    }
                  >
                    Specification
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10 px-8">
                  <h3 className="sr-only">Customer Reviews</h3>
                  <div
                   dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <div className=' mt-4'>
                         <h3 className='text-2xl mb-2'>Related Product</h3>
                         {/* tillwill grid 4 item im  lg and 2 in md and  one in sm  */}
                         <div className='grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                              {
                                   Array(4).fill({
                                        title: 'Makbook Pro 2020 260 SSD',
                                        price: '$1,245.33',
                                        oldPrice: '$1,300',
                                        image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80'
                                   }).map((item,i)=>(
                                        <ProductItem key={i} {...item} />
                                   ))

                              }
                              </div>


                    </div>




                </Tab.Panel>

                <Tab.Panel as="dl" className="text-sm text-gray-500">
                  <h3 className="sr-only">Frequently Asked Questions</h3>


                </Tab.Panel>


              </Tab.Panels>
            </Tab.Group>
          </div>  )
}
