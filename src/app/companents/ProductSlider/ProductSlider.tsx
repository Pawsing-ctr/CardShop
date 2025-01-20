// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import IProduct from "@/app/types/product";

// interface IProductSlider {
//   products: IProduct[];
// }

// const ProductSlider: React.FC<IProductSlider> = ({ products }) => {
//   console.log(products);

//   return (
//     <div>
//       <Carousel>
//         {products.map((el) => {
//           return(
//             <div>
//             <img
//               src={el.photo || "/placeholder.svg"}
//               alt={el.name}
//               className="product-image"
//             />
//             <p className="product-name">{el.name}</p>
//             <p className="product-description">{el.description}</p>
//             <p className="product-price">{el.price}</p>
//           </div>;
//           )
//         })}
//       </Carousel>
//     </div>
//   );
// };

// export default ProductSlider;

import type React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import type IProduct from "@/app/types/product";

interface IProductSlider {
  products: IProduct[];
}

const ProductSlider: React.FC<IProductSlider> = ({ products }) => {
  return (
    <div>
      <Carousel>
        {products.map((el) => (
          <div key={el.id}>
            <img
              src={el.photo || "/placeholder.svg"}
              alt={el.name}
              className="product-image"
            />
            <p className="product-name">{el.name}</p>
            <p className="product-description">{el.description}</p>
            <p className="product-price">{el.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
