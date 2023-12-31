import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted");
          const remaining = coffees.filter((cof) => cof._id !== _id);
          setCoffees(remaining);
        }
      });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">details</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-primary">update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-danger"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
