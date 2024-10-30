import React from 'react';

function Form() {
  return (
    <div className="w-full md:w-[35%] h-full flex items-center">
      <form className="h-full w-full">
        <div className="flex flex-col gap-2 bg-[#0a2b38] rounded-[50px] px-[80px] py-[75px] h-full justify-between">
          <h2 className="text-3xl text-white">Get In Touch</h2>
          <input
            type="text"
            placeholder="Nom"
            className="p-4 border border-gray-300 rounded-[15px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-300 rounded-[15px]"
          />
          <textarea
            placeholder="Message"
            className="p-4 border border-gray-300 rounded-[15px]"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="p-4 bg-blue-500 text-white rounded-[15px]"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
