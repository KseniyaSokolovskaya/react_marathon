import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Card from './components/Card';

import bgImage1 from './assets/bg-1.jpeg'
import bgImage2 from './assets/bg-2.jpeg'
import backUrl from './assets/card-back-side.jpeg';

import pokemons from './data.json';
import './App.css';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header
        title='This is title'
        descr='This is Description!' />
      <Layout
        title='This is title'
        descr='This is Description!'
        ulrBg={bgImage1}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </Layout>
      <Layout
        title='This is title'
        descr='This is Description!'
        colorBg={'red'}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </Layout>
      <Layout
        title='This is title'
        descr='This is Description!'
        ulrBg={bgImage2}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
        <div className={classes.flex}>
          {pokemons.map(({ id, type, values, name, img }) => (
            <Card
              key={id}
              id={id}
              type={type}
              values={values}
              img={img}
              backUrl={backUrl}
              name={name} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
