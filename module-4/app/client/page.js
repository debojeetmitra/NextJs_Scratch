"use client";

import React, { useEffect, useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users/debojeetmitra");
      const data = await res.json();
      setUserData(data);
    }

    fetchData()
  }, []);

  const origin = window.location.origin

  return (
    <div>
      <h2>Client Component Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {JSON.stringify(userData)}
      {origin}
    </div>
  );
};

export default ClientPage;
