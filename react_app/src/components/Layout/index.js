import classes from './index.module.css'
const Layout = ({ title, descr, ulrBg, colorBg }) => (
  <section
    className={classes.root}
    style={{
      backgroundColor: colorBg ? colorBg : 'none',
      backgroundImage: ulrBg ? `url(${ulrBg})` : 'none',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
    <div className={classes.wrapper}>
      <article>
        <div className={classes.title}>
          <h3>{title}</h3>
          <span className={classes.separator}></span>
        </div>
        <div className={`${classes.desc} ${classes.full}`} >
          <p>{descr}</p>
        </div>
      </article>
    </div>
  </section>
);

export default Layout;
