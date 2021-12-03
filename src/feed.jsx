import IonIcon from "./index"

export default function Feed() {
	const posts = [
		{
			userImage: "./assets/img/meowed.svg",
			userName: "meowed",
			content: "./assets/img/gato-telefone.svg",
			feedbackImage: "./assets/img/respondeai.svg",
			feedbackHighlight: 'respondeai',
			feedbackTotal: 'outras 101.523 pessoas'
		},
		{
			userImage: "./assets/img/barked.svg",
			userName: 'barked',
			content: "./assets/img/dog.svg",
			feedbackImage: "./assets/img/adorable_animals.svg",
			feedbackHighlight: 'adorable_animals',
			feedbackTotal: 'outras 99.159 pessoas'
		},
		{
			userImage: "./assets/img/barked.svg",
			userName: 'barked',
			content: "https://picsum.photos/id/110/375",
			feedbackImage: "./assets/img/adorable_animals.svg",
			feedbackHighlight: 'adorable_animals',
			feedbackTotal: 'outras 99.159 pessoas'
		},
		{
			userImage: "./assets/img/barked.svg",
			userName: 'barked',
			content: "https://picsum.photos/id/102/375",
			feedbackImage: "./assets/img/adorable_animals.svg",
			feedbackHighlight: 'adorable_animals',
			feedbackTotal: 'outras 99.159 pessoas'
		}
	]

	return (
		<div class="posts">
			{posts.map((post)=>{
				return(
					<div class="post">
						<div class="topo">
							<div class="usuario">
								<img src={post.userImage} />
								{post.userName}
							</div>
							<div class="acoes">
								<IonIcon name="ellipsis-horizontal"></IonIcon>
							</div>
						</div>

						<div class="conteudo">
							<img src= {post.content} />
						</div>

						<div class="fundo">
							<div class="acoes">
								<div>
									<IonIcon name="heart-outline"></IonIcon>
									<IonIcon name="chatbubble-outline"></IonIcon>
									<IonIcon name="paper-plane-outline"></IonIcon>
								</div>
								<div>
									<IonIcon name="bookmark-outline"></IonIcon>
								</div>
							</div>

							<div class="curtidas">
								<img src= {post.feedbackImage} />
								<div class="texto">
									Curtido por <strong>{post.feedbackHighlight}</strong> e <strong>{post.feedbackTotal}</strong>
								</div>
							</div>
						</div>
					</div>

				)
			})}
		</div>
	)
}