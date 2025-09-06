

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CustomerReview = () => {
    const { mobId } = useParams();
    const [productReviews, setProductReviews] = useState([]);
    const reviews = [
      // Samsung Washing Machine (id: 1)
      {
        id: "1",
        productName: "Samsung 7 kg Fully-Automatic Top Load Washing Machine",
        name: "Priya Sharma",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 4,
        review: "Good washing performance and quiet operation. The water consumption is less than my old machine. Only complaint is the spin cycle could be stronger.",
        date: "March 15 2024 at 11:20",
        verified: true,
        images: [
          "https://m.media-amazon.com/images/I/71XW1Y+qYwL._SL1500_.jpg"
        ]
      },
      {
        id: "1",
        productName: "Samsung 7 kg Fully-Automatic Top Load Washing Machine",
        name: "Rahul Verma",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        review: "Excellent product! Washes clothes thoroughly and has many useful programs. The quick wash feature is my favorite.",
        date: "February 28 2024 at 09:45",
        verified: true,
        images: []
      },
    
      // LG AC (id: 2)
      {
        id: "2",
        productName: "LG 1.5 Ton 5 Star DUAL Inverter Split AC",
        name: "Amit Patel",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        review: "Super cooling with amazing energy efficiency. My electricity bill has reduced significantly compared to my old AC.",
        date: "April 5 2024 at 16:30",
        verified: true,
        images: [
          "https://m.media-amazon.com/images/I/71YH4g++QVL._SL1500_.jpg"
        ]
      },
      {
        id: "2",
        productName: "LG 1.5 Ton 5 Star DUAL Inverter Split AC",
        name: "Neha Gupta",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4,
        review: "Cools the room quickly and maintains temperature well. Installation was professional. Only wish the remote was backlit.",
        date: "March 22 2024 at 14:15",
        verified: false,
        images: []
      },
      {
        id: "2",
        productName: "LG 1.5 Ton 5 Star DUAL Inverter Split AC",
        name: "Sanjay Kumar",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 3,
        review: "Good cooling but makes some noise at night. Service center response was slow when I reported the issue.",
        date: "February 10 2024 at 20:05",
        verified: true,
        images: []
      },
    
      // Sony PS5 (id: 3)
      {
        id: "3",
        productName: "Sony PlayStation5 Gaming Console (Slim)",
        name: "Rohan Malhotra",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 5,
        review: "Next-gen gaming at its best! The graphics are mind-blowing and load times are super fast. Worth every penny for serious gamers.",
        date: "January 18 2024 at 12:42",
        verified: true,
        images: [
          "https://m.media-amazon.com/images/I/51zLZbEVSTL._SL1500_.jpg"
        ]
      },
      {
        id: "3",
        productName: "Sony PlayStation5 Gaming Console (Slim)",
        name: "Ananya Reddy",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        review: "Amazing gaming experience but the console still feels bulky. DualSense controller is revolutionary though!",
        date: "December 25 2023 at 09:15",
        verified: true,
        images: []
      },
    
      // Panasonic Microwave (id: 4)
      {
        id: "4",
        productName: "Panasonic 20L Solo Microwave Oven",
        name: "Sunita Joshi",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 4,
        review: "Heats food evenly and has good capacity for family use. The turntable is quiet compared to other brands.",
        date: "March 30 2024 at 17:20",
        verified: true,
        images: []
      },
      {
        id: "4",
        productName: "Panasonic 20L Solo Microwave Oven",
        name: "Vikram Singh",
        avatar: "https://randomuser.me/api/portraits/men/66.jpg",
        rating: 5,
        review: "Simple to use and reliable. Perfect for basic heating and cooking tasks. Build quality is excellent.",
        date: "February 14 2024 at 10:50",
        verified: false,
        images: []
      },
    
      // LG Microwave (id: 5)
      {
        id: "5",
        productName: "LG 20 L Solo Microwave Oven",
        name: "Arjun Mehta",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        rating: 3,
        review: "Does the job but the buttons are not very responsive. Heats food adequately but not as fast as I expected.",
        date: "April 2 2024 at 19:30",
        verified: true,
        images: []
      },
      {
        id: "5",
        productName: "LG 20 L Solo Microwave Oven",
        name: "Pooja Nair",
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
        rating: 4,
        review: "Compact yet spacious enough for most dishes. The child lock feature gives me peace of mind with kids at home.",
        date: "March 18 2024 at 11:25",
        verified: true,
        images: []
      },
    
      // Philips Airfryer (id: 6)
      {
        id: "6",
        productName: "PHILIPS Digital Airfryer with Touch Panel, 4.1L",
        name: "Kavita Desai",
        avatar: "https://randomuser.me/api/portraits/women/99.jpg",
        rating: 5,
        review: "Game changer for healthy cooking! Makes perfect crispy fries with just a spoon of oil. The digital controls are very intuitive.",
        date: "January 30 2024 at 15:10",
        verified: true,
        images: [
          "https://m.media-amazon.com/images/I/71YH4g++QVL._SL1500_.jpg"
        ]
      },
      {
        id: "6",
        productName: "PHILIPS Digital Airfryer with Touch Panel, 4.1L",
        name: "Rajiv Khanna",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 4,
        review: "Great for quick snacks and reheating. The basket is easy to clean. Only wish the capacity was slightly larger.",
        date: "December 12 2023 at 13:45",
        verified: false,
        images: []
      },
      {
        id: "6",
        productName: "PHILIPS Digital Airfryer with Touch Panel, 4.1L",
        name: "Meena Kapoor",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 5,
        review: "Best kitchen appliance I've bought! Use it daily for everything from chicken to cakes. Saves so much time and oil.",
        date: "November 5 2023 at 18:20",
        verified: true,
        images: []
      },
    
      // INALSA Air Fryer (id: 7)
      {
        id: "7",
        productName: "INALSA Air Fryer Oven Aero Smart 15, 15L, 1600W",
        name: "Deepak Sharma",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        rating: 3,
        review: "Good for large families but takes time to learn the settings. The rotisserie function works well for chicken.",
        date: "February 22 2024 at 10:15",
        verified: true,
        images: []
      },
      {
        id: "7",
        productName: "INALSA Air Fryer Oven Aero Smart 15, 15L, 1600W",
        name: "Anjali Gupta",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        review: "Versatile appliance that replaces multiple gadgets. The large capacity is perfect for our family of 5.",
        date: "January 8 2024 at 14:30",
        verified: true,
        images: []
      },
    
      // Pigeon Pressure Cooker (id: 8)
      {
        id: "8",
        productName: "Pigeon Outer Lid Non Induction Aluminium Pressure Cooker",
        name: "Suresh Iyer",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        rating: 5,
        review: "Traditional pressure cooker that works perfectly. The aluminum construction heats up quickly and evenly.",
        date: "March 10 2024 at 09:05",
        verified: false,
        images: []
      },
      {
        id: "8",
        productName: "Pigeon Outer Lid Non Induction Aluminium Pressure Cooker",
        name: "Lata Mangeshkar",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        rating: 4,
        review: "Good quality at reasonable price. Cooks rice and dal perfectly. The gift set makes it great for newlyweds.",
        date: "December 28 2023 at 16:50",
        verified: true,
        images: []
      },
    
      // Amazon Basics Cookware (id: 9)
      {
        id: "9",
        productName: "Amazon Basics Aluminum Non-Stick 15 Piece Cookware Set",
        name: "Ramesh Patel",
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        rating: 4,
        review: "Complete set at great value. The non-stick coating works well if you use wooden utensils and medium heat.",
        date: "April 8 2024 at 12:30",
        verified: true,
        images: []
      },
      {
        id: "9",
        productName: "Amazon Basics Aluminum Non-Stick 15 Piece Cookware Set",
        name: "Geeta Reddy",
        avatar: "https://randomuser.me/api/portraits/women/89.jpg",
        rating: 3,
        review: "Decent quality for the price but the non-stick coating started wearing after 6 months of daily use.",
        date: "February 5 2024 at 19:15",
        verified: true,
        images: []
      },
      {
        id: "9",
        productName: "Amazon Basics Aluminum Non-Stick 15 Piece Cookware Set",
        name: "Vijay Malhotra",
        avatar: "https://randomuser.me/api/portraits/men/90.jpg",
        rating: 5,
        review: "Excellent starter set for new kitchens. All essential pieces included. Much better than expected for the price.",
        date: "November 20 2023 at 11:40",
        verified: false,
        images: []
      },
    
      // AGARO Cookware (id: 10)
      {
        id: "10",
        productName: "AGARO Imperial Granite Non Stick Cookware Set, 4pcs",
        name: "Anita Deshpande",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        rating: 5,
        review: "Beautiful granite finish that's easy to clean. Food doesn't stick if you use proper heat settings. Very happy!",
        date: "March 25 2024 at 15:20",
        verified: true,
        images: [
          "https://m.media-amazon.com/images/I/71XW1Y+qYwL._SL1500_.jpg"
        ]
      },
      {
        id: "10",
        productName: "AGARO Imperial Granite Non Stick Cookware Set, 4pcs",
        name: "Prakash Rao",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 4,
        review: "Good quality non-stick pans. The granite coating looks premium and cleans easily. Handles stay cool during cooking.",
        date: "January 12 2024 at 10:05",
        verified: true,
        images: []
      },

        {
          "id": "11",
          "productName": "Havells Foodo 750 W 5 Jar Mixer Grinder",
          "name": "Arun Kumar",
          "avatar": "https://randomuser.me/api/portraits/men/50.jpg",
          "rating": 4,
          "review": "Good performance overall, but the noise level is higher than expected. The grinding is efficient, and the jars are easy to clean.",
          "date": "April 12, 2024 at 14:30",
          "verified": true,
          "images": ["https://m.media-amazon.com/images/I/71XT0Fq4QhL._SL1500_.jpg"]
        },
        {
          "id": "11",
          "productName": "Havells Foodo 750 W 5 Jar Mixer Grinder",
          "name": "Sita Patel",
          "avatar": "https://randomuser.me/api/portraits/women/32.jpg",
          "rating": 5,
          "review": "Perfect for daily use! The grinder works smoothly, and I love how quick it is to prepare batters and juices.",
          "date": "March 22, 2024 at 10:15",
          "verified": true,
          "images": []
        },
        {
          "id": "12",
          "productName": "Havells Hexo Plus 1100 Watts 3 Jar Mixer Grinder",
          "name": "Deepak Sharma",
          "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
          "rating": 4,
          "review": "Very powerful mixer grinder! It grinds spices and nuts effortlessly. The only downside is that it tends to heat up with continuous use.",
          "date": "April 9, 2024 at 12:05",
          "verified": true,
          "images": []
        },
        {
          "id": "12",
          "productName": "Havells Hexo Plus 1100 Watts 3 Jar Mixer Grinder",
          "name": "Rina Gupta",
          "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
          "rating": 5,
          "review": "Excellent! Best purchase I've made in a long time. It makes smoothies and batters so quickly, and the build quality is top-notch.",
          "date": "March 20, 2024 at 18:45",
          "verified": true,
          "images": ["https://m.media-amazon.com/images/I/71+5IqP2ckL._SL1500_.jpg"]
        },
        {
          "id": "13",
          "productName": "atomberg Renesa+ 1400mm BLDC Ceiling Fan with Remote Control (Golden Oakwood)",
          "name": "Rajesh Mehta",
          "avatar": "https://randomuser.me/api/portraits/men/60.jpg",
          "rating": 5,
          "review": "The fan is very quiet, energy-efficient, and looks great in my living room. The remote control feature is super convenient.",
          "date": "April 5, 2024 at 11:20",
          "verified": true,
          "images": []
        },
        {
          "id": "13",
          "productName": "atomberg Renesa+ 1400mm BLDC Ceiling Fan with Remote Control (Golden Oakwood)",
          "name": "Neha Rao",
          "avatar": "https://randomuser.me/api/portraits/women/20.jpg",
          "rating": 4,
          "review": "Good fan for the price. It is stylish and does not make much noise. However, it could have been more powerful in terms of airflow.",
          "date": "March 30, 2024 at 15:10",
          "verified": false,
          "images": ["https://m.media-amazon.com/images/I/71v72BhwhgL._SL1500_.jpg"]
        },
        {
          "id": "14",
          "productName": "atomberg Studio+ 1200mm BLDC Ceiling Fan with Remote Control (Earth Brown)",
          "name": "Harish Kumar",
          "avatar": "https://randomuser.me/api/portraits/men/37.jpg",
          "rating": 5,
          "review": "A great fan with impressive power and silent operation. The remote control adds to the ease of use.",
          "date": "March 25, 2024 at 17:00",
          "verified": true,
          "images": []
        },
        {
          "id": "14",
          "productName": "atomberg Studio+ 1200mm BLDC Ceiling Fan with Remote Control (Earth Brown)",
          "name": "Ananya Mishra",
          "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
          "rating": 4,
          "review": "Good fan with decent air circulation. The brown color is a perfect match for my living room decor, but it could have been more powerful.",
          "date": "March 10, 2024 at 19:40",
          "verified": true,
          "images": ["https://m.media-amazon.com/images/I/71Y77JJbThL._SL1500_.jpg"]
        },
        {
          "id": "15",
          "productName": "Havells 1200mm Stealth Air BLDC Motor Ceiling Fan",
          "name": "Amit Pandey",
          "avatar": "https://randomuser.me/api/portraits/men/22.jpg",
          "rating": 5,
          "review": "Best ceiling fan I've ever used. Extremely quiet and energy-efficient. The airflow is perfect, and it looks great in my bedroom.",
          "date": "March 5, 2024 at 13:30",
          "verified": true,
          "images": []
        },
        {
          "id": "15",
          "productName": "Havells 1200mm Stealth Air BLDC Motor Ceiling Fan",
          "name": "Priya Jain",
          "avatar": "https://randomuser.me/api/portraits/women/32.jpg",
          "rating": 4,
          "review": "Very good fan with silent operation. However, the design could be improved a bit, but overall a good product.",
          "date": "March 1, 2024 at 16:10",
          "verified": true,
          "images": ["https://m.media-amazon.com/images/I/71JgT5GqD3L._SL1500_.jpg"]
        },
        {
          "id": "16",
          "productName": "Havells 1200mm Stealth Wood Energy Saving Ceiling Fan",
          "name": "Sushant Bhatt",
          "avatar": "https://randomuser.me/api/portraits/men/41.jpg",
          "rating": 5,
          "review": "Beautiful design and excellent performance. The wooden finish looks great, and the air circulation is excellent.",
          "date": "February 25, 2024 at 10:45",
          "verified": true,
          "images": []
        },
        {
          "id": "16",
          "productName": "Havells 1200mm Stealth Wood Energy Saving Ceiling Fan",
          "name": "Sonia Singh",
          "avatar": "https://randomuser.me/api/portraits/women/13.jpg",
          "rating": 4,
          "review": "Stylish fan and works well. The wooden finish is a nice touch, though I expected slightly more airspeed.",
          "date": "February 28, 2024 at 18:30",
          "verified": false,
          "images": ["https://m.media-amazon.com/images/I/71M8jpLvbtL._SL1500_.jpg"]
        },
        {
          "id": "17",
          "productName": "Puma Men's UltraRide Walking Shoe",
          "name": "Manoj Mehta",
          "avatar": "https://randomuser.me/api/portraits/men/34.jpg",
          "rating": 5,
          "review": "Very comfortable and durable walking shoes. Perfect for daily use, especially for long walks. Highly recommend!",
          "date": "April 8, 2024 at 09:30",
          "verified": true,
          "images": []
        },
        {
          "id": "17",
          "productName": "Puma Men's UltraRide Walking Shoe",
          "name": "Nikita Sharma",
          "avatar": "https://randomuser.me/api/portraits/women/27.jpg",
          "rating": 4,
          "review": "Good quality shoes. A bit tight around the toe area, but overall they are supportive and stylish.",
          "date": "March 18, 2024 at 17:10",
          "verified": false,
          "images": ["https://m.media-amazon.com/images/I/81sFwVR5AlL._SL1500_.jpg"]
        },
        {
          "id": "17",
          "productName": "Puma Men's UltraRide Walking Shoe",
          "name": "Ajay Singh",
          "avatar": "https://randomuser.me/api/portraits/men/30.jpg",
          "rating": 3,
          "review": "These shoes are okay, but not the most comfortable for long walks. The sole could be softer.",
          "date": "April 5, 2024 at 11:45",
          "verified": true,
          "images": []
        },
        {
          "id": "18",
          "productName": "Puma Mens Galaxis Pro Running Shoe",
          "name": "Ravindra Joshi",
          "avatar": "https://randomuser.me/api/portraits/men/38.jpg",
          "rating": 5,
          "review": "These running shoes are very comfortable and supportive. The grip is excellent, and they are perfect for long-distance runs.",
          "date": "April 2, 2024 at 14:30",
          "verified": true,
          "images": []
        },
        {
          "id": "18",
          "productName": "Puma Mens Galaxis Pro Running Shoe",
          "name": "Lina Patel",
          "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
          "rating": 4,
          "review": "Comfortable and stylish, but they could offer more arch support. Overall, a great shoe for casual running.",
          "date": "March 28, 2024 at 13:40",
          "verified": false,
          "images": ["https://m.media-amazon.com/images/I/81iHqHV3u0L._SL1500_.jpg"]
        },
        {
          "id": "19",
          "productName": "Puma Mens Galaxis Pro Running Shoe",
          "name": "Sandeep Yadav",
          "avatar": "https://randomuser.me/api/portraits/men/26.jpg",
          "rating": 5,
          "review": "Great shoes for running, light on the feet and very breathable. Excellent choice for warm weather.",
          "date": "March 15, 2024 at 08:50",
          "verified": true,
          "images": []
        },
        {
          "id": "19",
          "productName": "Puma Mens Galaxis Pro Running Shoe",
          "name": "Priyanka Dubey",
          "avatar": "https://randomuser.me/api/portraits/women/48.jpg",
          "rating": 4,
          "review": "Nice shoes, lightweight and comfortable. However, the fit could be better around the heel area.",
          "date": "March 10, 2024 at 17:30",
          "verified": true,
          "images": []
        },
        {
          "id": "20",
          "productName": "JBL Flip 6 Wireless Portable Bluetooth Speaker (Black)",
          "name": "Ravi Khandelwal",
          "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
          "rating": 5,
          "review": "Amazing sound quality for a portable speaker! It's loud, clear, and the battery life is impressive.",
          "date": "April 1, 2024 at 16:25",
          "verified": true,
          "images": []
        },
        {
          "id": "20",
          "productName": "JBL Flip 6 Wireless Portable Bluetooth Speaker (Black)",
          "name": "Anjali Joshi",
          "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
          "rating": 4,
          "review": "Great speaker with deep bass. The only issue is the connectivity sometimes gets interrupted when paired with multiple devices.",
          "date": "March 30, 2024 at 13:55",
          "verified": false,
          "images": ["https://m.media-amazon.com/images/I/51pD-XyMcFL._SL1000_.jpg"]
        },
  {
    "id": "21",
    "productName": "JBL Flip 6 Wireless Bluetooth Speaker (Red)",
    "name": "Amit Kumar",
    "avatar": "https://randomuser.me/api/portraits/men/36.jpg",
    "rating": 4,
    "review": "Amazing sound quality and portability! The battery life could be better, but it's a great speaker overall.",
    "date": "April 10 2024 at 12:30",
    "verified": true,
    "images": ["https://m.media-amazon.com/images/I/71XW1Y+qYwL._SL1500_.jpg"]
  },
  {
    "id": "21",
    "productName": "JBL Flip 6 Wireless Bluetooth Speaker (Red)",
    "name": "Neha Sharma",
    "avatar": "https://randomuser.me/api/portraits/women/32.jpg",
    "rating": 5,
    "review": "I love the deep bass and clear sound. It's small but packs a punch. Perfect for house parties!",
    "date": "March 25 2024 at 14:15",
    "verified": true,
    "images": []
  },
  {
    "id": "22",
    "productName": "JBL Flip 6 Bluetooth Speaker (Squad Edition)",
    "name": "Ravi Verma",
    "avatar": "https://randomuser.me/api/portraits/men/45.jpg",
    "rating": 3,
    "review": "The sound is good but not as loud as I expected. Works well for small rooms, but I wouldn't recommend it for larger spaces.",
    "date": "April 5 2024 at 09:00",
    "verified": true,
    "images": []
  },
  {
    "id": "22",
    "productName": "JBL Flip 6 Bluetooth Speaker (Squad Edition)",
    "name": "Priya Agarwal",
    "avatar": "https://randomuser.me/api/portraits/women/41.jpg",
    "rating": 4,
    "review": "Good sound quality and design. It’s great for listening to music on the go. The battery lasts a decent amount of time.",
    "date": "March 30 2024 at 18:10",
    "verified": true,
    "images": ["https://m.media-amazon.com/images/I/71ZX0hYQ-TL._SL1500_.jpg"]
  },
  {
    "id": "23",
    "productName": "Marshall Kilburn II 36W Bluetooth Speaker",
    "name": "Sahil Gupta",
    "avatar": "https://randomuser.me/api/portraits/men/24.jpg",
    "rating": 5,
    "review": "This speaker has fantastic sound quality, especially for outdoor use. It’s a bit heavy, but well worth it for the sound.",
    "date": "April 2 2024 at 16:45",
    "verified": true,
    "images": []
  },
  {
    "id": "24",
    "productName": "Marshall Major IV Wireless On-Ear Headphones",
    "name": "Sanya Kapoor",
    "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
    "rating": 4,
    "review": "Comfortable and stylish. The sound is great, but the headphones could be a bit more comfortable during long listening sessions.",
    "date": "March 18 2024 at 10:20",
    "verified": true,
    "images": []
  },
  {
    "id": "25",
    "productName": "Limetro Steel Laser Printed Steel Dinner Set",
    "name": "Rohit Singh",
    "avatar": "https://randomuser.me/api/portraits/men/82.jpg",
    "rating": 4,
    "review": "Beautiful set with great finish. However, the plates are a bit smaller than expected. Overall, good value for the price.",
    "date": "April 1 2024 at 11:05",
    "verified": true,
    "images": []
  },
  {
    "id": "25",
    "productName": "Limetro Steel Laser Printed Steel Dinner Set",
    "name": "Anjali Mehra",
    "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
    "rating": 5,
    "review": "I’m in love with this dinner set! It looks modern and is very durable. Great for family dinners.",
    "date": "March 22 2024 at 13:40",
    "verified": true,
    "images": []
  },
  {
    "id": "26",
    "productName": "Lifelong 2 Burner Gas Stove",
    "name": "Vikram Joshi",
    "avatar": "https://randomuser.me/api/portraits/men/12.jpg",
    "rating": 4,
    "review": "Affordable and performs well. The burners are strong, but the body could be a little more sturdy.",
    "date": "March 15 2024 at 17:00",
    "verified": true,
    "images": []
  },
  {
    "id": "26",
    "productName": "Lifelong 2 Burner Gas Stove",
    "name": "Aparna Rao",
    "avatar": "https://randomuser.me/api/portraits/women/29.jpg",
    "rating": 5,
    "review": "Great value for money! Easy to use and clean. Works well for small to medium kitchens.",
    "date": "February 28 2024 at 14:25",
    "verified": true,
    "images": []
  },
  {
    "id": "27",
    "productName": "JD FRESH 5 Tier Metal Floor Lamp with 3 Adjustable Color",
    "name": "Dinesh Patel",
    "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
    "rating": 3,
    "review": "The lamp looks great but is a little unstable on carpeted floors. The color-changing feature is nice though.",
    "date": "March 20 2024 at 11:55",
    "verified": true,
    "images": []
  },
  {
    "id": "27",
    "productName": "JD FRESH 5 Tier Metal Floor Lamp with 3 Adjustable Color",
    "name": "Rina Mishra",
    "avatar": "https://randomuser.me/api/portraits/women/63.jpg",
    "rating": 5,
    "review": "Absolutely stunning! The adjustable color feature sets the right mood for any room. Love it!",
    "date": "April 3 2024 at 19:10",
    "verified": true,
    "images": []
  },
  {
    "id": "28",
    "productName": "LIVINGLOOM Sofa Table End Table",
    "name": "Rohini Kapoor",
    "avatar": "https://randomuser.me/api/portraits/women/53.jpg",
    "rating": 4,
    "review": "Sleek design and easy to assemble. It's a little smaller than expected but still works well in my living room.",
    "date": "March 18 2024 at 08:40",
    "verified": true,
    "images": []
  },
  {
    "id": "28",
    "productName": "LIVINGLOOM Sofa Table End Table",
    "name": "Kunal Shah",
    "avatar": "https://randomuser.me/api/portraits/men/51.jpg",
    "rating": 5,
    "review": "Great table for the price. Perfect for small spaces, and the wood finish looks great with modern decor.",
    "date": "March 12 2024 at 17:50",
    "verified": true,
    "images": []
  },
  {
    "id": "29",
    "productName": "AAFIYA HANDICRAFTS Round Coffee Table/Center",
    "name": "Sanjay Tiwari",
    "avatar": "https://randomuser.me/api/portraits/men/31.jpg",
    "rating": 4,
    "review": "Beautiful craftsmanship and a unique design. The table is a bit low, but it adds a cozy vibe to my living room.",
    "date": "April 6 2024 at 10:30",
    "verified": true,
    "images": []
  },
  {
    "id": "29",
    "productName": "AAFIYA HANDICRAFTS Round Coffee Table/Center",
    "name": "Meena Rani",
    "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
    "rating": 5,
    "review": "Love this coffee table! It’s a perfect match with my sofa set. The quality is top-notch.",
    "date": "March 25 2024 at 12:50",
    "verified": true,
    "images": []
  },
  {
    "id": "30",
    "productName": "DSH CRAFTING YOUR CURIOSITY Metal Wall Decor",
    "name": "Saurabh Mehta",
    "avatar": "https://randomuser.me/api/portraits/men/57.jpg",
    "rating": 3,
    "review": "The design is good, but the material feels a bit flimsy. It’s a decent decor piece for the price.",
    "date": "March 8 2024 at 16:20",
    "verified": true,
    "images": []
  },
  {
    "id": "30",
    "productName": "DSH CRAFTING YOUR CURIOSITY Metal Wall Decor",
    "name": "Rina Patel",
    "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
    "rating": 5,
    "review": "Love this wall decor! It adds character to my room and the quality is much better than expected.",
    "date": "April 9 2024 at 18:05",
    "verified": true,
    "images": []
  },
  {
    "id": "31",
    "productName": "DSH CRAFTING YOUR CURIOSITY Metal Wall Art",
    "name": "Deepak Sharma",
    "avatar": "https://randomuser.me/api/portraits/men/35.jpg",
    "rating": 4,
    "review": "The artwork is very stylish and looks great on my wall. Would have liked it to be a bit larger.",
    "date": "March 5 2024 at 20:25",
    "verified": true,
    "images": []
  },
  {
    "id": "31",
    "productName": "DSH CRAFTING YOUR CURIOSITY Metal Wall Art",
    "name": "Nisha Gupta",
    "avatar": "https://randomuser.me/api/portraits/women/50.jpg",
    "rating": 5,
    "review": "Beautiful wall art! It gives my living room a modern and elegant touch. Highly recommend!",
    "date": "April 3 2024 at 15:10",
    "verified": true,
    "images": []
  },
    {
      "id": "32",
      "productName": "Sanyo 43 Inch Full HD LED TV",
      "name": "Pradeep Singh",
      "avatar": "https://randomuser.me/api/portraits/men/65.jpg",
      "rating": 4,
      "review": "Good value for money. The picture quality is sharp and clear, but the sound could be better. Great for the price!",
      "date": "April 8 2024 at 12:30",
      "verified": true,
      "images": []
    },
    {
      "id": "32",
      "productName": "Sanyo 43 Inch Full HD LED TV",
      "name": "Aarti Sharma",
      "avatar": "https://randomuser.me/api/portraits/women/55.jpg",
      "rating": 5,
      "review": "Excellent picture and build quality. The TV is great for everyday use, and the setup was simple. Highly recommend.",
      "date": "March 30 2024 at 11:40",
      "verified": true,
      "images": []
    },
    {
      "id": "33",
      "productName": "Sony Bravia 50 Inch 4K Ultra HD Smart LED TV",
      "name": "Rajeev Kumar",
      "avatar": "https://randomuser.me/api/portraits/men/80.jpg",
      "rating": 5,
      "review": "The picture quality is phenomenal, and the 4K resolution makes movies and sports look incredible. Worth every penny!",
      "date": "March 26 2024 at 14:50",
      "verified": true,
      "images": []
    },
    {
      "id": "33",
      "productName": "Sony Bravia 50 Inch 4K Ultra HD Smart LED TV",
      "name": "Swati Mehta",
      "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
      "rating": 4,
      "review": "Great TV with amazing picture quality, but the sound system could be improved. I recommend using a soundbar with it.",
      "date": "April 4 2024 at 16:10",
      "verified": true,
      "images": []
    },
    {
      "id": "34",
      "productName": "Realme 32 Inch Full HD LED TV",
      "name": "Vishal Yadav",
      "avatar": "https://randomuser.me/api/portraits/men/24.jpg",
      "rating": 3,
      "review": "Decent TV for the price, but the colors and contrast are not as vibrant as I hoped. Works fine for basic viewing.",
      "date": "March 15 2024 at 09:05",
      "verified": true,
      "images": []
    },
    {
      "id": "34",
      "productName": "Realme 32 Inch Full HD LED TV",
      "name": "Rohini Soni",
      "avatar": "https://randomuser.me/api/portraits/women/27.jpg",
      "rating": 4,
      "review": "Good TV for the budget. The picture quality is decent, and the sound is clear. Perfect for a bedroom or small living room.",
      "date": "March 18 2024 at 17:45",
      "verified": true,
      "images": []
    },
    {
      "id": "35",
      "productName": "Samsung 75 Inch Crystal UHD 4K Smart TV",
      "name": "Vikram Rao",
      "avatar": "https://randomuser.me/api/portraits/men/22.jpg",
      "rating": 5,
      "review": "Absolutely stunning TV. The 4K quality is mind-blowing, and the large screen is perfect for movie nights.",
      "date": "April 10 2024 at 11:20",
      "verified": true,
      "images": []
    },
    {
      "id": "35",
      "productName": "Samsung 75 Inch Crystal UHD 4K Smart TV",
      "name": "Maya Patel",
      "avatar": "https://randomuser.me/api/portraits/women/60.jpg",
      "rating": 5,
      "review": "The best TV I’ve ever purchased! Amazing clarity, great sound, and it’s perfect for my home theater setup.",
      "date": "April 6 2024 at 14:30",
      "verified": true,
      "images": []
    },
    {
      "id": "36",
      "productName": "LG 55 Inch 4K UHD Smart OLED TV",
      "name": "Arvind Joshi",
      "avatar": "https://randomuser.me/api/portraits/men/38.jpg",
      "rating": 5,
      "review": "Superb OLED display! The contrast and color accuracy are out of this world. Best TV for movie lovers.",
      "date": "April 2 2024 at 19:25",
      "verified": true,
      "images": []
    },
    {
      "id": "36",
      "productName": "LG 55 Inch 4K UHD Smart OLED TV",
      "name": "Simran Kaur",
      "avatar": "https://randomuser.me/api/portraits/women/72.jpg",
      "rating": 5,
      "review": "Incredible picture quality and vibrant colors. I’m impressed with the black levels as well. Definitely worth the investment.",
      "date": "March 28 2024 at 10:50",
      "verified": true,
      "images": []
    }
  
      
    ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-300' : 'text-gray-300'}`} 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
      </svg>
    ));
  };

  useEffect(() => {
    const filteredReviews = reviews.filter((item) => item.id === mobId);
    setProductReviews(filteredReviews);
  }, [mobId]);

  // Calculate average rating for the product
  const averageRating = productReviews.length > 0 
    ? (productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length).toFixed(2)
    : 0;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-800 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

          <div className="mt-2 flex items-center gap-2 sm:mt-0">
            <div className="flex items-center gap-0.5">
              {renderStars(Math.round(averageRating))}
            </div>
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({averageRating})</p>
            <a href="#" className="text-sm font-medium leading-none text-white-900 underline hover:no-underline dark:text-white"> {productReviews.length} Reviews </a>
          </div>
        </div>

        <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
          <div className="shrink-0 space-y-4">
            <p className="text-2xl font-semibold leading-none text-white-900 dark:text-white">{averageRating} out of 5</p>
            <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Write a review</button>
          </div>

          <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = productReviews.filter(r => r.rating === star).length;
              const percentage = productReviews.length > 0 ? (count / productReviews.length) * 100 : 0;
              
              return (
                <div key={star} className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">{star}</p>
                  <svg className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div 
                      className="h-1.5 rounded-full bg-yellow-300" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <a href="#" className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">
                    {count} <span className="hidden sm:inline">reviews</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {productReviews.length > 0 && (
          <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
            {productReviews.map((review, index) => (
              <div key={index} className="gap-3 py-6 sm:flex sm:items-start">
                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                  <div className="flex items-center gap-0.5">
                    {renderStars(review.rating)}
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{review.name}</p>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{review.date}</p>
                  </div>

                  {review.verified && (
                    <div className="inline-flex items-center gap-1">
                      <svg className="h-5 w-5 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Verified purchase</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">{review.review}</p>

                  {review.images?.length > 0 && (
                    <div className="flex gap-2">
                      {review.images.map((image, imgIndex) => (
                        <img key={imgIndex} className="h-32 w-20 rounded-lg object-cover" src={image} alt="" />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
                    <div className="flex items-center">
                      <input 
                        id={`reviews-radio-yes-${index}`} 
                        type="radio" 
                        name={`reviews-radio-${index}`} 
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" 
                      />
                      <label htmlFor={`reviews-radio-yes-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 1 </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        id={`reviews-radio-no-${index}`} 
                        type="radio" 
                        name={`reviews-radio-${index}`} 
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" 
                      />
                      <label htmlFor={`reviews-radio-no-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <button type="button" className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">View more reviews</button>
        </div>
      </div>
    </section>
  ); 
};

export default CustomerReview;