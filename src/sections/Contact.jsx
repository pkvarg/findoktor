import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
// import Message from '../components/Message'

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mailMessage, setMailMessage] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((current) => !current);
  };

  const form = useRef();
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE;
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO;
  const [passwordGroupOne, setPasswordGroupOne] = useState(x);
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y);

  const sendEmail = (e) => {
    e.preventDefault();

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Vyskytla sa chyba! Skúste neskôr, prosím.');
      setName('');
      setEmail('');
      setMailMessage('');
      increaseBots();
      const element = document.getElementById('contact');
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER,
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Správa úspešne odoslaná!');
            console.log('message sent');
          },
          (error) => {
            toast.error('Chyba! Kontaktujte nás telefonicky, prosím.');
            console.log(error.text);
          },
        );
      setName('');
      setEmail('');
      setPhone('');
      setMailMessage('');
      const element = document.getElementById('contact');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="five relative bg-[#013bb0] pb-8" id="contact">
        <h1 className="text-center  text-[30px] text-[#007ad6]">KONTAKT</h1>
        <div className="absolute left-[7.5%] top-20">
          <img
            className="w-0 lg:w-[65%]"
            src="hero-squares.webp"
            alt="fd-squares"
          />
        </div>
        <div className="mx-[5%] mt-[15%] flex  flex-col gap-[6%] text-[#007ad6] lg:mx-0 lg:ml-[22.5%] lg:flex-row">
          <div>
            {/* <h1 className='text-[30px] uppercase'>Napíšte nám</h1> */}
            <div className="lg:pt-0">
              <div className="text-[#000000]">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-2 text-[25px] lg:gap-[2.5px]"
                >
                  <label className="form-label my-1  text-[#ffffff]">
                    Meno <sup>*</sup>
                  </label>
                  <input
                    className="form-control rounded-xl pl-2"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="required"
                  />

                  <label className="form-label my-1  text-[#ffffff]">
                    {' '}
                    Telefón <sup>*</sup>
                  </label>
                  <input
                    className="form-control rounded-xl pl-2"
                    type="text"
                    name="user_phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <label className="form-label my-1  text-[#ffffff]">
                    Email <sup>*</sup>
                  </label>
                  <input
                    className="form-control rounded-xl pl-2"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                  />
                  <label className="form-label text-[#ffffff]">
                    Vaša správa<sup>*</sup>
                  </label>
                  <textarea
                    className="form-control rounded-xl pl-2"
                    rows="5"
                    name="message"
                    value={mailMessage}
                    onChange={(e) => setMailMessage(e.target.value)}
                    required="required"
                  ></textarea>

                  <div className="form-check my-3 flex flex-row items-center">
                    <input
                      id="flexCheckDefault"
                      type="checkbox"
                      defaultChecked={false}
                      value={checkBox}
                      onChange={handleCheckBox}
                      required="required"
                      className="h-[20px] w-[20px] rounded-xl"
                    />
                    <label
                      className="form-check-label ml-3 text-[25px] leading-[25px] text-[#ffffff] lg:ml-1 lg:leading-[35px]"
                      htmlFor="flexCheckDefault"
                    >
                      Súhlasím so spracovaním údajov
                    </label>
                  </div>
                  <input
                    className="form-control hidden"
                    type="text"
                    defaultValue={passwordGroupOne}
                    onChange={(e) => setPasswordGroupOne(e.target.value)}
                  />
                  <input
                    className="form-control hidden"
                    type="text"
                    defaultValue={passwordGroupTwo}
                    onChange={(e) => setPasswordGroupTwo(e.target.value)}
                  />
                  <button
                    className="mt-3 rounded-[30px] bg-[#0378d5] py-2 text-[#ffffff] hover:border"
                    type="submit"
                    value="Send"
                  >
                    Odoslať
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 text-[27.5px] text-[#ffffff] lg:mt-12">
            <img
              className="w-[100%] rounded-[10px] lg:w-[70%]"
              src="/map.png"
              alt="map"
            />
            <div className="mt-4 flex items-center gap-4 lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <p className="cursor-pointer">
                <a href="mailto:info@michaldovala.sk">info@michaldovala.sk</a>
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <a href="tel:+421 944 517 560">
                <p>+421 944 517 560</p>
              </a>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              <p>Drieňová 40, 821 02 Bratislava</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
