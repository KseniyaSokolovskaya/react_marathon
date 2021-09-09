import classes from './index.module.css';
const Header = ({ title, descr }) => (
  <header className={classes.root}>
    <div className={classes.forest}></div>
    <div className={classes.container}>
      <h1>{title}</h1>
      <p>{descr}</p>
    </div>
  </header>
)

export default Header;
