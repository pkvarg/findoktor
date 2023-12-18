import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalcNavbar from '../components/calculator/CalcNavbar';
import { Footer } from '../components';
import { toast } from 'react-hot-toast';

const Ebook = () => {
  const [showPage, setShowPage] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showDownload, setShowDownload] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (email !== '') {
      setIsValid(validateEmail(email));
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return toast.error('Skontrolujte email');
    const res = await axios.put(
      'http://localhost:2000/api/md/downloadsEmails',
      {
        email,
      },
    );
    console.log(res);
  };
  return (
    <div className="relative flex h-[1250px] grid-rows-3 flex-col lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 flex h-auto flex-col items-center justify-center">
        {showPage && (
          <div className="mx-4 flex flex-col gap-8 lg:mx-[22.5%] lg:flex-row 2xl:mx-[25%]">
            <div className="flex flex-col text-[22.5px] text-[#928a8f] lg:w-[60%]">
              <h1 className="mt-6 text-[30px] font-bold leading-[30px] text-[#0076ba] 2xl:mt-[15%]">
                Zaujímaš sa o svoju budúcnosť?
              </h1>
              <p className="mt-4 text-justify lg:mt-0">
                Ty sám sa rozhodneš aká bude. Pokiaľ sa budeš zaujímať o svoje
                finančné zdravie už dnes a budeš sa vzdelávať, riadiť sa radami
                odborníkov a osvedčenou stratégiou, máš veľú šancu, že tvoja
                budúcnosť bude skvelá!
              </p>
              <p className="mt-4 text-justify">
                Práve preto sme pripravili tento krátky E-book na tému Finančnej
                gramotnosti. Keďže nám záleží na to, aby ľudia na Slovensku boli
                finančne gramotní, je tento E-book úplne{' '}
                <span className="text-[25px] font-bold text-[#0076ba]">
                  ZADARMO
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col lg:w-[40%]">
              <img src="ebook_cover.webp" alt="ebook_cover" />
              <button className="m-4 rounded-[25px] bg-[#0076ba] text-[30px] text-[#ffffff]">
                kliknite SEM
              </button>
            </div>
          </div>
        )}
        {showEmailInput && (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Váš email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-8 border border-gray-400 px-16 pl-2"
            />
            <div className="mt-4 flex flex-row items-center gap-4 lg:gap-2">
              <input type="checkbox" required="required" />
              <p className="text-[15px] leading-[15px]">
                Pred odoslaním musíte súhlasiť so spracovaním osobných údajov
              </p>
            </div>
            <button
              type="submit"
              className="my-4 w-[100%] rounded-[5px] bg-[#0076ba] text-[20px] text-[#ffffff]"
            >
              Stiahnuť E-book
            </button>
          </form>
        )}
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default Ebook;
