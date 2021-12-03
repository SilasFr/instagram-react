export default function Sidebar() {
	const sugestions = [
		{
			userImage: "./assets/img/bad.vibes.memes.svg",
			userName: 'bad.vibes.memes',
			reason: 'Segue você',
		},
		{
			userImage: "./assets/img/chibirdart.svg",
			userName: 'chibirdart',
			reason: 'Segue você',
		},
		{
			userImage: "./assets/img/razoesparaacreditar.svg",
			userName: 'razoesparaacreditar',
			reason: 'Novo no Instagram',
		},
		{
			userImage: "./assets/img/adorable_animals.svg",
			userName: 'adorable_animals',
			reason: 'Segue você',
		},
		{
			userImage: "./assets/img/smallcutecats.svg",
			userName: 'smallcutecats',
			reason: 'Segue você',
		}
	]

	return (
		<div class="sidebar">
			<div class="usuario">
				<img src="./assets/img/catanacomics.svg" />
				<div class="texto">
					<strong>catanacomics</strong>
					Catana
				</div>
			</div>

			<div class="sugestoes">
				<div class="titulo">
					Sugestões para você
					<div>Ver tudo</div>
				</div>

				{sugestions.map((item)=>{
					return(
						<div class="sugestao">
							<div class="usuario">
								<img src={item.userImage} />
								<div class="texto">
									<div class="nome">{item.userName}</div>
									<div class="razao">{item.reason}</div>
								</div>
							</div>

							<div class="seguir">Seguir</div>
						</div>

					)})
				}
			</div>
			<div class="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
			</div>

			<div class="copyright">
				© 2021 INSTAGRAM DO FACEBOOK
			</div>
		</div>
	)
}