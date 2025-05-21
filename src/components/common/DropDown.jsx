import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDown = ({
  items,
  triggerContent = "Dropdown",
  onSelect,
  showArrow = true,
  ...props
}) => (
  <Dropdown
    className={props.className}
    menu={{
      items,
      onClick: ({ key }) => {
        if (onSelect) onSelect(key);
      },
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {triggerContent}
        {showArrow && <DownOutlined />}
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;
