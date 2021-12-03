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
				<ion-icon name="home"></ion-icon>
				<ion-icon name="search-outline"></ion-icon>
				<ion-icon name="add-circle-outline"></ion-icon>
				<ion-icon name="heart-outline"></ion-icon>
				<ion-icon name="person-outline"></ion-icon>
			</div>
	</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.root'))