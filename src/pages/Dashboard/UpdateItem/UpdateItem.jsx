import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxios";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, details, price, _id, locationn, available } =
    useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const updatedDoctor = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        details: data.details,
        available: data.available,
        locationn: data.locationn,
        image: res.data.data.display_url,
      };

      const response = await axiosSecure.patch(`/menu/${_id}`, updatedDoctor);

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated successfully 🩺`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-24 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Update Doctor Info 🩺
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Doctor Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Specialization*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a specialization
                </option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Consultation Fee*
                </span>
              </label>
              <input
                type="number"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Doctor Location*</span>
            </label>
            <input
              type="text"
              defaultValue={locationn}
              {...register("locationn", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">
                Doctor Availability*
              </span>
            </label>
            <input
              type="text"
              defaultValue={available}
              {...register("available", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Doctor Details</span>
            </label>
            <textarea
              defaultValue={details}
              {...register("details")}
              className="textarea textarea-bordered h-24"
              placeholder="Qualifications, experience, etc."
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-medium">Doctor Photo*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn btn-primary text-white w-full md:w-auto px-8">
            Update Doctor 🛠️
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
