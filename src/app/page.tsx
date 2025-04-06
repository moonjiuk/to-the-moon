'use client';

import { useEffect, useState } from 'react';

//components
import Nav from '@/app/components/Nav';
import BGM from '@/app/components/BGM';

//sections
import MoonIntro from '@/app/sections/MoonIntro';
import MoonTerrain from '@/app/sections/MoonTerrain';
import MoonCard from '@/app/sections/MoonCard';
import Moon3D from '@/app/sections/Moon3D';
import ChatRoom from '@/app/sections/ChatRoom';



export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const sections = ['moon-intro', 'moon-terrain', 'moon-card', 'moon-3d', 'chat-room'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 현재 섹션 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* BGM */}
      <BGM />
      
      {/* 네비게이션 */}
      <Nav activeSection={activeSection}  />

      {/* 섹션 */}
      <MoonIntro  activeSection={activeSection} />
      <MoonTerrain activeSection={activeSection} />
      <MoonCard />
      <Moon3D />
      <ChatRoom />
    </>
  );
}
