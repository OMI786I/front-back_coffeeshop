import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  return (
    <div>
      <h1 className="text-4xl text-purple-600">Coffee {coffees.length}</h1>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      ))}
    </div>
  );
}

export default App;
