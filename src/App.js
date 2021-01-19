import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <div className="app">
      <h1>Slack Clone</h1>
      <Header/>
      <div className='app__body'>
        <Sidebar />
        {/* React Router */}
      </div>
    </div>
  );
}

export default App;
