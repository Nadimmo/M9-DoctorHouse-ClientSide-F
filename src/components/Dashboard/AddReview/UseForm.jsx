import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios"; // Make sure axios is installed
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UseForm = () => {
  const axiosPublic = useAxiosPublic();
  const hosting_image_key = "ebced42c75e22d67b350b68860e7277c";
  const hosting_image_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const { userName, work, review, image } = data;

    // Create FormData to send image
    const formData = new FormData();
    formData.append("image", image[0]); // Append the uploaded image

    try {
      // Upload image to imgbb
      const imageUploadResponse = await axios.post(
        hosting_image_api,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (imageUploadResponse.data.success) {
        const imageUrl = imageUploadResponse.data.data.url;

        // Prepare the user data object
        const userData = {
          userName,
          work,
          review,
          image: imageUrl, // Use uploaded image URL
        };

        // Convert userData to JSON string
        const jsonString = JSON.stringify(userData);

        // Send user data to your server
        const result = await axiosPublic.post("/reviews", jsonString, {
          headers: { 'Content-Type': 'application/json' }
        });

        if (result.data.success) {
          reset(); // Reset the form
          Swal.fire({
            icon: "success",
            title: "Submission Successful!",
            text: "Your review has been submitted.",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-sky-500 text-black font-bold rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Submit Your Review
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            {...register("userName", { required: "User name is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
        </div>

        {/* Work Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="work">
            Work
          </label>
          <input
            type="text"
            id="work"
            {...register("work", { required: "Work description is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your work"
          />
          {errors.work && <p className="text-red-500">{errors.work.message}</p>}
        </div>

        {/* Review */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            id="review"
            {...register("review", { required: "Review is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review"
            rows="4"
          />
          {errors.review && (
            <p className="text-red-500">{errors.review.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseForm;
