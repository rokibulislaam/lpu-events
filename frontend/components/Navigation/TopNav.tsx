import { CategoriesQuery } from 'graphql/generated/graphql';
import React from 'react';

const TopNav: React.FunctionComponent<{
  navData: CategoriesQuery;
}> = ({ navData }) => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">LPU Events</span>
        </div>
        <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            {navData.categories?.map((category, i) => (
              <a key={i} className="btn btn-ghost btn-sm rounded-btn">
                {category?.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopNav;
