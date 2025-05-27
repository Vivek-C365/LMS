import React from 'react'

export default function Line({ text }) {
  if(text==null) return <span className="w-full h-[1px] bg-[#E0E0E0] items-center mt-1"></span>;

  return (
    <p className="w-full flex flex-row items-center gap-2 mt-1 mb-1">
      <span className="w-full h-[1px] bg-[#E0E0E0]"></span>
      <span className="text-center">{text}</span>
      <span className="w-full h-[1px] bg-[#E0E0E0]"></span>
    </p>
  )
}
