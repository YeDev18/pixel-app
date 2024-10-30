import Header from '@/core/components/organisms/Header';
import Contact from './Contact';
import Valeur from '../organisms/valeur';
import Cible from '../organisms/Home/Cible/Cible';
import Team from '../organisms/Home/Team/Team';
import AllServices from '../organisms/Home/AllServices/AllServices';
import Hero from '../organisms/Home/Hero/Hero';
import Footer from '../organisms/footer/footer';

export default function Home() {
  return (
    <div className='space-y-[180px]'>
      {/* <Header /> */}
      <Hero/>
      <Valeur/>
      <AllServices/>
      <Team/>
      <Cible/>
      {/* <Footer/> */}
    </div>
  );
}

