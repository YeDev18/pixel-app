import AllServices from '../molecules/AllServices/AllServices';
import PageHeader from '../molecules/PageHeader/PageHeader'; 
import Header from '@/core/components/organisms/Header';
import Contact from './Contact';
import Cible from '../molecules/Cible/Cible';

export default function Home() {
  return (
    <div className=''>
      {/* <Header /> */}
      <PageHeader/>
      <AllServices/>

    <Cible/>
    </div>
  );
}
