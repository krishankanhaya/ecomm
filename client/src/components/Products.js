import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setData(response.data);
        } catch (error) {
          console.error("Error in Fetching Data : ", error);
        }
      };

      fetchData();
    }, []);
  return (
    <section className="text-red flex flex-row flex-wrap gap-4 mt-5 py-4 justify-around ph:m-12 ">
      {data.map((product) => (
        <div key={product.id}>
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
    </section>
  );
}

export default Products;
