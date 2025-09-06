
import { useState } from "react";

const CheckoutForm = ({ onSubmit, onBack, initialValues }) => {
  const [formData, setFormData] = useState(
    initialValues || {
      fullName: "",
      phone: "",
      pincode: "",
      city: "",
      state: "",
      houseNumber: "",
      roadName: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className=" text-gray-800 mb-6">
      Add Delivery Address
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="Pincode"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="City"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1"
              placeholder="State"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="House No."
              required
            />
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="roadName"
              value={formData.roadName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500  mt-1"
              placeholder="Road Name / Area / Colony"
              required
            />
          </div>
        </div>

        <div className="flex justify-end  mt-4 ">
          <button
            type="submit"
            className="w-full md:w-auto  text-white px-6 py-2 rounded-md bg-[#ff3e6c] transition-colors duration-300"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
