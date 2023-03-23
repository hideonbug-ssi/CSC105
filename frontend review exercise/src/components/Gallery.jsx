import React from 'react';
import eiffleTower from "../assets/eiffelTower.jpg"
import '../styles/Gallery.css'

function Gallery(){

    return(
        <section className='gallery'>
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src={eiffleTower} alt="Placeholder Image 1" /></li>
                <li><img width={200} src={eiffleTower} alt="Placeholder Image 2" /></li>
                <li><img width={200} src={eiffleTower} alt="Placeholder Image 3" /></li>
            </ul>
        </section>
    )
}

export default Gallery;