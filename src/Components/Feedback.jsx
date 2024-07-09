import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Feedback() {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    feedback: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const { name, email, feedback } = formData;
    const sanitizedData = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      feedback: DOMPurify.sanitize(feedback)
    };

    // i know this is very insecure practice but it is currently in test mode (aut aapko maa ki kasam bhe hai aap ye keys nahi churaoge , thanks)
    const serviceID = "service_if0hb1c";
    const templateID = "template_0lxmkao";
    const userID = "izx7hhiiUs9y637go";

    emailjs
      .send(serviceID, templateID, sanitizedData, userID)
      .then(response => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
        toast.success("Email sent successfully!");
        setTimeout(() => navigate('/'), 2000);
      })
      .catch(error => {
        console.error("Email sending failed", error);
        toast.error("Email sending failed. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, feedback } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!feedback.trim()) {
      errors.feedback = "Feedback is required";
    }

    return errors;
  };

  const isValidEmail = value => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <section className="bwgradient sm:p-10 h-[100vh]">
      <div className="flex gap-1 text-white">
        <Link to={`/`}>
          <p className="underline">Home</p>
        </Link>
        <p> / </p>
        <p>Feedback</p>
      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl h-[3rem] tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Feedback Form
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Help us improve & contribute: navigation, features, content, code,
          Q&A! Let's build something great!
        </p>
        {!isSent && (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white custom-focus ${errors.name
                  ? "border-red-500"
                  : ""}`}
                placeholder="dickdas pussya"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white custom-focus ${errors.email
                  ? "border-red-500"
                  : ""}`}
                placeholder="your@email.co.in"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="6"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white custom-focus ${errors.feedback
                  ? "border-red-500"
                  : ""}`}
                placeholder="Leave a feedback..."
                value={formData.feedback}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              {errors.feedback && (
                <span className="text-red-500 text-sm">
                  {errors.feedback}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secoundry-700 sm:w-fit hover:bg-secoundry-800 focus:ring-4 focus:outline-none focus:ring-secoundry-300 dark:bg-secoundry-600 dark:hover:bg-secoundry-700 dark:focus:ring-secoundry-800 border border-[#324054] custom-focus"
              disabled={isLoading}
            >
              {isLoading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        )}
        {isSent && (
          <div className="text-center p-4">
            <p className="text-lg font-bold text-green-500">SUCCESS!</p>
            <p>Your feedback has been successfully sent!</p>
            <p>You can safely leave this page.</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
}
