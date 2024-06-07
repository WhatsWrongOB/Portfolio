import React, { useState } from "react";
import phone from "/public/phone.svg";
import msg from "/public/msg.svg";
import { useStore } from "../Context";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { contact } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await contact(email, message);
      if (data.success) {
        toast.success(data.message);
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
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
          <button type="send" className="submit">
            {loading ? (
              <ClipLoader loading={loading} size={15} color="white" />
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
