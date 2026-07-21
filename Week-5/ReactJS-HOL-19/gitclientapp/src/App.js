import React, { useState } from "react";
import "./App.css";
import GitClient from "./GitClient";

function App() {

    const [repos, setRepos] = useState([]);

    const loadRepositories = async () => {

        const data = await GitClient.getRepositories("techiesyed");

        setRepos(data);

    };

    return (

        <div style={{ textAlign: "center", marginTop: "40px" }}>

            <h1>GitHub Repository List</h1>

            <button onClick={loadRepositories}>
                Load Repositories
            </button>

            <ul
                style={{
                    listStyle: "none",
                    marginTop: "20px"
                }}
            >

                {
                    repos.map((repo) => (

                        <li key={repo.id}>
                            {repo.name}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default App;