import { ArrowLeft, ArrowRight } from "lucide-react";
import "./ImageSlider.sass";
import React from "react";

interface Props {
  id: number;
  title: string;
  description: string;
  httpsWeb: string;
  resources: string;
  img: string[];
}
export const ImageSlider = (props: Props) => {
  const [imgIndex, setImgIndex] = React.useState(0);

  const nextSlide = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % props.img.length);
    console.log("clicked");
  };

  const prevSlide = () => {
    setImgIndex(
      (prevIndex) => (prevIndex - 1 + props.img.length) % props.img.length
    );
  };

  return (
    <>
      <img
        src={props.img[imgIndex]}
        className={props.id === 3 ? "mobile__fte" : ""}
        alt=""
      />
      <div className="btn-slider">
        <div className="left-btn-slider" onClick={prevSlide}>
          <ArrowLeft color="#ffffff" strokeWidth={1.5} />
        </div>
        <div className="right-btn-slider" onClick={nextSlide}>
          <ArrowRight color="#ffffff" strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};
