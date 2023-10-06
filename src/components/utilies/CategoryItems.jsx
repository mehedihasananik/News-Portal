import { Link } from "react-router-dom";

const CategoryItems = ({ id, name }) => {
  return (
    <div>
      <Link
        to={`/category/${id}`}
        className=" text-xl px-8  py-2 hover:bg-gray-400 hover:font-bold duration-300"
      >
        {name}
      </Link>
    </div>
  );
};

export default CategoryItems;
