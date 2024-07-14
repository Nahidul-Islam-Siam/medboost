import Foot1 from '@/components/shared/Foot1';
import { SideBar } from '@/components/shared/SideBar';
import dynamic from 'next/dynamic';

const NavbarComponent = dynamic(() => import('@/components/shared/navbar'), { ssr: false });

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden">
      <NavbarComponent />
      <SideBar/>
      <Foot1/>
    </div>
  );
}
