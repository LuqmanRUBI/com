
import React from "react";
import Slider from "react-slick";

const faqData = [
  {
    id: 1,
    question: "How Much Will It Cost for ProShule?",
    answer: "The cost depends on various factors .",
  },
  {
    id: 2,
    question: "How much can it cost?",
    answer: "Thimit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.",
  },
  {
    id: 3,
    question: "How Do I Associate With  ProShule Webisite?",
    answer: "You can associate with us by reaching out through our contact form or directly emailing us at contact@itcompany.com.",
  },
  {
    id: 4,
    question: "Can You Help My Current Site Look More Professional?",
    answer: "Yes, we can help redesign your current site to make it look more professional and aligned with your brand identity.",
  },
  {
    id: 5,
    question: "When Do I Pay?",
    answer: "Payment terms are usually discussed and agreed upon before starting the project. We typically require a deposit upfront and the balance upon completion.",
  },
];

const FAQ = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="py-10">
      <div className="container">
        {/* FAQ section */}
        <div data-aos="fade-up" className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
          <Slider {...settings}>
            {faqData.map(({ id, question, answer }) => (
              <div key={id} className="my-6">
                {/* card */}
                <div className="flex flex-col gap-5 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                  <div className="space-y-4">
                    <h1 className="text-xl font-bold">{question}</h1>
                    <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                      {answer}
                    </p>
                  </div>
                  <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                    ?
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
