import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Result from "./components/Result";
import User from "./interfaces/userInterface";
import Header from "./components/Header";

const baseURL: string = "https://api.github.com/users/";

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [url, setUrl] = useState<string>("");
  const [inputUser, setInputUser] = useState<string>("");
  const [showResult, setShowResult] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [isDark, setIsDark] = useState<Boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputUser) {
      setUrl(baseURL + inputUser);
      setShowResult(true);
    }
  };

  const handleDayMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setIsError(false);
        setUser(response.data);
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  if (!user) return null;

  if (isLoading) {
    return (
      <div className={`${isDark && "dark-background"}`}>
        <h1
          className={`${isDark && "result-dark-mode-color"}`}
          style={{ paddingTop: "100px", height: "100vh", textAlign: "center" }}
        >
          Loading...
        </h1>
      </div>
    );
  } else {
    return (
      <div className={`${isDark && "dark-background"}`}>
        <div className='App'>
          <Header
            isDark={isDark}
            handleDayMode={handleDayMode}
          />
          <form onSubmit={handleSubmit}>
            <input
              className={`${isDark && "input-dark-mode"}`}
              name='todo'
              type='text'
              placeholder='Search GitHub username…'
              value={inputUser}
              onChange={e => setInputUser(e.target.value)}
            />
            {isError && <span className='error'>No results</span>}
            <button type='submit'>Search</button>
          </form>
          {showResult && !isError && (
            <Result
              user={user}
              isDark={isDark}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
