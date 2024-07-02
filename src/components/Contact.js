import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex h-full w-full item-center justify-center">
      <div className="w-3/4 border-2 border-black flex flex-col items-center justify-center p-4">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Name" required className="border-2" />
          <input
            type="email"
            placeholder="Email"
            required
            className="border-2"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="border-2"
          ></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting FoodFire, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
