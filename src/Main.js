import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Covid Tracker</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-primary">
            <thead>
              <tr>
                <th>Country</th>
                <th>Total Cases</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
