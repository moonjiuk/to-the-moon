export default function MoonCard() {
    return (
        <section id="moon-card">
            <div className="moon-card">
                <figure className='moon-card-front'>
                    <img className='star' src='assets/images/star-square.png' alt="Moon Navigation" />
                    <img className='moon-front' src='assets/images/moon-front.png'></img>
                    <figcaption>Front</figcaption>
                </figure>
                <figure className='moon-card-back'>
                    <img className='star' src='assets/images/star-square.png'></img>
                    <img className='moon-back' src='assets/images/moon-back.png'></img>
                    <img className='earth' src='assets/images/earth.png'></img>
                    <figcaption>Back</figcaption>
                </figure>
            </div>
        </section>
    )
}