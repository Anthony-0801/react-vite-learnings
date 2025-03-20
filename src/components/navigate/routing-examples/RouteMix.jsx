import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RouteMix = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-center text-2xl font-semibold">
        Some Routing Features
      </h1>
      <h2 className="text-xl font-medium mt-4">Dynamic Routes</h2>
      <p className="mt-2 text-gray-700">
        Dynamic routes are used when we want to pass a parameter to a route. For
        example, we want to pass an ID to a route to get a specific item.
      </p>
      <p className="mt-2 text-gray-700">
        For example, we can have a URL like this: anthony-cabulang.com/some_item
        where <code>some_item</code> is the ID of the item we want to get.
      </p>
      <p className="mt-2 text-gray-700">
        With dynamic routes, we can pass <code>some_item</code> to a route. So
        we can have a URL like this: anthony-cabulang.com/:some_item where
        <code>:some_item</code> is the dynamic route.
      </p>
      <p className="mt-2 text-gray-700">
        And we can get the value of <code>some_item</code> in the route. For
        example, we can have a URL like this: anthony-cabulang.com/123 where
        <code>123</code> is the ID of the item we want to get.
      </p>

      <h2 className="text-xl font-medium mt-4">using useLocation()</h2>
      <p className="mt-2 text-gray-700">
        The useLocation() hook is used to get the current location. It returns
        an object with the following properties:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>pathname: the current location</li>
        <li>search: the query string</li>
        <li>hash: the hash</li>
        <li>state: the state</li>
      </ul>
      <p className="mt-2 text-gray-700">
        For example, if the current location is
        anthony-cabulang.com/some_item?name=Anthony#section1, the useLocation()
        hook will return an object like this:
      </p>
      <pre className="bg-gray-100 p-2 mt-2">
        {`{
    pathname: "/some_item",
    search: "?name=Anthony",
    hash: "#section1",
    state: null
}`}
      </pre>
      <p className="mt-2 text-gray-700">
        We can use the useLocation() hook to get the current location and use it
        in our app.
      </p>
      <div className="divider mt-4">
        Here's an example of using useLocation in a form
      </div>
      <form className="flex flex-col gap-4 p-4 mt-4 rounded-md">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input type="text" className="input input-primary w-full" placeholder="Type here" value={name} onChange={(e) => setName(e.target.value)} />
        </fieldset>

        <button
          className="block mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={(e) => {
            e.preventDefault();
            navigate("/useLocation", { state: { name } });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
