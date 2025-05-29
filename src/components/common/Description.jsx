
export default function Description({text,link,type="under",className, onClick}) {

  return (
    <p className={`${className}`}>
      {text && (<span>{text}</span>)}
      {link && (<span onClick={onClick} className={`ml-2 font-inter font-semibold text-sm leading-[150%] text-center text-[#3722D3] ${type=='under' ? "underline" : "no-underline"}`}>{link}</span>)}
    </p>
  )
}
