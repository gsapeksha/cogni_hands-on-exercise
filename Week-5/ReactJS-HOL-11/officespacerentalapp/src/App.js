import './App.css';
import office from './office.jpg';

function App() {

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 45000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ marginLeft: "60px" }}>

      <h1>Office Space, at Affordable Range</h1>

      <img
        src={office}
        alt="Office Space"
        width="300"
        height="250"
      />

      {
        officeList.map((item, index) => (

          <div key={index} style={{ marginTop: "30px" }}>

            <h2>Name: {item.Name}</h2>

            <h3
              style={{
                color: item.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;