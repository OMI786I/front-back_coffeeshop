import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl text-purple-600">Coffee {coffees.length}</h1>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
}

export default App;
