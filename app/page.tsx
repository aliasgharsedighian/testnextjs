import React from "react";
import Link from "next/link";
import { SampleDesignData } from "../pages/api/SampleDesignData";
import "../styles/SampleDesign.css";

function HomePage() {
  return (
    <section className="sample-container ">
      <div className="sample-title">
        <span className=""></span>
        <h5>Sample convert figma Design</h5>
        <span className=""></span>
      </div>
      <div className="samples">
        {SampleDesignData.map((sample) => {
          return (
            <div key={sample.id} className="sample-area">
              <div className="sample-img">
                <Link href={sample.link}>
                  <img src={sample.img} alt="" />
                </Link>
              </div>
              <div className="sample-text">
                <Link href={sample.link}>
                  <p>{sample.title}</p>
                </Link>
                <span>{sample.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
