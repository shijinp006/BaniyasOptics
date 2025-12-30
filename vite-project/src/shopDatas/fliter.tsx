


export const ColorsList = ({ Open, filter }: any) => {
  const colors = ["All", "Black", "Blue", "Brown", "Green", "Red"];
  const handleColor = (color: string) => {

    filter?.(color)
    Open?.(false);

  };

  return (
    <div className="w-[180px] flex flex-col border border-gray-200 rounded-md overflow-hidden">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColor(color)}
          className={`
            px-3 py-2
            text-sm
            cursor-pointer
            transition-colors
            bg-white text-[#A4A4A4] hover:bg-gray-50
            
          `}
        >
          {color}
        </div>
      ))}
    </div>
  );
};


export const PriceList = ({ Open, filter }: any) => {
  const prices = [
    "All",
    "Under ₹500",
    "₹500 – ₹1,000",
    "₹1,000 – ₹2,000",
    "₹2,000 – ₹5,000",
    "Above ₹5,000",
  ];



  const handlePrice = (price: string) => {
    filter(price)
    Open?.(false)

  };

  return (
    <div className=" w-[120px] lg:w-[180px] flex flex-col border border-gray-200 rounded-md overflow-hidden">
      {prices.map((price) => (
        <div
          key={price}
          onClick={() => handlePrice(price)}
          className={`
            px-3 py-2
            text-sm
            cursor-pointer
            transition-colors
            bg-white text-[#A4A4A4] hover:bg-gray-50
          `}
        >
          {price}
        </div>
      ))}
    </div>
  );
};


export const SortBy = ({ Open, filter }: any) => {
  const sortOptions = [
    { label: "All", value: "All" },
    { label: "Price: Low to High", value: "lowToHigh" },
    { label: "Price: High to Low", value: "highToLow" },
  ];

  const handleSort = (value: string) => {
    filter?.(value);
    Open?.(false);
  };

  return (
    <div className="  w-[180px] flex flex-col border border-gray-200 rounded-md overflow-hidden">
      {sortOptions.map((item) => (
        <div
          key={item.value}
          onClick={() => handleSort(item.value)}
          className="
            px-3 py-2
            text-sm
            cursor-pointer
            transition-colors
            bg-white text-[#A4A4A4] hover:bg-gray-50
          "
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
