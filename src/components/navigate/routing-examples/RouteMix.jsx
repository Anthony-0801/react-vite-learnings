import React from "react";

export const RouteMix = () => {
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
    </div>
  );
};
