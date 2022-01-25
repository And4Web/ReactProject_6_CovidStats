import React, { useState, useEffect } from "react";
import axios from "axios";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";

export default function Main() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res.data.Countries);
        setCovidData(res.data.Countries);
      })
      .catch((err) => console.log(err));
    $(document).ready(() => {
      $("#myTable").DataTable();
    });
  }, []);

  const tableData = covidData.map((obj) => {
    return (
      <tr>
        <td>{obj.Country}</td>
        <td>{obj.TotalConfirmed}</td>
        <td>{obj.TotalConfirmed - obj.TotalRecovered}</td>
        <td>{obj.TotalRecovered}</td>
        <td>{obj.TotalDeaths}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Covid Tracker</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table id="myTable" className="table table-secondary">
            <thead>
              <tr>
                <th>Country</th>
                <th>Total Cases</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
