// src/api/index.js

// Dummy API calls for demonstration
// src/api/index.js

// src/api/index.js
import png1 from "../assets/images/png1.png";
import png2 from "../assets/images/png2.png";
import png3 from "../assets/images/png3.png";
import png4 from "../assets/images/png4.png";
import png5 from "../assets/images/png5.png";
import png6 from "../assets/images/png6.png";
import png7 from "../assets/images/png7.png";
import png8 from "../assets/images/png8.jpg";
import png9 from "../assets/images/png9.png";


export const signup = async (userData) => {
  try {
    // Simulate API call by storing user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // Simulate a successful API response
    return Promise.resolve({ success: true });
  } catch (error) {
    return { success: false, error: error.message };
  }
};


  
  
  
  export const login = (userData) => {
    // Simulate API call
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser.email === userData.email && storedUser.password === userData.password) {
      return Promise.resolve({ success: true });
    } else {
      return Promise.reject({ success: false });
    }
  };
  
 // utils/dataFetcher.js

export const fetchItems = () => {
  
  return [
    {
      id: 9111,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOr4EIu4tf3wqrRHY5v-b6okX11WNx0oqnw&s" ,
      oldPrice: 480,
      price: 9060,
      description: 'Red Motorcycle',
      rating: 5.0,
      Minimumorder:"50 set"
    },
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIRI4y1WumGUOQ91T6xb-M0LCdHxFHuqYEA&s" , 
      oldPrice: 120,
      price: 100,
      description: 'Excavator',
      rating: 4.5,
    },
    {
      id: 2,
      image: png1,
      oldPrice: 80,
      price: 60,
      description: ' Crystal Wedding Ring',
      rating: 4.0,
      Minimumorder: "14 Set"
    },

    {
      id: 3,
      image: png3,
      oldPrice: 480,
      price: 9060,
      description: 'Silver Ring',
      rating: 4.0,
      Minimumorder:"50 set"
    },
    {
      id: 4,
      image: png4,
      oldPrice: 80,
      price: 160,
      description: 'Gold Flower',
      rating: 4.0,
      Minimumorder:9
    },
    {
      id: 5,
      image: png5,
      oldPrice: 80,
      price: 360,
      description: 'Christmass Hat',
      rating: 3.0,
    },
    {
      id: 6,
      image: png6,
      oldPrice: 80,
      price: 1500,
      description: 'Royal Wedding Ring',
      rating: 2.0,
    },
    {
      id: 7,
      image: png7,
      oldPrice: 80,
      price: 260,
      description: 'Photoshop',
      rating: 4.0,
      Minimumorder:70,
    },


    {
      id: 8,
      image: png8,
      oldPrice: 80,
      price: 20,
      description: 'Christmass Decoration',
      rating: 1.0,
      Minimumorder:720
    },

    {
      id: 10000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynEKf_vQNFDZZkL3BE7YptCNyhX9oaq2Gkw&s",
      oldPrice: 80,
      price: 20,
      description: 'Loud Speakers',
      rating: 1.0,
      Minimumorder:720
    },
    {
      id: 10001,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2s_9Ntczt2TsJIrmfcIfxQwpKvn6AVwSCA&s",
      oldPrice: 180,
      price: 120,
      description: 'Mp3 player',
      rating: 1.0,
      Minimumorder:720
    },
 
    {
      id: 90,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KS-Qp2udIo2BFQz-z3h5WWqCF4APhAuOjnBCwwJU8XVscYJdsgyEzg2c2SKpSSC7SFE&usqp=CAU",
      oldPrice: 80,
      price: 20,
      description: 'Benz Car',
      rating: 4.0,
      Minimumorder:30
    },
    {
      id: 9,
      image: "https://media.istockphoto.com/id/667043154/vector/flying-drone-isolated-on-white-background-3d-rendered-illustration.jpg?s=1024x1024&w=is&k=20&c=MUyT0V9EschUGE0cgF0pULgulkkmXbhrRwYShMvv5XE=",
      oldPrice: 80,
      price: 20,
      description: 'Drone',
      rating: 5.0,
      Minimumorder:30
    },
    {
      id: 10,
      image: "",
      oldPrice: 590,
      price: 120,
      description: 'Amazing item 2',
      rating: 4.0,
        Minimumorder:"10 set"
    },
    {
      id: 11,
      image: png9,
      oldPrice: 120,
      price: 70,
      description: 'Christmass Ball',
      rating: 4.0,
    },
    {
      id: 12,
      image:"https://unsplash.com/photos/photo-of-turn-off-macbook-air-on-table-tAKXap853rY",
      oldPrice: 80,
      price: 20,
      description: 'Mackbook air',
      rating: 4.0,
    },
    {
      id: 13,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqeWlpknaIxar9xs6ixKRwqnSKM193OoPvQ&s",
      oldPrice: 80,
      price: 50,
      description: 'Freezer',
      rating: 7.0,
    },
    {
      id: 14,
      image: "https://unsplash.com/photos/blue-lenovo-laptop-computer-on-black-table-qaebAQHof70",
      oldPrice: 80,
      price: 90,
      description: 'Laptop',
      rating: 5.0,
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1528027656671-6d156f4f1f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1cGJvYXJkfGVufDB8fDB8fHww",
      oldPrice: 80,
      price: 123,
      description: 'Shell',
      rating: 5.0,
    },
    {
      id: 16,
      image: "https://media.istockphoto.com/id/451043331/photo/black-note-book-with-ballpoint-pen.jpg?s=1024x1024&w=is&k=20&c=SS9p9TYFxGzF4QlYf7EKX1Ajz16LyMtnujBKSN7jakQ=",
      oldPrice: 80,
      price: 110,
      description: 'Noble Jotter',
      rating: 2.1,
    },
    {
      id: 17,
      image: "",
      oldPrice: 80,
      price: 50,
      description: 'Amazing item 9',
      rating: 3.9,
    },
    {
      id: 131,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      oldPrice: 80,
      price: 90,
      description: 'Apple Laptop',
      rating: 3.8,
    },
    {
      id: 130,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVM0TDVta-biPfxuy9EM84Nb2NI2AGmDJj9w&s",
      oldPrice: 80,
      price: 10,
      description: 'printer',
      rating: 9.0,
      Minimumorder:80
    },
    {
      id: 129,
      image: "https://media.istockphoto.com/id/182157353/photo/laptop-in-a-bag.webp?s=1024x1024&w=is&k=20&c=2nV28NPvahRBv7ehUaHB77zjUB0Uyr09yJ0UkvCogBo=",
      oldPrice: 80,
      price: 220,
      description: 'Laptop Bag',
      rating: 7.0,
    },
    {
      id: 128,
      image: "https://media.istockphoto.com/id/489692396/photo/black-notebook.jpg?s=1024x1024&w=is&k=20&c=1aAM_EIeGiOJ-ecWDTXr6JWbELjUQHeW9hcJpd-I6uM=",
      oldPrice: 80,
      price: 420,
      description: 'Phone Bag',
      rating: 9.0,
      Minimumorder:60
      
    },
    {
    id: 127,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4NS_f4oBNY8dFE_iOrGAbabLat8hB07fdQ&s",
    oldPrice: 80,
    price: 420,
    description: 'brand new car',
     rating: 9.0,
    minimumorder:2
  },
  {   id: 126,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4h0XOuUoKDmlzilMxxD4QX77jbe6hW6al8g&s",
    oldPrice: 80,
    price: 420,
    description: 'Hammer',
    rating: 9.0,
    
  },
  {   id: 5826,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4d8Sxld_5aIBbg5DbG9OacJX5h_fWRm4gw&s",
    oldPrice: 80,
    price: 420,
    description: 'Hammer',
    rating: 9.0,
    
  },
  {   id: 125,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82MsEZileSvODfYcJZ0eStcHV1kMjK-f4Aw&s",
    oldPrice: 80,
    price: 420,
    description: 'Can Water',
    rating: 9.0,
    minimumorder:"30 set"
  },
  {   id: 124,
    image: "https://media.istockphoto.com/id/489692396/photo/black-notebook.jpg?s=1024x1024&w=is&k=20&c=1aAM_EIeGiOJ-ecWDTXr6JWbELjUQHeW9hcJpd-I6uM=",
    oldPrice: 80,
    price: 420,
    description: 'Amazing item 2',
    rating: 9.0,
    
  },
  {   id: 123,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0LcvHSOXfK0d3OOM_qMG-kgOD5_iM9Jsag&s",
    oldPrice: 80,
    price: 420,
    description: "Glass Cup",
    rating: 9.0,
    
  },
  {   id: 121,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT06qpNwB6_jYwcJEMf3bQVkEZuK_9poUMGQ&s",
    oldPrice: 350,
    price: 40,
    description: 'Can Water',
    rating: 9.0,
    Minimumorder:"7 set"
    
  },
  {   id: 4001,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQex6h37rL2YSCC0rhrqblaTw2SrGs-9f8f9w&s",
    oldPrice: 4180,
    price: 290,
    description: 'Sprayer',
    rating: 3.0,
    
  },
  {   id: 4003,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aA4Vdy0MWUOQVSg281flIFiDP5cSxMoLHA&s",
    oldPrice: 2180,
    price: 720,
    description: 'Hp- printer',
    rating: 3.0,
    
  },
  {   id: 4002,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfbSNAUqcopMg4-28HCN5Y5ikl8KRZ1CJjw&s",
    oldPrice: 1380,
    price: 320,
    description: 'Generator',
    rating: 9.0,
    minimumorder: '20 set'
    
  },
  {   id: 4009,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9rNsHlJ1aSK8lBQsh3dLysry9JNHLRm9oA&s",
    oldPrice: 180,
    price: 220,
    description: 'KVA Generator',
    rating: 8.0,
    minimumorder: '20 set'  },
    
    {   id: 4012,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dLXMk6RTo0mLZ_O72-ZbWtYEsrz6gScmzQ&s",
      oldPrice: 2580,
      price: 2120,
      description: 'Leister',
      rating: 7.0,
      minimumorder: '120 set'  },

      {   id: 5092,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ9qtzHDlkz2KcyY4IYiz1b47hH9DWK0MeQ&s",
        price: 2120,
        description: 'photocopy',
        rating: 2.0,
        minimumorder: '4120 set'  },
        {   id: 6000,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_H75U4zsah3UjGKbnIU6HRYj6olY_Yn-JA&s",
          price: 2120,
          description: 'Table/Chair Set',
          rating: 2.0,
          minimumorder: '4120 set'  },

          {   id: 7000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-BIwQU8OL2FOLR6OtLPEGi0oSlYMzDnEPA&s",
            price: 2120,
            description: 'Iron',
            rating: 2.0,
            minimumorder: '70 set'  },

            {   id: 7001,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSPP8Pd2eyrHfIeQbPx_XkI2cgJXgKwiGug&s",
                price: 2120,
                description: 'Big cooking pot',
                rating: 2.0,
                minimumorder: '420 set'  },
                {   id: 7002,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcZXl4miSHKCo-XwniqQU2S9ViSKbDBd5GQ&s",
                  price: 2120,
                  description: 'pillow ',
                  rating: 4.0,
                  minimumorder: '120 set'  },
      
                  {   id: 7003,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzTDAnsa-SKU60kojK64rUV7-cYafsQThxQ&s",
                    price: 2120,
                    description: 'Pillow ',
                    rating: 9.0,
                    minimumorder: '41 set'  },

                    {   id: 75405,
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfpTqeqbZrx_tiiCGK3FlYhFuFhAH21T6hA&s",
                      description: 'Electric Iron',
                      rating: 3.0,
                      minimumorder: '20 set'  },

                      {   id: 7235,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBGTB5StD7s6XJvK2rzS28kEnpXwjnzzeiQ&s",
                        description: 'German pot',
                        rating: 3.0,
                        minimumorder: '20 set'  },

                        {   id: 7035,
                          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWxDs_KaBGkOxcrvKNYfosSAyh30tgWYLiA&s",
                          description: 'Electric cooker',
                          rating: 3.0,
                          minimumorder: '20 set'  },
                          {   id: 7015,
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXS3rs-irHC9sxOWYJVi2LifsWKnVkLW6JQ&s",
                            description: 'Gas Cylinder',
                            rating: 3.0,
                            minimumorder: '20 set'  },
      
  // Add more items as needed
  ];
};

  