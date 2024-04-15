import React, { useState } from "react";
import ProductCard from "./ProductCard"; // IMport ProductCard function
import TotalPrice from "./TotalPrice"; // import TotalPPrice function
import "./ProductCard.css"; // Import CSS for ProductCard
import "./Products.css"; // Import CSS for Products
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShoppingCart from "./ShoppingCart";

function Products() {
  // Initialize state variables using the useState hook
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  // Function to handle the "Buy" action
  const handleBuy = (productPrice) => {
    setTotalPrice((prevTotal) => prevTotal + productPrice); // Update total price
    setShowTotalPrice(true); // Show total price after clicking Buy
  };

  // product data
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", // description
      price: 49.99,
      image:
        "https://bagazio.co.za/cdn/shop/products/PolyesterPromoT-shirt5_700x700.png?v=1648712561", // image URL
    },
    {
      id: 2,
      name: "Men's Leather Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 499.99,
      image:
        "https://valentino-cdn.thron.com/delivery/public/image/valentino/94fcace8-8ba3-42a4-9677-f74ed0dad4b8/ihqstx/std/500x0/LEATHER-JACKET-WITH-BLACK-UNTITLED-STUDS?quality=80&size=35&format=auto", // image URL
    },
    {
      id: 3,
      name: "White dress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 399.99,
      image:
        "https://dbi-blog.s3.amazonaws.com/uploads/2020/08/SDWG0815_4_PDP_Crop_JUN23_1920x2880.jpeg", // image URL
    },
    {
      id: 4,
      name: "Flowy Maxi Dress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 349.99,
      image:
        "https://wanderlustulum.com/cdn/shop/products/DSCF9357sk_long_gasa_white_2000x.jpg?v=1597616930", // image URL
    },
    {
      id: 5,
      name: "Women's Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 99.99,
      image:
        "https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2016/05/09/source-img/20160509103006_96143.jpg", // image URL
    },
    {
      id: 6,
      name: "Men's Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 99.99,
      image:
        "https://youraverageguystyle.com/wp-content/uploads/2022/12/Essential-Fashion-Items-For-Men-To-Create-A-Casual-Chic-Style-White-Button-Down-Shirt.jpg", // image URL
    },
    {
      id: 7,
      name: "Chic Cargo Pants for Women",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 449.99,
      image:
        "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_11-08-17-2027_1000x.JPG?v=1511372840", // image URL
    },
    {
      id: 8,
      name: "Smart Pants for Men",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 599.99,
      image:
        "https://th.bing.com/th/id/R.612b884a95567ccedb0f658a46f53454?rik=2lepz1xwGLm%2fEw&pid=ImgRaw&r=0", // image URL
    },
    {
      id: 9,
      name: "Essential Accesories Bundle for Men",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 1199.99,
      image:
        "https://th.bing.com/th/id/OIP.FU3IknWQXJ3Ujmttj5s3KQAAAA?rs=1&pid=ImgDetMain", // image URL
    },
    {
      id: 10,
      name: "Essential Accesories Bundle for Women",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 799.99,
      image:
        "https://static.turbosquid.com/Preview/2020/01/09__14_47_37/WomensFashionAccessoriesCollection2mb3dmodel000.jpgA41EEA74-9861-4366-8358-01741D88C057Default.jpg", // image URL
    },
  ];

  return (
    <Container>
      <Row className="row">
        <Col className="col1">
          <div className="mainProductDiv">
            <div className="productsDiv">
              <h1>Explore The Store</h1>
              {/* Map through products and render ProductCard components */}
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleBuy={handleBuy}
                />
              ))}
              {/* Display total price at the bottom of the page */}
            </div>
          </div>
        </Col>

        <Col className="col2">
          <div className="mainPriceDiv">
            <div className="totalPrice">
              <div className="totalPriceDiv">
                {showTotalPrice && (
                  <TotalPrice className="Cart" totalPrice={totalPrice} />
                )}
                <div className="cartIcon">
                  {" "}
                  <ShoppingCart />{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
