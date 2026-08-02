import React from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "../Button";
import "./Contact.css";
export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <div className="contact">
      {isModalOpen ? (
        <div className="feedback">
          <img className="contact-img" src="/src/img/message.jpg" />
          <div className="feedback-text">
            <p>
              Your message has been sent! Please wait for our response. Have a
              nice day!
            </p>
            <p className="feedback-text-thanks">Thanks!</p>
          </div>

          <button className="btn-delete" onClick={() => setIsModalOpen(false)}>
            <IoIosClose className="delete-icon" />
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <textarea
            className="form-textarea"
            name="message"
            value={formData.message}
            placeholder="Enter your message"
            onChange={handleChange}
            minLength={5}
            required
          />

          <Button>Send Message</Button>
        </form>
      )}
    </div>
  );
}
