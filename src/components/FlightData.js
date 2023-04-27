import React, {useEffect, useState} from "react";
import axios from "axios";


function FlightData() {
    const [flightData, setFlightData] = useState([]);
    console.log(flightData);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://opensky-network.org/api/states/all?lamin=46.5&lamax=49.9&lomin=-1.4&lomax=6.8');
        setFlightData(response.data.states);
      };
      fetchData();
    }, []);
  
    const formatFlightState = (flightState) => {
      const airport = flightState[2]; // Extract the airport/country name
      const time = new Date(flightState[3] * 1000).toLocaleTimeString(); // Extract the time and format it
      const arriving = flightState[10] > 0 ? 'Yes' : 'No'; // Check if the flight is arriving or departing based on its ground speed
      const departing = flightState[10] < 0 ? 'Yes' : 'No';
      return `${airport} | ${time} | ${arriving} | ${departing}`; // Concatenate the extracted data into a formatted string
    }
  
    return ( 
        <div className="h-[200px]">
          <h2 className="text-white">Flight Data Information</h2>
          <table className="table">
            <thead>
              <tr>
                <th>AIRPORT</th>
                <th>TIME</th>
                <th>ARRIVING</th>
                <th>DEPARTING</th>
              </tr>
            </thead>
            <tbody>
              {flightData.map((flightState, index) => (
                <tr key={index}>
                  <td>{flightState[2]}</td>
                  <td>{new Date(flightState[3] * 1000).toLocaleTimeString()}</td>
                  <td>{flightState[10] > 0 ? 'Yes' : 'No'}</td>
                  <td>{flightState[10] < 0 ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      
    );
  }
  
  export default FlightData;