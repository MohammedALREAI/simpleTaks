//  counter component jsx file with tailwind css

export const Counter = ({ counter, onIncrement, onDecrement }) => {
     return (
          <div className="counter item-center flex ">
               <p className="text-2xl text-bold">Quantity</p>
               <div className="flex items-center space-x-2 justify-center text-sm font-medium uppercase cursor-pointer  ">
               <button className="btn btn-primary btn-sm" onClick={onIncrement}>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M7.40967 1.41195L2.82967 6.00195L7.40967 10.592L5.99967 12.002L-0.000332141 6.00195L5.99967 0.00195306L7.40967 1.41195Z" fill="#595A5C" />
                    </svg>
               </button>
               <span className="counter-value px-2">{counter}</span>

               <button className="btn btn-primary btn-sm" onClick={onDecrement}>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M0.590332 11.588L5.17033 6.99805L0.590332 2.40805L2.00033 0.998047L8.00033 6.99805L2.00033 12.998L0.590332 11.588Z" fill="#595A5C" />
                    </svg>

               </button>

               </div>
          </div>
     );
}
