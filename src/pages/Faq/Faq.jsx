import React from "react";
import faqData from "../../store/faqData";
import Card from "../../components/FAQCard/faqCard";
import searchIcon from "../../assets/image/searchIcon.webp";

function Faq() {
  const faqCard = faqData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="grid justify-center text-white p-6 text-center pt-[8%]">
        <p className="text-lg md:text-xl lg:text-2xl text-purple-400 m-4">FAQs</p>
        <p className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
          Have questions? We are here to help.
        </p>
      </div>
      <div className="grid justify-center">
        <div className="inline-flex bg-white shadow-md shadow-slate-600 rounded-xl">
          <img src={searchIcon} alt="search icon" className="p-3 w-12 lg:w-16" />
          <input
            className="w-[50vw] lg:w-[40vw] lg:h-16 rounded-xl p-2"
            label="Search"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex justify-center bg-black ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">{faqCard}</div>
      </div>
    </>
  );
}
export default Faq;

// import Accordion from "./Accordion";
// import "./faq.css";

// import illustration__box from "../../assets/svg/illustration-box-desktop.svg";
// import illustration__woman_desktop from "../../assets/svg/illustration-woman-online-desktop.svg";
// import illustration__woman_mobile from "../../assets/svg/illustration-woman-online-mobile.svg";

// const questionsAnswers = [
//   {
//     question:
//       "How many t-shirt colours are available for selection in this customisation application?",
//     answer:
//       "This customisation application offers a diverse range of t-shirt colours to cater to various styles and moods",
//   },
//   {
//     question:
//       "Can I personalise my t-shirt design by uploading my own logos or images",
//     answer:
//       "Certainly, this application allows for seamless personalisation by enabling the upload of custom logos or images onto the t-shirt design",
//   },
//   {
//     question:
//       "What does the Unsplash integration feature entail and how does it elevate the t-shirt customisation experience?",

//     answer: `The Unsplash integration feature harnesses the power of Unsplash technology, empowering users to generate unique custom images that adorn the t-shirt as logos or complete designs`,
//   },
//   {
//     question:
//       " Is there a functionality to remove logos or images that have been applied to the t-shirt ",

//     answer:
//       "Yes, users have the freedom to effortlessly remove any logos or images that have been applied to the t-shirt by simply clicking the designated remove button.",
//   },
//   {
//     question: " Can I download the final t-shirt design as an image file ",

//     answer:
//       "Absolutely, users can preserve their masterpiece by downloading the completed t-shirt design as an image file.",
//   },

//   {
//     question:
//       " Is there a maximum limit on the number of logos or images that can be uploaded to personalise the t-shirt",

//     answer:
//       " No specific limit is mentioned regarding the number of logos or images that can be uploaded, thus allowing users to personalise their t-shirt with as many as desired.",
//   },

//   {
//     question:
//       " Can I preview the t-shirt design before finalising and downloading it?",

//     answer:
//       "The availability of a preview feature is not specified in the provided information. It is advisable to explore the application to determine if such a feature exists.",
//   },

//   {
//     question:
//       " Are there any restrictions on the file format or size when uploading logos or images",

//     answer:
//       "The information does not mention any restrictions on file format or size. Users can likely upload logos or images in common formats such as JPEG, PNG, or GIF.",
//   },
//   {
//     question:
//       " Does the application offer additional customisation options beyond colour selection and  logo/image upload? ",

//     answer:
//       "Aside from colour selection, logo/image upload, Unsplash integration, removal functionality,and downloading options, no other specific customisation options are mentioned. ",
//   },

//   {
//     question:
//       "Is there a cost associated with using this t-shirt customisation application ",

//     answer:
//       " The pricing details of the application are not specified. It is recommended to visit the application's website or contact their support for information regarding any associated costs ",
//   },
// ];

// const Faq = () => {
//   return (
//     <div className="container">
//       <div className="component">
//         <div className="illustration">
//           <img
//             src={illustration__box}
//             alt="illustration with box"
//             className="illustration__box"
//           />

//           <img
//             className="illustration__woman-desktop"
//             src={illustration__woman_desktop}
//             alt="illustration with woman"
//           />
//           <img
//             className="illustration__woman-mobile"
//             src={illustration__woman_mobile}
//             alt="illustration with woman"
//           />
//         </div>
//         <Accordion questionsAnswers={questionsAnswers} />
//       </div>
//     </div>
//   );
// };

// export default Faq;
