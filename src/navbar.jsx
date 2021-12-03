import IonIcon from "./Ionicon"

export default function Navbar() {
	return (
		<div class="navbar">
			<div class="container">
				<div class="logo">
					<IonIcon name="logo-instagram"></IonIcon>
					<div class="separador"></div>
					<img src="./assets/img/logo.png" alt="logo"/>
				</div>

				<div class="logo-mobile">
					<IonIcon name="logo-instagram"></IonIcon>
				</div>

				<div class="instagram-mobile">
					<img src="./assets/img/logo.png" alt="logo"/>
				</div>

				<div class="pesquisa">
					<input type="text" placeholder="Pesquisar" />
				</div>

				<div class="icones">
					<IonIcon name="paper-plane-outline"></IonIcon>
					<IonIcon name="compass-outline"></IonIcon>
					<IonIcon name="heart-outline"></IonIcon>
					<IonIcon name="person-outline"></IonIcon>
				</div>

				<div class="icones-mobile">
					<IonIcon name="paper-plane-outline"></IonIcon>
				</div>
			</div>
		</div>
	)
}