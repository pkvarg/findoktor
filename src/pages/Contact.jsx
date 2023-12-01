import React, { useState } from 'react';
import CalcNavbar from '../components/calculator/CalcNavbar';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Footer } from '../components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE;
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO;
  const [passwordGroupOne, setPasswordGroupOne] = useState(x);
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y);

  console.log(name, email, phone, message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('subbbbb');
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Nastala chyba.');
    }
    try {
      console.log('..email is sending..');
      const { data } = await axios.put(
        `https://api.pictusweb.com/api/md/contact`,
        // `http://localhost:2000/api/md/contact`,
        {
          name,
          email,
          phone,
          message,
        },
      );

      if (data.status === 'Success') toast.success('Správa úspešne odoslaná');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="relative grid h-[99vh] grid-rows-3 lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 h-[100%] flex-1">
        <h1 className="-mt-[40%] text-center text-[30px] font-bold text-[#0376b7] lg:-mt-[12.5%] 2xl:-mt-[8%]">
          Kontaktujte ma
        </h1>
        <div className="mx-4 mt-2 bg-white lg:mx-[32.5%] lg:mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Meno
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px]"
                required="required"
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Email
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px]"
                required="required"
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Telefón
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px]"
                required="required"
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Vaša správa
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-[100px] border border-gray-300 pl-[5px] lg:h-[130px]"
                rows="10"
              ></textarea>
            </div>
            <div className="mt-4 flex flex-row items-center gap-4 lg:gap-2">
              <input type="checkbox" required="required" />
              <p className="text-[15px] leading-[15px]">
                Pred odoslaním musíte súhlasiť so spracovaním osobných údajov
              </p>
            </div>

            <input
              className="form-control"
              type="text"
              defaultValue={passwordGroupOne}
              onChange={(e) => setPasswordGroupOne(e.target.value)}
            />
            <input
              className="form-control"
              type="text"
              defaultValue={passwordGroupTwo}
              onChange={(e) => setPasswordGroupTwo(e.target.value)}
            />

            <button
              type="submit"
              className="mt-4 w-[100%] bg-[#0376b7] py-3 text-white hover:border hover:border-[#0376b7] hover:bg-white hover:text-[#0376b7] lg:mt-4 lg:w-[30%]"
            >
              Odoslať
            </button>
          </form>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
