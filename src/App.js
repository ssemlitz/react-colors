import './App.css';
import Palette from './Pallete';
import seedColors from './seedColors'

function App() {
  return (
    <div>
      <Palette seedColors={{...seedColors[4]}}/>
    </div>
  );
}

export default App;
