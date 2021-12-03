import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Stories from './stories'
import Feed from './feed'
import Sidebar from './sidebar'

function App() {
	return (
		<div>
			<Navbar />
			<div class="corpo">
				<div class="esquerda">
					<Stories/>
					<Feed/>
				</div>
				<Sidebar/>
			</div>

			<div class="fundo-mobile">
				<IonIcon name="home"></IonIcon>
				<IonIcon name="search-outline"></IonIcon>
				<IonIcon name="add-circle-outline"></IonIcon>
				<IonIcon name="heart-outline"></IonIcon>
				<IonIcon name="person-outline"></IonIcon>
			</div>
	</div>
	)
}

export default function IonIcon(props){
	return <ion-icon name={props.name}></ion-icon>
}

ReactDOM.render(<App />, document.querySelector('.root'))