import React from "react";

function Card({ user }) {
  const formattedDate = () => {
    const date = new Date(user.dob.date);
    return `${date.getDate()}-${date.getMonth() + 1}`;
  };

  return (
    <div className="bg-white w-full lg:h-[430px] rounded-xl">
      <div className="my-1 flex flex-row justify-between items-center h-8 border-b-[1px] border-gray-200">
        <div className="ml-2">
          Personnel ID: <span className="text-gadjian">{user.location.postcode}</span>
        </div>
        <div className="mr-4">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="flex lg:flex-col">
        <img className="my-4 h-44 w-44 rounded-full mx-auto flex flex-row justify-center items-center" src={user.picture.large} alt="user" />
        <div className="flex flex-col justify-center mx-4">
          <div className="font-bold text-xs">Name</div>
          <div className="flex flex-row">
            <div>{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
          </div>
          <div className="font-bold text-xs mt-1">Telephone</div>
          <div className="flex flex-row">
            <div>{user.phone}</div>
          </div>
          <div className="hidden lg:block font-bold text-xs mt-1">Birthday</div>
          <div className="flex flex-row">
            <div className="hidden lg:block">{formattedDate()}</div>
          </div>
          <div className="hidden lg:block font-bold text-xs mt-1">Email</div>
          <div className="flex flex-row">
            <div className="hidden lg:block">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
