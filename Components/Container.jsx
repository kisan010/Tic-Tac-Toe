import React, { useEffect, useMemo, useState } from 'react'

const Container = () => {
  const [Boardgame, setBoardgame] = useState(Array(9).fill(null));
  const [user, setUser] = useState('X');
  const [Winner, setWinner] = useState();



  const handleUser = (index) => {
    console.log(index);
    if (Boardgame[index]) return;
    const newBoard = [...Boardgame];

    newBoard[index] = user;

    setBoardgame(newBoard);
    setUser(user === 'X' ? 'O' : 'X')

  };

  const winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5]
  ]

  useEffect(() => {
    winCondition.forEach((item) => {
      let a = item[0];
      let b = item[1];
      let c = item[2];
      if (Boardgame[a] === 'X' && Boardgame[b] === 'X' && Boardgame[c] === 'X' || Boardgame[a] === 'O' && Boardgame[b] === 'O' && Boardgame[c] === 'O') {
        console.log(`winner is ${Boardgame[a]}`);

        setWinner(Boardgame[a]);

      }

    })

  }, [Boardgame])

  const handleRepeat = () => {
    setBoardgame(Array(9).fill(null));
    setUser('X');
    setWinner(null)
  }
  return (
    <>
      <div className='Container' >
        <div className="container2">
          <div className='WinnerContainer' style={{ display: Winner ? 'block' : 'none' }} >
            <div className='box'>
              <h1>{Winner} Wins</h1>
              <button onClick={handleRepeat}>Play Again</button>
            </div>
          </div>
          <div className="bigbox "  >


            {

              Boardgame.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="box"
                    disabled={!!item || !!Winner}
                    onClick={() => handleUser(index)}
                  >
                    {item || ''}
                  </button>
                )
              }

              )

            }

          </div>
          <div className='playerdetails'>
            <p>Now the turn of {user}</p>
            <div className='repeatArea'>
            <button onClick={handleRepeat}>Play Again</button>
          </div>
          </div>
        
          <br />

        </div>



      </div>
    </>
  )
}

export default Container;