import './Description.sass';

function Description() {
	return (
		<div className="description-container">
			<div className="description-container__box">
				<img
					src="./img/radiowave.svg"
					alt="img"
					className="description-container__box__img"
				/>
				<span className="description-container__box__title">
					Premium Sound Quality
				</span>
				<span className="description-container__box__text">
					Immerse yourself in a world of rich and crystal-clear audio with our
					exceptional sound quality
				</span>
			</div>
			<div className="description-container__box">
				<img
					src="./img/icon-puzzle-piece.svg"
					alt="img"
					className="description-container__box__img"
				/>
				<span className="description-container__box__title">
					High-Quality Materials
				</span>
				<span className="description-container__box__text">
					Crafted with premium materials for durability and long-lasting
					performance
				</span>
			</div>
			<div className="description-container__box">
				<img
					src="./img/icon-wifi.svg"
					alt="img"
					className="description-container__box__img"
				/>
				<span className="description-container__box__title">Compatibility</span>
				<span className="description-container__box__text">
					Connect effortlessly to your various devices as they offer extensive
					compatibility
				</span>
			</div>
		</div>
	);
}

export default Description;
