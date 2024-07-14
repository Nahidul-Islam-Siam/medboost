import EmailSend from '@/components/Component/EmailSend';
import FreeConsultation from '@/components/Component/FreeConsultation';
import Foot1 from '@/components/shared/Foot1';
import { SideBar } from '@/components/shared/SideBar';
import dynamic from 'next/dynamic';

const NavbarComponent = dynamic(() => import('@/components/shared/navbar'), { ssr: false });

export default function Home() {
  return (
   <div>
     <div className="container mx-auto overflow-hidden">
    <div className='flex items-center'>
    <SideBar/>

    <NavbarComponent />
    </div>
      <FreeConsultation/>
      <EmailSend/>
      
     
    </div>
    <Foot1/>
   </div>
  );
}
