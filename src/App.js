import './App.css';
import CourseWeather from './components/CourseWeather/CourseWeather';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App"> 
      <ErrorBoundary>
      <CourseWeather />  
      <div className="attribution">
      Icons from <a href="https://icons8.com">https://icons8.com</a>
      </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
