import axios from "axios";
import Swal from "sweetalert2";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddFeedback = () => {
  const { user } = useAuth();
  const [previewImage, setPreviewImage] = useState("");
  //   console.log(user);

  const [formData, setFormData] = useState({
    emailAddress: user ? user.email : "",
    name: user ? user.displayName : "",
    Rating: "",
    priority: "",

    date: "",
    textarea: "",
    imageUrl: "display_url",
  });

  const handleInputChange = async (e) => {
    const { id, value, files } = e.target;

    // Check if the input is a file input and if a file has been selected
    if (id === "fileUpload" && files.length > 0) {
      const file = files[0];

      // Create a FormData object to send the file to the ImgBB API
      const formData = new FormData();
      formData.append("image", file);
      formData.append("key", image_hosting_key);

      try {
        // Make a POST request to the ImgBB API to upload the image
        const response = await axios.post(image_hosting_api, formData);

        // Extract the image URL from the response
        const imageUrl = response.data.data.url;

        // Update the formData state with the image URL
        setFormData((prevData) => ({
          ...prevData,
          [id]: imageUrl,
        }));

        // You can also set the previewImage state to display the uploaded image
        setPreviewImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      // For other input fields, update the formData state as usual
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://bistro-boss-server-with-cart-part-4.vercel.app/reviewsdb",
        formData
      );

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          submit your Review
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Rating</label>
              <input
                id="Rating"
                type="number"
                placeholder="Rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.Rating}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">priority</label>
              <select
                id="priority"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Good">Good</option>
                <option value="very Nice">very Nice</option>
              </select>
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            {/* -----------text area------- */}
            <div>
              <label className="text-white dark:text-gray-200">Text Area</label>
              <textarea
                id="textarea"
                placeholder="Text Area"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.textarea}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          {/* -----------image upload------- */}
          <div>
            <label className="block text-sm font-medium text-white">
              Image upload
            </label>
            <div className="mt-1 grid justify-center p-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <img className="w-fit h-fit" src={previewImage} alt="" />

                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
                  >
                    <span className="">image upload</span>
                    <input
                      id="fileUpload"
                      name="file-upload"
                      type="file"
                      accept="image/jpeg/png"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-white">PNG, JPG</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className=" px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddFeedback;
