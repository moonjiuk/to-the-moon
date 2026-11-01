interface MoonIntroProps {
    activeSection: string;
  }
  

export default function MoonIntro({ activeSection }: MoonIntroProps) {
    return (
        <section id="moon-intro">
            <h1>To the Moon</h1>
            <img className="intro-earth" src="/assets/images/earth.png" alt="Earth seen from the Moon" />
            <img className={`intro-moon ${activeSection === 'moon-intro' ? 'active' : ''}`} src="/assets/images/moon.jpeg" alt="Lunar surface" />
        </section>
    )
}
