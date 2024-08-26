import { Link } from "react-router-dom";
import { Navigator } from "../Navigator/Navigator";
import "./Works.sass";
import { ImageSlider } from "./ImageSlider";
import { projects } from "../../json/projects.data";
import React from "react";
import { animateWorks } from "../animations/works.animation";

interface Props {
  id: number;
  title: string;
  description: string;
  httpsWeb: string;
  resources: string;
  img: string[];
}

const FunctionStruct = (prop: Props) => {
  return (
    <>
      <div className="number">0{prop.id}</div>
      <div className="content">
        <h1 className="title-project">{prop.title}</h1>
        <p className="description-project">{prop.description}</p>
        <div className="links__web">
          <p className="web-site">
            [<Link to={prop.httpsWeb}>Посетить сайт</Link>]
          </p>
          <p className="web-resources">
            [<Link to={prop.resources}>Архитектура сайта</Link>]
          </p>
        </div>
      </div>
      <div className="inner">
        <ImageSlider {...prop} />
      </div>
    </>
  );
};

export const Works = () => {
  const project_sport = projects.find((p) => p.id === 1);
  const project_starbucks = projects.find((p) => p.id === 2);
  const project_fte = projects.find((p) => p.id === 3);

  if (project_sport == undefined) return;
  if (project_starbucks == undefined) return;
  if (project_fte == undefined) return;

  React.useEffect(() => {
    animateWorks();
  }, []);

  return (
    <>
      <Navigator />

      <div id="works">
        <div className="slider-all">
          {/* sport-web */}
          <section>
            <FunctionStruct {...project_sport} />
          </section>
          {/* starbucks */}
          <section>
            <FunctionStruct {...project_starbucks} />
          </section>
          {/* fte */}
          <section>
            <FunctionStruct {...project_fte} />
          </section>
        </div>
      </div>
    </>
  );
};
