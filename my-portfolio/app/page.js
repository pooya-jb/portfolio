import classes from './page.module.css';
import Information from '@/components/information/Information';
import Navbar from '@/components/nav/Navbar';

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.left}>
        <div className={classes.home}>
          <Information />
        </div>
      </div>
      <div className={classes.right}>
        <Navbar />
      </div>
    </main>
  );
}
