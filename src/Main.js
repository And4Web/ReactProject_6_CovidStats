import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <h1>CovidStats in Main</h1>;
}
