import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //send data to the server
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success",
            text: "user added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2>Update Coffee {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/**name and quantity  row */}
        <div className="bg-red-400">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="coffee name"
                  className="input input-bordered"
                  name="name"
                  defaultValue={name}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <span>Quantity</span>
                <input
                  type="number"
                  placeholder="number"
                  className="input input-bordered"
                  name="quantity"
                  defaultValue={quantity}
                />
              </label>
            </div>
          </div>

          {/**supplier test */}
          <div className="flex gap-2justify-center">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="supplier name"
                    className="input input-bordered"
                    name="supplier"
                    defaultValue={supplier}
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <span>Taste</span>
                  <input
                    type="text"
                    placeholder="taste"
                    className="input input-bordered"
                    name="taste"
                    defaultValue={taste}
                  />
                </label>
              </div>
            </div>
          </div>
          {/**category and details row*/}
          <div className="flex gap-2justify-center">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <span>category</span>
                  <input
                    type="text"
                    placeholder="coffee name"
                    className="input input-bordered"
                    name="category"
                    defaultValue={category}
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">details</span>
                </label>
                <label className="input-group">
                  <span>details</span>
                  <input
                    type="text"
                    placeholder="details"
                    className="input input-bordered"
                    name="details"
                    defaultValue={details}
                  />
                </label>
              </div>
            </div>
          </div>
          {/*photo url*/}
          <div className="">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <label className="input-group">
                  <span>photo</span>
                  <input
                    type="text"
                    placeholder="coffee name"
                    className="input input-bordered"
                    name="photo"
                    defaultValue={photo}
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="input input-bordered btn btn-primary w-[100%]"
                name="submit"
                value="Update"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
