import learning from '../../assets/images/svg/Learning.svg'
import plus from '../../assets/images/svg/Vector.svg'
import DropDown from '../common/DropDown'

export default function Navbar() {

  const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
];
  return (
    <div className="p-3 max-w-[1440px]">
      <div className='flex'>
        <div className='flex gap-2 items-center'>
          <img src={learning} alt="title" />
          <img src={plus} alt="plus" />
        </div>
          <DropDown className={"border-1 rounded-[10px] font-normal p-2.5 text-[var(--color-secondary-text-v2)] text-sm m-4"} items={items} triggerContent='Browse'/>
      </div>
    </div>
  )
}
