import React from 'react';
import Card from "./Card.jsx";

function Body() {
  return (
    <div className="body">
      <div className='body-top'>
        <h2 className='title'>Schemes for Girl Child</h2>
        <div className="catergories">
          <a className="option" href="https://www.w3.org/">Live Schemes</a>
          <a className="option" href="https://www.w3.org/">Upcoming Schemes</a>
          <a className="option" href="https://www.w3.org/">Always Open</a>
        </div>
      </div>
      <div className="cards">
      <Card name="Mukhya Mantri Vivah Shagun Yojna" content="The Haryana government has prepared such a scheme for poor girls, and for welfare of SC's and BC's in which there will be no problem in the marriage of girls from poor families. This is a G2C service. Only on-line applications on https://saralharyana.gov.in/ are accepted under this scheme.
Under this Scheme, an amount of Rs 71000 will be given in the name of Kanyadan to the daughters of scheduled castes and widows living below the poverty line. 
" />
        <Card name="Mukhya Mantri Vivah Shagun Yojna" content="The Haryana government has prepared such a scheme for poor girls, and for welfare of SC's and BC's in which there will be no problem in the marriage of girls from poor families. This is a G2C service. Only on-line applications on https://saralharyana.gov.in/ are accepted under this scheme.
Under this Scheme, an amount of Rs 71000 will be given in the name of Kanyadan to the daughters of scheduled castes and widows living below the poverty line. 
" />
        <Card name="Mukhyamantri Mahalaxmi Yojana" content="CM Maha Lakshmi Scheme has seen quite a few twists and turns since it was announced by former CM Trivendra Rawat a couple of months ago. He had named the scheme “Soubhagyawati Yojana” and was all set to inaugurate it when he had to step down. His successor, Tirath Singh Rawat changed the name of the scheme to Mahalakshmi Yojana and was gearing up to launch it. But on the very day, he was to inaugurate Maha Laxmi Yojana, he was summoned to Delhi and subsequently had to let go of the CM’s chair.
" />
      </div>
    </div>
  )
}

export default Body;
