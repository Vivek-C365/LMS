import { CalendarDays, Clock, Ellipsis } from "lucide-react";
import DropDown from "./DropDown";

const CustomTable = ({ data }) => {
  const items = [
    {
      key: "update",
      label: "Update",
    },
    {
      key: "delete",
      label: "Delete",
      danger: true,
    },
  ];

  const handleMenuClick = (key) => {
    console.log(`Selected ${key} for ${data.name}`);
  };

  const getLevelStyles = (level) => {
    const styles = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800",
    };
    return styles[level] || styles.Beginner;
  };

  const renderInfo = (isMobile = false) => (
    <div className={`flex items-center ${isMobile ? "mb-3" : ""}`}>
      <div
        className={`${
          isMobile ? "h-12 w-12" : "h-10 w-10"
        } rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold ${
          !isMobile && "mr-3"
        }`}
      >
        {data.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className={!isMobile && "ml-4"}>
        <h3
          className={`${
            isMobile ? "text-lg" : "text-sm"
          } font-medium text-gray-900`}
        >
          {data.name}
        </h3>
        <p className={`${isMobile ? "text-sm" : "text-xs"} text-gray-500`}>
          {data.role}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#ECEEE6] shadow overflow-hidden md:rounded-full transition-all duration-200 hover:shadow-lg relative">
      {/* Mobile view */}
      <div className="md:hidden p-4">
        <div className="flex items-center justify-between">
          {renderInfo(true)}
          <DropDown
            items={items}
            onSelect={handleMenuClick}
            showArrow={false}
            triggerContent={
              <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
                <Ellipsis className="h-5 w-5 text-gray-500" />
              </button>
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase">
              Lesson
            </p>
            <p className="text-sm font-medium">{data.lesson}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase">Level</p>
            <p className="text-sm font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${getLevelStyles(
                  data.level
                )}`}
              >
                {data.level}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays color="#4b4949" size={15} />
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase">
                Date
              </p>
              <p className="text-sm font-medium">{data.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock color="#4b4949" size={15} />
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase">
                Time
              </p>
              <p className="text-sm font-medium">{data.time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr_1fr_40px] gap-2 p-2 items-center bg-[#ECEEE6] relative">
        {renderInfo()}
        <div className="text-sm text-[#191819] col-span-1">{data.lesson}</div>
        <div className="col-span-1">
          <span
            className={`px-2 py-1 rounded-full text-xs ${getLevelStyles(
              data.level
            )}`}
          >
            {data.level}
          </span>
        </div>
        <div className="text-sm text-[#191819] flex gap-2 items-center col-span-1">
          <CalendarDays color="#4b4949" size={15} />
          <span>{data.date}</span>
        </div>
        <div className="text-sm text-[#191819] flex gap-2 items-center col-span-1">
          <Clock color="#4b4949" size={15} />
          <span>{data.time}</span>
        </div>
        <div className="flex col-span-1 pr-2">
          <DropDown
            items={items}
            onSelect={handleMenuClick}
            showArrow={false}
            triggerContent={
              <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
                <Ellipsis className="h-5 w-5 text-gray-500" />
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
