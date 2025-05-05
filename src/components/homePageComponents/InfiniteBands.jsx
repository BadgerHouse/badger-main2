// InfiniteBands.jsx
import React from "react";
import "./InfiniteBands.css";
import "../../App.css";

const departments = [
  {
    title: "3D & Visual Production",
    direction: "left",
    images: [
      "public/projects/haufen-portfolio.png",
      "public/projects/brio-portfolio.png",
      "public/projects/haufen-portfolio.png",
    ],
  },
  {
    title: "Digital Marketing & Software/Game Development",
    direction: "right",
    images: [
      "public/projects/brio-portfolio.png",
      "public/projects/haufen-portfolio.png",
      "public/projects/brio-portfolio.png",
    ],
  },
];

const InfiniteBands = () => {
  return (
    <div className="bands-container">
      <div className="bands-background">
        <img src="/images/badger-portf-2.svg" alt="Background" style={{ width: '100%', height: '%100', objectFit: 'cover' }} />
      </div>
      <h1>İşlerimiz</h1>
      {departments.map((dept, index) => (
        <div className="band-wrapper" key={index}>
          <h3 className="band-title">{dept.title}</h3>
          <div className={`band track-${dept.direction}`}>
            {[...dept.images, ...dept.images].map((img, i) => (
              <div className="band-item" key={i}>
                <img src={img} alt={dept.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteBands;
