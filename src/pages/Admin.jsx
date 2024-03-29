import React, { useState } from 'react';
import axios from 'axios';
import CalcNavbar from '../components/calculator/CalcNavbar';
import { Footer } from '../components';

// TODO: LOGIN, FILE UPLOAD ebook, BLOG

const checkAdmin = import.meta.env.VITE_AUTH_EMAIL_1;

const Admin = () => {
  const [visitors, setVisitors] = useState(0);
  const [emails, setEmails] = useState(0);
  const [adminEmail, setAdminEmail] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [emailsInDb, setEmailsInDb] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminEmail == checkAdmin) {
      setShowContent(true);
    }
  };

  const getVisitors = async () => {
    try {
      const res = await axios.get(
        `https://api.pictusweb.com/api/visitors/md/counter`,
        //'http://localhost:2000/api/visitors/md/counter',
      );
      if (res) setVisitors(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const incVisitors = async () => {
    try {
      const res = await axios.put(
        `https://api.pictusweb.com/api/visitors/md/increase`,
        // 'http://localhost:2000/api/visitors/md/increase',
      );
      if (res) setVisitors(res.data.visitorsMd);
    } catch (error) {
      console.log(error);
    }
  };

  // api/md/sentEmailsCount

  const getSentEmailsCount = async () => {
    try {
      const res = await axios.get(
        `https://api.pictusweb.com/api/md/sentEmailsCount`,
        // 'http://localhost:2000/api/md/sentEmailsCount',
      );
      if (res) setEmails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // api/md/emails

  const getEmails = async () => {
    try {
      const res = await axios.get(
        `https://api.pictusweb.com/api/md/emails`,

        // 'http://localhost:2000/api/md/emails'
      );
      if (res) setEmailsInDb(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex h-screen grid-rows-3 flex-col lg:grid">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 flex h-auto flex-col">
        {showContent && (
          <div className="ml-4 flex lg:ml-[22.5%]">
            <div className="mt-16 flex flex-col items-start gap-2 lg:mt-0">
              <button
                className="cursor-pointer bg-[#0076ba] px-2 text-white"
                onClick={() => getVisitors()}
              >
                Počet návštev: {visitors}
              </button>
              <button
                className="cursor-pointer bg-[#0076ba] px-2 text-white"
                onClick={() => getSentEmailsCount()}
              >
                Odoslaných mailov: {emails}
              </button>
              <button
                className="cursor-pointer bg-[#0076ba] px-2 text-white"
                onClick={() => getEmails()}
              >
                Emaily:{' '}
              </button>
              <div className="flex flex-col gap-2 lg:flex-row">
                {emailsInDb &&
                  emailsInDb.map((email) => (
                    <div key={email._id}>{email.downloads}</div>
                  ))}
              </div>
              {/* <button
                className="cursor-pointer bg-[#0076ba] px-2 text-white"
                onClick={() => incVisitors()}
              >
                ++
              </button> */}
            </div>
          </div>
        )}
        {!showContent && (
          <form
            onSubmit={handleSubmit}
            className="mx-4 mt-16 flex flex-col items-center justify-center text-gray-800 lg:mx-[20%] lg:mt-0"
          >
            <input
              type="text"
              placeholder="who am I?"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-[100%] border border-gray-400 pl-2 lg:w-[40%]"
            />
            <button
              type="submit"
              className="my-4 w-[100%] rounded-[5px] bg-[#0076ba] text-[20px] text-[#ffffff] lg:w-[40%]"
            >
              OK
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

export default Admin;
