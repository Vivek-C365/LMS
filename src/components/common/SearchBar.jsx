import React from "react";
import { Input } from "antd";
import { SearchIcon } from "../../assets/images/svg/index";

const SearchBar = ({ placeholder = "Search products..." }) => {
  return (
    <div className="relative flex-grow md:flex-grow-0 md:w-64">
      <Input
        className="!bg-white !border !border-gray-200 !h-[32px] !text-gray-800 placeholder:!text-gray-400 hover:!border-gray-300 focus:!border-blue-500 !rounded-full custom-text-style-search shadow-sm"
        type="search"
        placeholder={placeholder}
        allowClear
        suffix={<SearchIcon className="text-gray-400" />}
      />
    </div>
  );
};

export default SearchBar;
