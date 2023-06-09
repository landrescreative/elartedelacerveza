import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  color: #f6f0da;

  .contenedor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .services-header {
    height: 20%;
    background: linear-gradient(
      to right,
      #c89663 20%,
      #f3eee8 50%,
      #c89663 80%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .services-services {
    .services-card {
      margin: 10px 10px;

      button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #feaa29;
        border: none;
      }

      @media (max-width: 1024px) {
        text-align: center;
      }
    }
  }

  .img {
    height: 100%;
    background-color: transparent;

    @media (max-width: 1024px) {
      height: 500px;
    }
  }
`;

export default function Services() {
  const app = useRef();

  useLayoutEffect(() => {
    var ctx = gsap.context(() => {
      gsap.from(".services-header", {
        duration: 5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".mission-header ",
          start: "top 50%",
          end: "top 10%",
          scrub: 1,
        },
      });
    }, app.current);

    return () => ctx.revert();
  }, []);

  return (
    <Container
      ref={app}
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
    >
      <div className="services-header">
        <h1 className="text-center p-5">Beer in our daily life</h1>
      </div>
      <div className="contenedor">
        <div className="services-services row">
          <div className="col-md-5">
            <div className="services-card">
              <h2>Add beer to your daily life</h2>
              <p>
                Get to know unique recipes to implement beer into your daily
                life and enjoy its benefits in a controlled and healthy way.
              </p>
              <button>RECIPES</button>
            </div>

            <div className="services-card">
              <h2>Enjoy its flavor correctly</h2>
              <p>
                Check out our collection of our favorite cocktails to give a
                unique style and flavor to beer in a way that is accessible to
                everyone.
              </p>
              <button>COCKTAILS</button>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
