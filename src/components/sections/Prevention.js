import React from "react";
import SVGMaskGirl1 from "../../images/svg/Mask Girl 1.svg";
import SVGMaskGirl2 from "../../images/svg/Mask Girl 2.svg";
import SVGMaskGirl3 from "../../images/svg/Mask Girl 3.svg";
import SVGMaskGirl4 from "../../images/svg/Mask Girl 4.svg";
import Path1471 from "../../images/svg/path1471.svg";
import Path1470 from "../../images/svg/path1470.svg";

const Section = ({ num, alter, title, image, paragraph }) => {
  const img = <img key={num} className="w-2/4 hidden lg:block" src={image} />;
  const content = (
    <div key={title} className="flex lg:mt-0 mt-10">
      <span className="flex font-heading -mt-4 mr-6 text-5xl h-20 w-20 rounded-full justify-center items-center bg-primary text-primary bg-opacity-20">
        0{num}
      </span>
      <div>
        <p className="text-secondary font-medium text-5xl">{title}</p>
        <p className="text-2xl w-42rem mb-12 mt-10 leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center lg:flex-row flex-col lg:justify-between container items-center">
      <img key={num} className="w-2/4 mt-10 block lg:hidden" src={image} />
      {alter ? [content, img] : [img, content]}
    </div>
  );
};

const Prevention = () => {
  const sections = [
    {
      title: "Wear masks",
      image: SVGMaskGirl1,
      paragraph:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    },
    {
      title: "Wash Your Hands",
      image: SVGMaskGirl2,
      paragraph:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals ',
    },
    {
      title: "Use nose -  rag",
      image: SVGMaskGirl3,
      paragraph:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    },
    {
      title: "Avoid contacts",
      image: SVGMaskGirl4,
      paragraph:
        "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic",
    },
  ];

  return (
    <div id="prevention" className="container mt-16 relative">
      <div className="lg:px-0 px-16 flex flex-col justify-center items-center">
        <p className="text-primary font-heading text-4xl">Covid-19</p>
        <p className="text-secondary font-heading mt-5 text-5xl">
          What should we do
        </p>
        <p className="text-3xl w-56rem text-center mb-12 mt-10 leading-relaxed">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused
        </p>
      </div>
      <img
        src={Path1471}
        style={{ top: "50rem" }}
        className="absolute w-80 -left-96 -z-1"
      />
      <img
        src={Path1471}
        style={{ bottom: "50rem" }}
        className="absolute w-40 -right-48 -z-1"
      />
      <img
        src={Path1470}
        style={{ bottom: "20rem" }}
        className="absolute w-96 -right-96 -z-1"
      />
      {sections.map((section, i) => (
        <Section
          key={i}
          alter={i % 2 === 0}
          num={i + 1}
          title={section.title}
          paragraph={section.paragraph}
          image={section.image}
        />
      ))}
    </div>
  );
};

export default Prevention;
