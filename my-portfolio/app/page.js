import Image from 'next/image';
import classes from './page.module.css';
import HomePage from '@/components/home/HomePage';
import Navbar from '@/components/nav/Navbar';

export default function Home() {
  return (
    <main className={classes.main}>
      <Navbar />
      <div className={classes.home}>
        <HomePage />
      </div>
    </main>
  );
}
