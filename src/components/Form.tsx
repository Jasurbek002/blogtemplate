import { useState, BaseSyntheticEvent } from "react";
import { IoSend } from "../constants";
import { sendForm } from "emailjs-com";
import { initialDetails } from "../utils/form";
import { error, success } from "../utils/toast";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

export default function Form() {
  const [values, setValues] = useState(initialDetails);
  const [text, setText] = useState("Send");

  const sendMessage = async (
    e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !(
        values.firstName &&
        values.lastName &&
        values.email &&
        values.phone &&
        values.message
      )
    ) {
      return error("Please fill in all the fields");
    }

    try {
      setText("Sending...");

      let { status } = await sendForm(
        `${import.meta.env.VITE_APP_SERVICE_ID}`,
        `${import.meta.env.VITE_APP_TEMPLATE_ID}`,
        e.target,
        `${import.meta.env.VITE_APP_PUBLIC_KEY}`
      );

      if (status === 200) {
        success("Message sent");
      }
    } catch (e) {
      error("Something went wrong");
    } finally {
      setText("Send");
      setValues(initialDetails);
    }
  };

  return (
    <form
      className="w-full mt-10 px-0 sx:px-6 ss:px-0 lg:px-12 xl:px-20"
      onSubmit={sendMessage}
    >
      <div className="flex flex-wrap gap-y-2 justify-between sm:grid-container">
        <motion.label
          variants={fadeIn("right", "spring", 0.7, 1)}
          className="first-input"
        >
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            value={values.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
          />

          <span className="focus-border"></span>
        </motion.label>

        <motion.label
          variants={fadeIn("right", "spring", 0.9, 1)}
          className="last-input"
        >
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={values.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />

          <span className="focus-border"></span>
        </motion.label>

        <motion.input
          variants={fadeIn("right", "spring", 1.1, 1)}
          className="email-input"
          type="email"
          name="email"
          placeholder="Email address"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <motion.input
          variants={fadeIn("left", "spring", 0.7, 1)}
          className="phone-input"
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />

        <motion.textarea
          variants={fadeIn("left", "spring", 1.1, 1)}
          className="area-input w-full"
          rows={4}
          name="message"
          placeholder="Message"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </div>

      <motion.button
        variants={fadeIn("up", "tween", 0.5, 0.5)}
        disabled={text === "Sending..."}
        className="mx-auto bg-main-red border-2 border-[#e93333] hover:bg-main-dark border-none"
      >
        {text}
        <IoSend size={25} />
      </motion.button>
    </form>
  );
}
