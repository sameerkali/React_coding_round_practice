import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";

export default function ContactMenu() {
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

    // i know this is very ensecure practice but it is currently in test mode (aut aapko maa ki kasam bhe hai aap ye keys nahi churaoge , thanks)
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
      })
      .catch(error => {
        console.error("Email sending failed", error);
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
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      {!isSent &&
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${errors.name
                ? "border-red-500"
                : "border-gray-300"} rounded-md shadow-sm`}
              disabled={isLoading}
            />
            {errors.name &&
              <span className="text-red-500 text-sm">
                {errors.name}
              </span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${errors.email
                ? "border-red-500"
                : "border-gray-300"} rounded-md shadow-sm`}
              disabled={isLoading}
            />
            {errors.email &&
              <span className="text-red-500 text-sm">
                {errors.email}
              </span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700"
            >
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Feedback"
              value={formData.feedback}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${errors.feedback
                ? "border-red-500"
                : "border-gray-300"} rounded-md shadow-sm`}
              disabled={isLoading}
            />
            {errors.feedback &&
              <span className="text-red-500 text-sm">
                {errors.feedback}
              </span>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "SENDING..." : "SUBMIT"}
          </button>
        </form>}
      {isSent &&
        <div className="text-center p-4">
          <p className="text-lg font-bold text-green-500">SUCCESS!</p>
          <p>Your feedback has been successfully sent!</p>
          <p>You can safely leave this page.</p>
        </div>}
    </div>
  );
}
