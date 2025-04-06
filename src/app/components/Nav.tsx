import Link from 'next/link';
import Image from 'next/image';

interface NavProps {
  activeSection: string;
}

export default function Nav({ activeSection }: NavProps) {
  return (
    <nav>
      <ul>
        <li className={activeSection === 'moon-intro' ? 'active' : ''}>
          <Link href="#moon-intro">
            <Image src="/assets/images/moon-nav.png" alt="Moon Intro" />
          </Link>
        </li>
        <li className={activeSection === 'moon-terrain' ? 'active' : ''}>
          <Link href="#moon-terrain">
            <Image src="/assets/images/moon-nav.png" alt="Moon Terrain" />
          </Link>
        </li>
        <li className={activeSection === 'moon-card' ? 'active' : ''}>
          <Link href="#moon-card">
            <Image src="/assets/images/moon-nav.png" alt="Moon Card" />
          </Link>
        </li>
        <li className={activeSection === 'moon-3d' ? 'active' : ''}>
          <Link href="#moon-3d">
            <Image src="/assets/images/moon-nav.png" alt="Moon 3D" />
          </Link>
        </li>
        <li className={activeSection === 'chat-room' ? 'active' : ''}>
          <Link href="#chat-room">
            <Image src="/assets/images/moon-nav.png" alt="Chat Room" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
