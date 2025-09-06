
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useState } from "react";
import Checkout from "./Checkout";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false);
  console.log('cartItems', cartItems)
  function clearAllCart() {
    dispatch(clearCart());
  }

  function handleRemoveItem(itemId) {
    dispatch(removeItem(itemId));
  }
  if (isCheckout) {
    return <Checkout cartItems={cartItems} isCheckout={isCheckout} onBackToCart={() => setIsCheckout(false)} />;
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center text-xl text-gray-600 py-20">
      <EmptyCart />
      </div>
    );
  }
  // const calculateTotal = () => {
  //   const total = cartItems.reduce((total, item) => {
  //     const priceString = item.info.discountPrice.replace(/[^\d.]/g, '');
  //     const price = parseFloat(priceString) || 0;
  //     return total + price;
  //   }, 0);
  //   return total;
  // };
  const calculateTotal = () => {
  const total = cartItems.reduce((total, item) => {
    const priceString = item.info.discountPrice ? item.info.discountPrice.replace(/[^\d.]/g, '') : '0';
    const price = parseFloat(priceString) || 0;
    return total + price;
  }, 0);
  return total;
};
console.log('cartItems', cartItems)
  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
       <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 mt-28">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={clearAllCart}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Clear cart</span>
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item) => (
                          <li key={item.info.id} className="flex py-6">
                            <div className="h-[112px] w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.info.images[0]}
                                alt={item.info.name}
                                // className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.info.name}</h3>
                                  
                                  <p className="ml-4">₹{item.info.discountPrice }</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.info.category}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <div className="flex">
                                  <button
                                    onClick={() => handleRemoveItem(item.info.id)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>
                      ₹{calculateTotal()}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => setIsCheckout(true)}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => alert("Continue Shopping logic goes here")}
                      >
                        Continue Shopping <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Cart;
