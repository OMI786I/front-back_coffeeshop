import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //send data to the server
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          const Swal = require("sweetalert2");
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
      <h2>Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
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
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="input input-bordered btn btn-primary w-[100%]"
                name="submit"
                value="Add Coffee"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
