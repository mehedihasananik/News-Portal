import { categoryData } from "../../../data/categoryData";
import CategoryItems from "../../utilies/CategoryItems";

const Category = () => {
  return (
    <div className="md:w-[33%] ">
      <div className="font-bold text-xl py-2">All Categories</div>
      <div>
        {categoryData.map((item) => {
          console.log(item);
          return <CategoryItems key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
