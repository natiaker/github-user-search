import User from "../interfaces/userInterface";
import "./result.css";

type ResultTypes = {
  user: User;
  isDark: Boolean;
};

const Result = (props: ResultTypes): JSX.Element => {
  const joinedDate = new Date(props.user.created_at).toDateString();

  return (
    <>
      <div
        className={`result-container ${
          props.isDark ? "result-dark-mode-background" : ""
        }`}
      >
        <div className='avatar-container'>
          <img
            src={props.user.avatar_url}
            alt='avatar'
            className='avatar'
          />
          <div className={"username-div"}>
            <div>
              <h1 className={`${props.isDark ? "result-dark-mode-color" : ""}`}>
                {props.user.name}
              </h1>
              <p className='username'>@{props.user.login}</p>
              <p
                className={`join-date ${
                  props.isDark && "result-dark-mode-color"
                }`}
              >
                Joined {joinedDate}
              </p>
            </div>
          </div>
        </div>
        <div className='info-div'>
          <p className={`bio ${props.isDark && "result-dark-mode-color"}`}>
            {props.user.bio || "This profile has no bio"}
          </p>
          <div
            className={`box-info ${
              props.isDark && "result-dark-mode-color result-dark-mode-box "
            }`}
          >
            <h4 className='box-header'>
              Repos <p>{props.user.public_repos}</p>
            </h4>
            <h4 className='box-header'>
              Followers <p>{props.user.followers}</p>
            </h4>
            <h4 className='box-header'>
              Following <p>{props.user.following}</p>
            </h4>
          </div>
          <div className='additional-info'>
            <div>
              <div
                className={`alignment ${
                  props.isDark && "result-dark-mode-color"
                }`}
              >
                <img
                  src={require("../assets/icon-location.svg").default}
                  alt='location'
                />
                <p>{props.user.location || <span>Not Available</span>}</p>
              </div>
              <div className='alignment'>
                <img
                  src={require("../assets/icon-website.svg").default}
                  alt='website'
                />
                {props.user.blog ? (
                  <a
                    href={props.user.blog}
                    className={props.isDark && "result-dark-mode-color"}
                  >
                    {props.user.blog}
                  </a>
                ) : (
                  <p>
                    <span>Not Available</span>
                  </p>
                )}
              </div>
            </div>
            <div>
              <div
                className={`alignment ${
                  props.isDark && "result-dark-mode-color"
                }`}
              >
                <img
                  src={require("../assets/icon-twitter.svg").default}
                  alt='twitter'
                />
                <p>
                  {props.user.twitter_username || <span>Not Available</span>}
                </p>
              </div>
              <div
                className={`alignment ${
                  props.isDark && "result-dark-mode-color"
                }`}
              >
                <img
                  src={require("../assets/icon-company.svg").default}
                  alt='company'
                />
                <p>{props.user.company || <span>Not Available</span>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
