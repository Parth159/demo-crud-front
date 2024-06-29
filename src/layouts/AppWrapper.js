import React from 'react'
import {useEffect, useState} from "react";
import Navbar from "components/_common/Navbar";
import Header from "components/_common/Header";
import Footer from "components/_common/Footer";
export default function AppWrapper(props) {
  const [loading, setLoading] = useState(false);
    return (
      <>
        <Header />
        <Navbar />
        <div className="container mb-5 mt-5 py-3">
          {props.children}
        </div>
        <Footer />
      </>
    )
}
