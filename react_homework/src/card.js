
import PropTypes from 'prop-types';
import './card.css';
import foto1 from './img/foto1.jpg'

export default function Card({
    author,
    image=foto1,
    content,
    date,
    like,
    repeat,
    downtown,
coment}) {

  return (
      <div className="App">
          <div className='App_logo'>
      <img className='dart_vader' src={author.photo }  alt="фото"/>
      <p className='App_name' >  {author.name}</p>
              <h1 className='App_date'>    {author.nickname} {date}</h1>
              </div>
      <p className='App_content'>{content}</p>
          <img src={image} className='img'alt="фото"  />
       
              <ul className='App_reputation'>
                  <li className='App_reputation_item'>
                      <img className='App_reputation_img' src={coment}  alt="фото не знайдено"/>
              <p className='App_reputation_statistics' >482</p>
                  </li>
                  <li className='App_reputation_item'>
                         <img className='App_reputation_img' src={ repeat} alt="фото" />
              <p className='App_reputation_statistics'>146</p>
                  </li>
                  <li className='App_reputation_item'>
                       <img className='App_reputation_img' src={like} alt="фото" />
                  <p className='App_reputation_statistics'>879</p>
                  </li>
                  <li className='App_reputation_item'>
                      <img className='App_reputation_img' src={downtown} alt="фото" />
                  </li>
              </ul>
            
          {/* </div> */}
         
    
    </div>
  );
}

Card.propTypes={
    image:PropTypes.string,
    author: PropTypes.object,
    date: PropTypes.string,
    content:PropTypes.string
}