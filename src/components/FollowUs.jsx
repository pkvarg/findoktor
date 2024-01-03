import React from 'react';

const FollowUs = () => {
  return (
    <a
      className="mt-4 flex flex-row items-center justify-center gap-2 text-blue-500"
      href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=michaldovala"
      target="_blank"
    >
      <img className="ml-4 w-[15%]" src="linkedin.webp" alt="linkedin" />
      <p>Sledujte nás</p>
    </a>
  );
};

export default FollowUs;
