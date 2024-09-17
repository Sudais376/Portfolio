import React from "react";

const Contact = () => {

  return (
    <>
    <div className='flex justify-center mt-4'>
        <img className='h-projectsImageHeight w-projectsImageWidth object-cover' src="/Contact.png"  alt="" />
        </div>
      <div className="py-12 bg-primaryBg max-w-maxOverallWidth mx-auto">
        <div className="m-4">
          <h1 className="text-headingAndButtonTextColor text-2xl md:text-4xl font-semibold md:font-bold text-center pb-6">Contact Us</h1>
          <div className="flex justify-center items-center my-6">
            <form className="flex flex-col bg-navBg w-formWidth px-6 rounded-lg" action="">
              <label className="py-2 text-lg text-paragraphsTextColor" htmlFor="name">Name:</label>
              <input className="border border-black py-2 rounded-md px-2" type="text" id="name" name="name" required />

              <label className="py-2 text-lg text-paragraphsTextColor" htmlFor="email">Email:</label>
              <input className="border border-black py-2 rounded-md px-2" type="email" id="email" name="email" required />

              <label className="py-2 text-lg text-paragraphsTextColor" htmlFor="subject">Subject:</label>
              <input className="border border-black py-2 rounded-md px-2" type="text" id="subject" defaultValue="What is your message about?" name="subject" />

              <label className="pb-2 text-lg text-paragraphsTextColor" htmlFor="message">Message:</label>
              <textarea className="border border-black rounded-md px-2 py-2"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button className="bg-navButtonBg text-lg font-bold my-2 py-2 rounded-md hover:bg-navButtonHoverBg" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
