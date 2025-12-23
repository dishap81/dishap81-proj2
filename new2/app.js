import React, { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>100000&sort=stars"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data.items || []));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub Project Explorer</h1>

      {repos.slice(0, 3).map((repo) => (
        <p key={repo.id}>
          {repo.name} ⭐ {repo.stargazers_count}
        </p>
      ))}
    </div>
  );
}

export default App;