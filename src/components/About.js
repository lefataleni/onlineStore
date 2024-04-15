// Import React and necessary dependencies
import React from "react";
import Figure from "react-bootstrap/Figure"; // Import Figure component from react-bootstrap
import "./About.css"; // Import CSS for styling

// Define the About component
const About = () => {
  return (
    <div className="about-container">
      {/* Display the store logo */}
      <Figure>
        <Figure.Image
          width={200}
          height={200}
          alt="Store Logo"
          src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template-digital-shopping-logo-mouse-cursor-cart-concepts_502185-286.jpg" //  logo image URL
        />
        <Figure.Caption>
          The Store - A Contemporary Fashion Boutique
        </Figure.Caption>
      </Figure>

      {/* Introduction paragraph */}
      <p>
        Welcome to The Store Name! We offer chic and stylish clothing for both
        men and women. From romantic lace and flowy maxi dresses to edgy leather
        jackets and timeless trench coats, our store has something for everyone.
      </p>

      {/* Display store interior images */}
      <Figure>
        <Figure.Image
          width={300}
          height={200}
          alt="Store Interior"
          src="https://dminteriors.lk/wp-content/uploads/2021/09/Cloth-Shop-Interior-Design-Ideas-1.jpg" // store interior image URL
        />
        <Figure.Image
          className="image2"
          width={300}
          height={200}
          alt="Store Interior"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyoaP8gIwb3UHm_XwwrX2jFEs4YmWmuRvOb5V1s1TVQ&s" // fictional store interior image URL
        />
      </Figure>

      {/* Contact information */}
      <p>
        Visit us at our physical location or shop online! For inquiries, contact
        us at:
        <br />
        Phone: 123-456-7890
        <br />
        Email: info@yourstore.com
      </p>
    </div>
  );
};

export default About; // Export the About component 
