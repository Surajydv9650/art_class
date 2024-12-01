import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Art_Area.css';

const Art_area = () => {
  return (
    <section>
      <div className="container pt-4 position-relative zindex-100">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="text-white mt-4">All the things you need in an Art Class</h2>
            <div className="mt-2">
              <p className="lead lh-180 text-white">
                Thousands of Students around the world have already made a quick decision to take a dip into our classes.
              </p>
            </div>
          </div>
        </div>

        <div className="row mx-lg-n4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6 px-lg-4 square" key={index}>
              <Link to={`/art_class${feature.link}`} className="card-link">
                <div className="card">
                  <div className="p-3 d-flex">
                    <div>
                      <div className={`icon icon-shape rounded-circle bg-${feature.bgColor} text-white mr-4`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">{feature.title}</span>
                      <p className="text-sm text-muted mb-0">Art is a lie that makes us realize truth.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="featurette-divider" />
    </section>
  );
};

// Update the routes in the features array to include the '/art_class' path
const features = [
  { title: "Painting", bgColor: "warning", link: "/painting" },
  { title: "Landscapes", bgColor: "primary", link: "/landscapes" },
  { title: "Paper Craft", bgColor: "danger", link: "/paper_craft" },
  { title: "Clay Work", bgColor: "success", link: "/clay" },
  { title: "Ceramic Work", bgColor: "info", link: "/ceremic" },
  { title: "Glass Painting", bgColor: "warning", link: "/glass" },
  { title: "Fabric Paint", bgColor: "info", link: "/textile" },
  { title: "Best Out of Waste", bgColor: "primary", link: "/waste" },
];

export default Art_area;
