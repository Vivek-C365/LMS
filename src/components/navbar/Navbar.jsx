import learning from '../../assets/images/svg/Learning.svg'
import Earth from '../../assets/icons/svg/Earth.svg'
import plus from '../../assets/images/svg/Vector.svg'
import DropDown from '../common/DropDown'
import SearchBar from '../common/SearchBar'
import AuthPage from '../../auth/pages/AuthPage'
// import Button from '../common/button'
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const items = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ]

  // const navigate = useNavigate();
  return (
    <div className="p-3 mx-auto">
      <div className="flex items-center gap-2 justify-between">
        <div className="left-part flex items-center gap-2">
          <div className="flex items-center">
            <img src={learning} alt="title" />
            <img src={plus} alt="plus" className="" />
          </div>
          <div className=" flex items-center">
            <DropDown
              className={
                'border-1 rounded-[10px] font-normal p-2.5 text-[var(--color-secondary-text-v2)] text-sm m-3'
              }
              items={items}
              triggerContent="Browse"
            />
            <SearchBar placeholder="Search classes...." />
          </div>
        </div>

        <div className="flex items-center right-part gap-1  divide-x-2 divide-[#C8C8C8]">
          <div className="items-center flex gap-1">
            <img src={Earth} alt="title" />
            <p className="p-2">En</p>
          </div>

          <div className='flex '>
            <AuthPage />
          </div>
        </div>
      </div>
    </div>
  )
}
