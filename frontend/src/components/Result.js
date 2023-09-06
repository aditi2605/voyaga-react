import React from 'react';
// import commingSoonImg from '../images/commingsoon.jpeg';


function Result({title, place, type, image, durationtovisit}) {

  console.log("Image prop:", image); // Debugging line
  // if (typeof(image) !== 'undefined') {
  //   return ( <img src={require(`../images/${image}`)} alt='place' width='100%' height='auto'/> );
  // } else {
  //  return (<img src={commingSoonImg}  alt='commingsoon' width='100%' height='auto'/> );
  // }

  return (
      <>
        <div className="main">
          <ul className="cards">
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    {/* <img src={image} alt="place" width='100%' height='auto' /> */}
                    <img src={require(`../images/${image}`)} alt="place" width='100%' height='auto' />
                    <span className="card_price"></span>
                  </div>
                  <div className="card_content">
                    {/* <h2 className="card_title">{subTitle}</h2> */}
                    <h5>{place}</h5>
                    <hr/>
                    <p className="card_content-p">{title}</p>
                    <p className="card_content-p">{type}</p>
                    <p className="card_content-p">Suggested Duration : {durationtovisit}  </p>
                  
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )
}

export default Result
