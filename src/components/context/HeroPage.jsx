import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const HeroPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

  return (
    <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Welcome to the team, <span className="text-blue-600">{user}</span>!
          </h2>
          <p className="mt-6 text-lg text-gray-900">
            Real humans are here to help you build your brand.
          </p>
          <a
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Go home
          </a>
        </div>
      </div>

      <div className="container mx-auto 2xl:px-12">
        <img
          className="w-full mt-6"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
          alt=""
        />
      </div>
    </section>
  );
};
