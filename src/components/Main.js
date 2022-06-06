import React, { useEffect, useState } from "react";
import { fetchUsers, paginationUser } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

function Main() {
  let [page, setPage] = useState(1);
  const userByPage = useSelector((state) => state.userReducer.userByPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).then(() => {
      dispatch(paginationUser(1));
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(paginationUser(page));
  }, [dispatch, page]);

  return (
    <div className="w-full lg:bg-slate-200">
      <div className="p-12 w-full lg:bg-slate-200">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 w-full bg-white p-8 rounded-sm">
          <div>
            <div className="text-2xl font-bold text-gadjian">PERSONNEL LIST</div>
            <div>List of all personnels</div>
          </div>
          <div className="flex lg:flex-row gap-5 flex-col lg:w-[35%]">
            <button className="flex flex-row items-center mx-2 border-[1px] lg:w-1/2 border-slate-300 p-1.5 pr-6">
              <i className="fa-solid fa-magnifying-glass mr-3"></i>
              <div>Find Personnels</div>
            </button>
            <button className="bg-gadjian flex flex-row justify-between items-center mx-2 border-[1px] border-slate-300 lg:w-1/2 p-1.5 pr-2">
              <div className="ml-1 text-white font-semibold">ADD PERSONNEL</div>
              <i className="fa-solid fa-plus text-white ml-3"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row gap-5 flex-col justify-evenly mx-12 gap-x-12">{userByPage && userByPage.map((user) => <Card user={user} key={user.phone}></Card>)}</div>
      <div className="flex flex-row justify-center mt-12 gap-x-8">
        <button onClick={() => setPage(page === 1 ? 1 : --page)} className={page === 1 ? "font-semibold cursor-not-allowed text-stone-600" : "font-semibold cursor-pointer text-black"}>
          <i className="fa-solid fa-chevron-left mr-2"></i>
          Previous Page
        </button>
        <button onClick={() => setPage(page === 4 ? 4 : ++page)} className={page === 4 ? "font-semibold cursor-not-allowed text-stone-600" : "font-semibold cursor-pointer  text-black"}>
          Next Page
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Main;
