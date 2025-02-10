interface MoonTerrainProps {
    activeSection: string;
  }

export default function MoonTerrain({ activeSection }: MoonTerrainProps) {
    return (
        <section id='moon-terrain'>
            <img src='assets/images/moon-front.png' alt='Moon terrain'></img>
            
            <div className='description'>
                <article className='sea'>
                    <div className={'line' + (activeSection === 'moon-terrain' ? ' active' : '')}>
                        <div className='diagonal'></div>
                        <div className='horizon'></div>
                    </div>
                    <h1 className={activeSection === 'moon-terrain' ? 'active' : ''}>MARIA <em className={activeSection === 'moon-terrain' ? 'active' : ''}>Dark plains</em></h1>
                    <p className={activeSection === 'moon-terrain' ? 'active' : ''}>Low-lying regions formed by ancient volcanic activity, where basaltic lava filled large impact basins and solidified into smooth, dark surfaces.</p>
                </article>

                <article className='mountain'>
                    <div className={'line' + (activeSection === 'moon-terrain' ? ' active' : '')}>
                        <div className='diagonal'></div>
                        <div className='horizon'></div>
                    </div>
                    <h1 className={activeSection === 'moon-terrain' ? 'active' : ''}>HIGHLANDS <em className={activeSection === 'moon-terrain' ? 'active' : ''}>Bright terrain</em></h1>
                    <p className={activeSection === 'moon-terrain' ? 'active' : ''}>Elevated, heavily cratered regions of light-colored anorthosite rock, formed early in the Moon’s history and home to its highest mountains.</p>
                </article>

                <article className='craters'>
                    <div className={'line' + (activeSection === 'moon-terrain' ? ' active' : '')}>
                        <div className='diagonal'></div>
                        <div className='horizon'></div>
                    </div>
                    <h1 className={activeSection === 'moon-terrain' ? 'active' : ''}>CRATERS <em className={activeSection === 'moon-terrain' ? 'active' : ''}>Circular depressions</em></h1>
                    <p className={activeSection === 'moon-terrain' ? 'active' : ''}>Impact sites from asteroid collisions over billions of years, forming deep craters with central peaks, terraced walls, and bright ejecta patterns.</p>
                </article>
            </div>
        </section>
    )
}