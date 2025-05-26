import React from "react";
import { Input } from "antd";
import { SearchIcon } from "../../assets/images/svg/index";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative flex-grow md:flex-grow-0 md:w-64 max-w-[432px] !w-full">
      <Input
        className="!bg-white !border !border-[var(--color-primary-border)] !h-[40px] !text-gray-800 placeholder:!text-gray-400 hover:!border-gray-300 focus:!border-[var(--color-primary-border)]  !rounded-[12px] custom-text-style-search shadow-sm"
        type="search"
        placeholder={placeholder}
        allowClear
        suffix={<SearchIcon className="text-gray-400" />}
      />
    </div>
  );
};

export default SearchBar;
