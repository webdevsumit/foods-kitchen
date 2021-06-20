import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';


function App() {
  return (
    <div className="App">
    	<Router>
    		<div className="nav">
    			<img
    			className="logo" src="./assets/restaurant_24px.svg"
    			alt="logo"/>
    			<h3>{"Food's Restaurant"}</h3>
    		</div>

			<div className="gap-40"></div>
    		
        	<Route path='/' exact>
        		<Screen1/>
        	</Route>

        	<Route path='/menu'>
        	     <Screen2/>
        	 </Route>

        	<Route path='/checkout'>
        	    <Screen3/>
        	</Route>
        </Router>
    </div>
  );
}

export default App;
