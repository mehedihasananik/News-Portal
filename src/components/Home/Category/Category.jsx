import { useEffect, useState } from "react";
import CategoryItems from "../../utilies/CategoryItems";

const Category = () => {
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="md:w-[33%] ">
      <div className="font-bold text-xl py-2">All Categories</div>
      <div>
        {category.map((item) => {
          return <CategoryItems key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
