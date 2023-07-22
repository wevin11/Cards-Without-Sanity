import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import blackCardData from './data/cards.json';

const blackCards = blackCardData.blackCards;
const whiteCards = blackCardData.whiteCards;

const shuffleArray = (array) => {
  // Create a copy of the array to avoid mutating the original array
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const App = () => {
  const [blackCardIndex, setBlackCardIndex] = useState(0);
  const [selectedWhiteCards, setSelectedWhiteCards] = useState(Array(7).fill(false));
  const [shuffledWhiteCards, setShuffledWhiteCards] = useState([]);

  useEffect(() => {
    setShuffledWhiteCards(shuffleArray(whiteCards));
  }, [blackCardIndex]);

  const handleNextCard = () => {
    const nextIndex = blackCardIndex + 1;
    setBlackCardIndex(nextIndex >= blackCards.length ? 0 : nextIndex);
    setSelectedWhiteCards(Array(7).fill(false));
  };

  const handleSelectWhiteCard = (card, index) => {
    const updatedSelectedWhiteCards = [...selectedWhiteCards];
    updatedSelectedWhiteCards[index] = !updatedSelectedWhiteCards[index];
    setSelectedWhiteCards(updatedSelectedWhiteCards);
  };

  const renderWhiteCards = () => {
    const currentBlackCard = blackCards[blackCardIndex];
    const { pick } = currentBlackCard;

    const whiteCardsToRender = Array(7).fill(null).map((_, index) => {
      const isSelectable = index < pick;

      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.whiteCard,
            isSelectable && selectedWhiteCards[index] ? styles.selectedWhiteCard : null,
          ]}
          onPress={isSelectable ? () => handleSelectWhiteCard(shuffledWhiteCards[index], index) : null}
        >
          <Text style={styles.whiteCardText}>
            {isSelectable ? shuffledWhiteCards[index] : 'Select White Card'}
          </Text>
        </TouchableOpacity>
      );
    });

    return whiteCardsToRender;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.blackCard}>{blackCards[blackCardIndex].text}</Text>
      <View style={styles.whiteCardContainer}>
        {renderWhiteCards()}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextCard}>
        <Text style={styles.nextButtonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;



// const blackCards = blackCardData.blackCard;

// const whiteCards = [
//   'Answer 1',
//   'Answer 2',
//   'Answer 3',
//   // Add more white cards here
// ];

// const App = () => {
//   const [blackCardIndex, setBlackCardIndex] = useState(0);
//   const [selectedWhiteCard, setSelectedWhiteCard] = useState('');

//   const handleNextCard = () => {
//     const nextIndex = blackCardIndex + 1;
//     setBlackCardIndex(nextIndex >= blackCards.length ? 0 : nextIndex);
//     setSelectedWhiteCard('');
//   };

//   const handleSelectWhiteCard = (card) => {
//     setSelectedWhiteCard(card);
//   };

//   return (
//     <View>
      
//     <View style={styles.container}>
      
//       <Text style={styles.blackCard}>{blackCards[blackCardIndex]}</Text>
//       <View style={styles.whiteCardContainer}>
//         {whiteCards.map((card, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.whiteCard,
//               selectedWhiteCard === card && styles.selectedWhiteCard,
//             ]}
//             onPress={() => handleSelectWhiteCard(card)}
//           >
//             <Text style={styles.whiteCardText}>{card}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <TouchableOpacity style={styles.nextButton} onPress={handleNextCard}>
//         <Text style={styles.nextButtonText}>Next Card</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };


// export default App;
