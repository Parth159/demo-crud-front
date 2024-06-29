import React from "react";
import Spinner from "assets/images/svg/preloader.svg";

export function PreloaderComponent() {
  
    return (
      <section
        style={{
          height: "100vh",
          width: "100%",
          margin: "0 auto",
          padding: "40vh",
          display: "flex"
        }}
      >
        <img
          style={{
            height: "100px",
            width: "100px",
            margin: "0 auto"
          }}
          src={Spinner}
          alt="Loading"
          draggable={false}
        />
      </section>
    );
}
