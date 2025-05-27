import React, { useState } from "react";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
    name: "Kyle Merwin",
    title: "CO-owner",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Learning+ helped me achieve my goals. The courses are well structured and the instructors are amazing!",
    name: "Jane Doe",
    title: "Designer",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "A fantastic platform for anyone looking to upskill. Highly recommended!",
    name: "John Smith",
    title: "Developer",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <div className="w-full flex flex-col items-center my-12">
      <h2 className="text-black text-center text-4xl md:text-[48px] font-bold mb-2" style={{ fontFamily: "Fjalla One" }}>
        Why Students Love Learning+
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        Whether it's a first brush on canvas or the last frame in an animation, Learning+ is here to support you on every step of your creative journey.
      </p>
      <div className="relative bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center max-w-2xl w-full mx-auto p-8 mb-6">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-40 h-40 rounded-lg object-cover mr-0 md:mr-8 mb-6 md:mb-0"
        />
        <div className="flex-1">
          <div className="text-3xl text-blue-500 mb-2">"</div>
          <p className="text-gray-800 mb-4">{testimonials[current].text}</p>
          <div className="font-bold">{testimonials[current].name}</div>
          <div className="text-gray-500 text-sm">{testimonials[current].title}</div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={prev} className="text-2xl text-green-500 hover:text-green-700">&lt;</button>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-green-400" : "bg-gray-300"} inline-block`}
            style={{ transition: "background 0.3s" }}
          />
        ))}
        <button onClick={next} className="text-2xl text-green-500 hover:text-green-700">&gt;</button>
      </div>
    </div>
  );
} 