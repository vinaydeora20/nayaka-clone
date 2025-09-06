// import React from 'react';
// import Slider from "react-slick";
// import { Card, Row, Col, Tab, Tabs, Container } from 'react-bootstrap';
// import ReactResponsiveTabs from 'react-responsive-tabs';

// const ProductDetails = () => {
//   const product = {
//     name: "iPhone 16 Pro Max",
//     price: "₹99,999",
//     description: "The iPhone 16 Pro Max features a powerful A15 Bionic chip, stunning display, and 5G capabilities.",
//     specifications: [
//       { label: "Display", value: "6.7 inches Super Retina XDR" },
//       { label: "Battery", value: "4000mAh" },
//       { label: "Camera", value: "12 MP" },
//       { label: "Processor", value: "A15 Bionic Chip" },
//       { label: "Storage", value: "128 GB / 256 GB / 512 GB" },
//     ],
//     images: [
//       "https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg"
//     ],
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Container className="my-5">
//       <h1>{product.name}</h1>
//       <p className="text-muted">{product.price}</p>


//       <p className="my-4">{product.description}</p>

//       {/* Tabs for Specifications and More */}
//       <Tabs defaultActiveKey="specifications" id="product-details-tabs">
//         <Tab eventKey="specifications" title="Specifications">
//           <Row>
//             {product.specifications.map((spec, index) => (
//               <Col key={index} md={6} className="mb-3">
//                 <Card>
//                   <Card.Body>
//                     <Card.Title>{spec.label}</Card.Title>
//                     <Card.Text>{spec.value}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Tab>

//         <Tab eventKey="reviews" title="Customer Reviews">
//           <p>Customer reviews will be displayed here.</p>
//         </Tab>

//         <Tab eventKey="faq" title="FAQ">
//           <p>Frequently asked questions about the product will be here.</p>
//         </Tab>
//       </Tabs>

//       {/* Alternative Tab Layout Using react-responsive-tabs */}
//       {/* <ReactResponsiveTabs items={[
//         { label: "Specifications", content: <SpecificationsTab /> },
//         { label: "Reviews", content: <ReviewsTab /> },
//         { label: "FAQ", content: <FAQTab /> },
//       ]} /> */}
//     </Container>
//   );
// };

// const SpecificationsTab = () => (
//   <Row>
//     {[
//       { label: "Display", value: "6.7 inches Super Retina XDR" },
//       { label: "Battery", value: "4000mAh" },
//       { label: "Camera", value: "12 MP" },
//     ].map((spec, index) => (
//       <Col key={index} md={6} className="mb-3">
//         <Card>
//           <Card.Body>
//             <Card.Title>{spec.label}</Card.Title>
//             <Card.Text>{spec.value}</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
// );

// const ReviewsTab = () => (
//   <div>
//     <h4>Reviews Section</h4>
//     <p>Customer reviews will be shown here. Could integrate with an API or custom data.</p>
//   </div>
// );

// const FAQTab = () => (
//   <div>
//     <h4>FAQ Section</h4>
//     <p>Frequently Asked Questions about the product.</p>
//   </div>
// );

// export default ProductDetails;
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>

      {/* Product Specifications */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Specifications</h3>
        <ul className="list-none space-y-3">
          <li>
            <span className="font-medium">Display: </span> {product.display || "6.7 inches Super Retina XDR"}
          </li>
          <li>
            <span className="font-medium">Battery: </span> {product.battery || "4000mAh"}
          </li>
          <li>
            <span className="font-medium">Camera: </span> {product.camera || "12 MP"}
          </li>
          <li>
            <span className="font-medium">Processor: </span> {product.processor || "A15 Bionic Chip"}
          </li>
          <li>
            <span className="font-medium">Storage: </span> {product.storage || "128 GB / 256 GB / 512 GB"}
          </li>
        </ul>
      </div>

    

    </div>
  );
};

export default ProductDetails;
