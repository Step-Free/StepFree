  const CategoryCard = ({ icon, title }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-gray-700 hover:shadow-lg dark:hover:border-gray-600 transition-all duration-300 cursor-pointer">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-3 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
      </div>
    );
  };

export default CategoryCard;
