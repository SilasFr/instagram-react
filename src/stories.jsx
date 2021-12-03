import IonIcon from "./index"


export default function Stories() {
	const stories = [
		{
			imagem:"./assets/img/9gag.svg",
			titulo:"9gag"
		},
		{
			imagem:"./assets/img/meowed.svg",
			titulo:"meowed"
		},
		{
			imagem:"./assets/img/barked.svg",
			titulo:"barked"
		},
		{
			imagem:"./assets/img/nathanwpylestrangeplanet.svg",
			titulo:"nathanwpylestrangeplanet"
		},
		{
			imagem:"./assets/img/wawawicomics.svg",
			titulo:"wawawicomics"
		},
		{
			imagem:"./assets/img/respondeai.svg",
			titulo:"respondeai"
		},
		{
			imagem:"./assets/img/filomoderna.svg",
			titulo:"filomoderna"
		},
		{
			imagem:"./assets/img/memeriagourmet.svg",
			titulo:"memeriagourmet"
		}
	]
	return (
		<div class="stories">
				{stories.map((storie)=>{
					return (
						<div class="story">
							<div class="imagem">
								<img src= {storie.imagem}/>
							</div>
							<div class="usuario">
								{storie.titulo}
							</div>
						</div>
					)
				})}

			<div class="setinha">
				<IonIcon name="chevron-forward-circle"></IonIcon>
			</div>
		</div>
	)
}