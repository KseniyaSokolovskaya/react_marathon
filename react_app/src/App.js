import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bgImage1 from './assets/bg-1.jpeg'
import bgImage2 from './assets/bg-2.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title='This is title'
        descr='This is Description!' />
      <Layout
        title='This is title'
        descr='This is Description!'
        ulrBg={bgImage1} />
      <Layout
        title='This is title'
        descr='This is Description!'
        colorBg={'red'} />
      <Layout
        title='This is title'
        descr='This is Description!'
        ulrBg={bgImage2} />
      <Footer />
    </div>
  );
}

export default App;
