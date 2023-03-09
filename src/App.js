import UploadWidget from './components/UploadWidget';
import './App.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 class Name="title">
          React &amp; Cloudinary Upload Widget
        </h1>
      </div>

      <div className="container">
        <UploadWidget />
      </div>
    </main>
  );
}

export default App;
