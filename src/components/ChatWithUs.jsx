import React from 'react';

const ChatWithUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Chat With Us</h1>
      <p>Here is how you can chat with us...</p>
      <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value=""
            onChange={"yes"}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded-md">Send Message</button>
    </div>
    
  );
};

export default ChatWithUs;
