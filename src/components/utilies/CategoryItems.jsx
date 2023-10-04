const CategoryItems = ({ id, name }) => {
  return (
    <div>
      <button className=" text-xl px-8  py-2 hover:bg-gray-400 hover:font-bold duration-300">
        {name}
      </button>
    </div>
  );
};

export default CategoryItems;
