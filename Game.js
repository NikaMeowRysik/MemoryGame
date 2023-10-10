
function App() {
    const [currentLevel, setCurrentLevel] = useState('hard');
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
    const initializeGame = () => {
    
      const shuffledImages = shuffle([...levels[currentLevel].cards, ...levels[currentLevel].cards]);
    
    
      setCards(shuffledImages);
      setFlippedIndices([]);
      setMatchedPairs([]);
      setMoves(0);
      setGameOver(false);
    };
    
    useEffect(() => {
       initializeGame();
    }, [currentLevel]);
    
     const shuffle = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    };
       return shuffledArray;
     };
    
      const handleCardClick = (index) => {
    
        if (flippedIndices.length === 2 || matchedPairs.includes(index)) return;
       const newFlippedIndices = [...flippedIndices, index];
    
      setFlippedIndices(newFlippedIndices);
    
      if (newFlippedIndices.length === 2) {
        const [firstIndex, secondIndex] = newFlippedIndices;
    
        if (cards[firstIndex] === cards[secondIndex]) {
          setMatchedPairs([...matchedPairs, firstIndex, secondIndex]);
    
          if (matchedPairs.length + 2 === cards.length) {
            setGameOver(true);
          }
        }
        setTimeout(() => setFlippedIndices([]), 1000);
        setMoves(moves + 1);
      }}
    };