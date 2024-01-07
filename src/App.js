
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/Home';
import Navbar2 from './components/navbar2/Navbar2'
import Box from './components/box/Box'
import Box2 from './components/box2/Box2'


function App() {
  const imageUrls = [
    'https://www.shutterstock.com/image-photo/burgas-bulgaria-august-31-2017-260nw-715105864.jpg',
    'https://thedealsguru.com/wp-content/uploads/2019/07/Nokia-1100.jpeg.webp',
    'https://www.lavamobiles.com/Product/z81/images/z81banner.png',
    // Add more image URLs as needed
  ];
  return (
    <div className="App">
    {/* <Navbar/> */}
    <Navbar2/>
    <HomePage/>
    <Box/>
    <Box2 imageUrls={imageUrls} />
    </div>
  );
}

export default App;
