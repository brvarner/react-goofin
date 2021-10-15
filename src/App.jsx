import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const allUsers = await res.json();
      setUsers(allUsers);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
        {users.map((user) => (
          <div className="col-md-6" key={`user-card-${user.id}`}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 className="card-title">{user.username}</h4>
                <p className="card-subtitle text-muted">{user.name}</p>
                <p className="card-text">{user.email} / {user.company.name}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default App;
