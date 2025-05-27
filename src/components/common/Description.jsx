

export default function Description({text,link, className}) {
  return (
    <p className={`${className}`}>
      {text && (<span>{text}</span>)}
      {link && (<span className="ml-2 font-inter font-semibold text-sm leading-[150%] text-center underline underline-offset-0 decoration-solid text-[#3722D3]">{link}</span>)}
    </p>
  )
}
