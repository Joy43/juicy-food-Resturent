import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer:
        "We are open from Monday to Saturday, 9:00 AM to 10:00 PM, and on Sundays from 11:00 AM to 8:00 PM.",
    },
    {
      question: "Do you offer vegetarian options?",
      answer:
        "Yes, we have a variety of vegetarian dishes available on our menu. Please ask our staff for recommendations.",
    },
    {
      question: "Do you provide gluten-free options?",
      answer:
        "Certainly! We offer several gluten-free options for customers with dietary restrictions. Just let us know your preferences when ordering.",
    },
    {
      question: "Can I make a reservation?",
      answer:
        "Yes, we encourage our customers to make reservations, especially during peak hours. You can make a reservation by calling us or using our online booking system.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div>
      <SectionTitle
        subHeading="Question And Answer"
        heading={"FAQ"}
      ></SectionTitle>
      <div className="flex justify-center">
        <div className="max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                <span>0{idx + 1}</span>
              </div>
              <div className="w-10 h-[2px] bg-[#151f3f] relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                <span className="bg-[#355E72] w-10 h-1"></span>
              </div>
              <div>
                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                  <h1 className="text-[#355E72] text-xl text-center">
                    {faq.question}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
