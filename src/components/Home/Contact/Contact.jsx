import { useForm } from 'react-hook-form';
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.dateTime,
    };

    axiosPublic.post('/userRequest', user)
      .then(res => {
        if (res.data.insertedId) {
          reset(); // Reset the form
          Swal.fire({
            icon: "success",
            title: "Submission Successful!",
            text: "Your review has been submitted.",
          });
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <div className="lg:mx-20 my-20 bg-[#07332F] text-black p-10 rounded-xl lg:flex justify-between">
      <div className="mt-10 text-white">
        <h3 className="text-4xl font-bold">Contact With Us</h3>
        <p className="text-sm lg:w-[400px] py-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>
        <div className="flex">
          <span>
            <FaPhone />
          </span>
          <p className="text-sm ml-2">+88 01750 14 14 14</p>
        </div>
        <div className="flex">
          <span className="mt-1 text-xl">
            <MdLocationPin />
          </span>
          <p className="text-sm ml-2 mt-1">Dhanmondi, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2 p-4">
        <h3 className="text-3xl font-bold my-3 text-center text-white">Send Us a Message</h3>
        <p className="text-sm text-gray-300 mb-4">
          Please fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              {...register('phone', { required: true })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="datetime-local"
              {...register('dateTime', { required: true })}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
