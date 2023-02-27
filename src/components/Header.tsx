import "./header.css";

const Header = (props: { isDark: Boolean; handleDayMode: () => void }) => {
  return (
    <header className={`${props.isDark ? "header-dark-mode" : ""}`}>
      <h2 className='heading'>devfinder</h2>
      <div
        className='mode-div'
        onClick={props.handleDayMode}
      >
        <h4>{props.isDark ? "LIGHT" : "DARK"}</h4>
        <img
          className='mode-icon'
          src={
            props.isDark
              ? require("../assets/icon-sun.svg").default
              : require("../assets/icon-moon.svg").default
          }
          alt='moon-icon'
        />
      </div>
    </header>
  );
};

export default Header;
