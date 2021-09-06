import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import reach from "./pictures/reach.jpg";
import laptop from "./pictures/laptop-336373_1024.jpg";
import meeting from "./pictures/meeting-1245776_1024.jpg";
import people from "./pictures/people-1979261_1024.jpg";
import startup from "./pictures/startup-593341_1024.jpg";

import { itemsData } from "./data/items.js";
import optionsData from "./data/options.json";

import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [animated, setAnimated] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(1000000);
  const [imageTranslation, setImageTranslation] = React.useState({});
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  let carouselPrevBtn = () => {
    updateTranslations(clickCount - 1);
  };

  let carouselNextBtn = () => {
    updateTranslations(clickCount + 1);
  };

  let updateTranslations = (clicks) => {
    setClickCount(clicks);
    setImageTranslation({
      transform: "translateX(" + -(clicks % 4) * 100 + "%)",
    });
  };

  let handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  let handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <div className="wrap">
        <header id="intro">
          <div className="logo">T</div>
          <div onClick={handleSidebarOpen} className="snackbar">
            =
          </div>
        </header>
        <section className="intro">
          <img
            id="intro-img"
            src={reach}
            width="1920"
            height="auto"
            alt="reach"
          />
          <p className="title">Reach Your Goals In a Few Months</p>
        </section>
        <section id="why-us" className="why">
          <p className="why-us">Why us?</p>
          <div className="because">
            <p className="symbol">🏆</p>
            <p className="desc">Lorem ipsum dolor sit.</p>
          </div>
          <div className="because">
            <p className="symbol">🥇</p>
            <p className="desc">Mauris dapibus augue at rutrum facilisis.</p>
          </div>
          <div className="because">
            <p className="symbol">💎</p>
            <p className="desc">Aenean egestas purus id.</p>
          </div>
          <div className="because">
            <p className="symbol">🎀</p>
            <p className="desc">Etiam tristique nunc.</p>
          </div>
          <div className="because">
            <p className="symbol">🔔</p>
            <p className="desc">Fusce tincidunt odio metus.</p>
          </div>
          <div className="because">
            <p className="symbol">🔑</p>
            <p className="desc">Nulla tincidunt dolor.</p>
          </div>
          <div className="because">
            <p className="symbol">💰</p>
            <p className="desc">Nunc eu hendrerit ex.</p>
          </div>
        </section>
        <section id="decision" className="decision">
          <p className="title">It's your decision</p>
          <div className="example">
            <p className="subtitle">Lorem</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque at commodi quae molestiae, nemo dicta iure vel in voluptates
              sapiente voluptas nobis tempora, id ut.
            </p>
          </div>
          <div className="example">
            <p className="subtitle">Dicta</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque at commodi quae molestiae, nemo dicta iure vel in voluptates
              sapiente voluptas nobis tempora, id ut.
            </p>
          </div>
          <div className="example">
            <p className="subtitle">Sit</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque at commodi quae molestiae, nemo dicta iure vel in voluptates
              sapiente voluptas nobis tempora, id ut.
            </p>
          </div>
          <div className="example">
            <p className="subtitle">Ipsum dolor</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque at commodi quae molestiae, nemo dicta iure vel in voluptates
              sapiente voluptas nobis tempora, id ut.
            </p>
          </div>
        </section>

        <section id="our-options" className="results">
          <VisibilitySensor
            onChange={() => {
              if (count === 0) {
                setCount(1);
                setAnimated(true);
              }
            }}
          ></VisibilitySensor>
          <p className="title">Know our options</p>
          {itemsData?.map((i, index) => (
            <div className={"card " + (animated ? "seen" : "")} key={index}>
              <img
                className="card-img"
                src={i.img.default}
                width="150"
                height="150"
                alt=""
              ></img>
              <p className="card-desc">{i.text}</p>
              <p className="sign">{i.optionoption}</p>
            </div>
          ))}
        </section>

        <section id="photos" className="gallery">
          <p className="title">Photo Gallery</p>
          <div className="carousel">
            <div className="screen">
              <div className="film">
                <img
                  src={laptop}
                  width="1024"
                  height="auto"
                  alt="laptop"
                  style={imageTranslation}
                ></img>
                <img
                  src={meeting}
                  width="1024"
                  height="auto"
                  alt="meeting"
                  style={imageTranslation}
                ></img>
                <img
                  src={people}
                  width="1024"
                  height="auto"
                  alt="people"
                  style={imageTranslation}
                ></img>
                <img
                  src={startup}
                  width="1024"
                  height="auto"
                  alt="startup"
                  style={imageTranslation}
                ></img>
              </div>
              <button onClick={carouselPrevBtn} id="prev">
                {"<"}
              </button>
              <button onClick={carouselNextBtn} id="next">
                {">"}
              </button>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing">
          {optionsData?.items?.map((o, index) => (
            <div className="option" key={index}>
              <p className="title">{o.title}</p>
              <p className="price">${o.price}</p>
              <p className="sub-price">per {o.subPrice}</p>
              <p className="perk">{o.perk1}</p>
              <p className="perk">{o.perk2}</p>
              <p className="perk">{o.perk3}</p>
              <button className="book">Book now</button>
            </div>
          ))}
        </section>
        <section id="contact" className="contact">
          <div>
            <p className="title">Contact</p>
            <p className="text">Email: email@email.com</p>
            <p className="text">Phone: +40 123 123 123</p>
          </div>
          <div>
            <p className="title">Address</p>
            <p className="text">99 Street Name</p>
            <p className="text">City, State, Zip-Code</p>
          </div>
        </section>
      </div>
      <div id="menu" className={"right-menu " + (sidebarOpen ? "active" : "")}>
        <p onClick={handleSidebarClose} className="exit">
          x
        </p>
        <p>
          <a href="#intro">Intro</a>
        </p>
        <p>
          <a href="#why-us">Why us?</a>
        </p>
        <p>
          <a href="#decision">Decision</a>
        </p>
        <p>
          <a href="#our-options">Our options</a>
        </p>
        <p>
          <a href="#photos">Photo gallery</a>
        </p>
        <p>
          <a href="#pricing">Pricing</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
}

export default App;
