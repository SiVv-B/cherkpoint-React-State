import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Person from './Componement/Person';
import Picture from './profilePicture.PNG';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Person ImgSrc={Picture} />
			</div>
		);
	}
}
export default App;
