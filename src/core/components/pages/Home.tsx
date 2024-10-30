import Header from '@/core/components/organisms/Header';
import Contact from './Contact';
import Valeur from '../organisms/valeur';
import Cible from '../organisms/Home/Cible/Cible';
import Team from '../organisms/Home/Team/Team';
import AllServices from '../organisms/Home/AllServices/AllServices';

export default function Home() {
  return (
    <div className='space-y-[180px]'>
      {/* <Header /> */}
      <Valeur/>
      <AllServices/>
      <Team/>
      <Cible/>
    </div>
  );
}

