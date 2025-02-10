interface MoonIntroProps {
    activeSection: string;
  }
  

export default function MoonIntro({ activeSection }: MoonIntroProps) {
    return (
        <section id="moon-intro">
            <h1>To the <em className={activeSection === 'moon-intro' ? 'active' : ''}>Moon</em></h1>
            <img  className={activeSection === 'moon-intro' ? 'active' : ''} src='assets/images/moon.jpeg' alt="intro moon image"></img>
        </section>
    )
}