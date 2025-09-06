import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvbioPX2k-_fh7cSEJhGgOQ_sKsn0Th1bVIZlwyTsUk8l5MEMFVN2YdM&s"
                alt="Empty Cart"
                className="w-48 h-48 mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
            <Link
                to="/"
        className="w-full bg-[#ff3e6c] text-white font-semibold text-sm px-5 py-2.5 transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default EmptyCart;
