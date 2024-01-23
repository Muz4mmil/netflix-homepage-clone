import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';
import { db } from '../firebase-configs';
import CardSlider from './CardSlider';


const ContentList = () => {
  const [cardSet1, setCardSet1] = useState([])
  const [cardSet2, setCardSet2] = useState([])
  const [cardSet3, setCardSet3] = useState([])

  useEffect(() => {

    const fetchFirestoreData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'images'));
        const fetchedCards = querySnapshot.docs.map(doc => doc.data());
        
        setCardSet1(fetchedCards.slice(0, 20));
        setCardSet2(fetchedCards.slice(20, 40));
        setCardSet3(fetchedCards.slice(40, 60));

      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    };
    
    fetchFirestoreData();

  }, []);

  return (
    <div className='mt-24 mb-20'>
      <div className='mt-12'>
        <div className='mb-3 text-xl font-semibold ml-16 text-white'>Popular on Netflix</div>
        <CardSlider cardData={cardSet1} />
      </div>
      <div className='mt-12'>
        <div className='mb-3 text-xl font-semibold ml-16 text-white'>Continue Watching</div>
        <CardSlider cardData={cardSet2} />
      </div>
      <div className='mt-12'>
        <div className='mb-3 text-xl font-semibold ml-16 text-white'>Hindi Movies and TV</div>
        <CardSlider cardData={cardSet3} />
      </div>
    </div>
  )
}

export default ContentList
