import './Main.sass';

function Main() {
	return (
		<div className="main">
			<h3 className="main__title">Brand new items</h3>
			<h1 className="main__big-title">
				Breeze Shout
				<span className="main__big-title__span"> Minime</span>
			</h1>
			<h3 className="main__description">
				Pocket-sized perfection, an auditory masterpiece
			</h3>
			<div className="main__sectionBuy">
				<img
					src="./img/cart-white.svg"
					alt="cart"
					className="main__sectionBuy__cart"
				/>
				<div className="main__sectionBuy__stick"></div>
				<a href="#5" className="main__sectionBuy__link">
					Buy now
				</a>
			</div>

			<img
				src="./img/columns-picture.png"
				alt="img"
				className="main__column-img"
			></img>

			<div className="main__backgound-img"></div>
		</div>
	);
}

export default Main;
