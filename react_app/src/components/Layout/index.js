import classes from './index.module.css'
const Layout = ({ title, descr, ulrBg, colorBg }) => (
  <section className={classes.root} style={{ backgroundColor: colorBg ? colorBg : 'none' }}>
    <div className={classes.wrapper}>
      <article>
        <div className={classes.title}>
          <h3>{title}</h3>
          <span className={classes.separator}></span>
        </div>
        <div className={`${classes.desc} ${classes.full}`} >
          <p>{descr}</p>
        </div>
        <div>
          {ulrBg && <img src={ulrBg} alt={'img'} />}
        </div>
      </article>
    </div>
  </section>
);

export default Layout;
