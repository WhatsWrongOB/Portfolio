import React, { useState } from "react";
import phone from "/public/phone.svg"; // Image for the phone button
import msg from "/public/msg.svg"; // Image for the email button
import { toast } from "react-hot-toast"; // Library for toast notifications
import ClipLoader from "react-spinners/ClipLoader"; // Spinner component for loading state
import { useCreateMsgMutation } from "../redux/api"; // Hook for creating messages

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [createMsg, { isLoading }] = useCreateMsgMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactMsg = {
        email,
        message,
      };

      const res = await createMsg(contactMsg).unwrap();

      if (res.success) {
        toast.success(res.message);
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error(error?.data.message);
    }
  };

  return (
    <section id="contact">
      <div className="contact_container">
        <h2 className="contact_heading">Contact Me</h2>
        <p className="contact_para">
          <span>
            If you've seen my potential or want to talk to me, don't hesitate to
            send me a message.
          </span>
        </p>
        <div className="contact_btns">
          <button className="emails">
            <img src={msg} alt="email" />
            <p>obaidbro9@gmail.com</p>
          </button>
          <button className="phone">
            <img src={phone} alt="phone" />
            <p>03204872665</p>
          </button>
        </div>
        <h3 className="contact_heading_two">
          Get in touch using the form below
        </h3>
        <form className="contact_form" onSubmit={handleSubmit}>
          <input
            className="cemail"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Type Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit" disabled={isLoading}>
            {isLoading ? (
              <ClipLoader loading={isLoading} size={15} color="white" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
