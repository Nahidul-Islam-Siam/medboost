import EmailSend from '@/components/Component/EmailSend';
import Faq from '@/components/Component/Faq';
import FreeConsultation from '@/components/Component/FreeConsultation';
import Pricing from '@/components/Component/Pricing';
import Testimonials from '@/components/Component/Testimonials';
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
   
    
     
    </div>
    <Faq/>
    <Pricing/>
    <Testimonials/>
      <FreeConsultation/>
    
      <EmailSend/>
    <Foot1/>
   </div>
  );
}
