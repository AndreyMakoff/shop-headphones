import './Popular.sass';

function Popular() {
	return (
		<div className="popular-container">
			<h3 className="popular-container__title">Most Popular Devices</h3>

			<div className="popular-container__box">
				<div className="popular-container__card">
					<div className="popular-container__card__title">
						<span className="popular-container__card__title-text">
							Breeze Ornate Grazie Pro
						</span>
						<span className="popular-container__card__title-price">$12.86</span>
					</div>
					<div className="popular-container__card__links">
						<a href="#3" className="popular-container__card__links-detals">
							<span className="popular-container__card__links-span">
								Details
							</span>
							<img
								src="./img/icon-show.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>

						<a href="#3" className="popular-container__card__links-cart">
							<span className="popular-container__card__links-cart-span">
								Buy Now
							</span>
							<img
								src="./img/icon-cart-orange.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>
					</div>
					<img
						src="./img/popular-card1.svg"
						alt="img"
						className="popular-container__card__main-img"
					/>
					<div className="popular-container__card__circles">
						<div className="popular-container__card__circles__1"></div>
						<div className="popular-container__card__circles__2"></div>
						<div className="popular-container__card__circles__3"></div>
					</div>
				</div>
				{/* вторая карточка */}
				<div className="popular-container__card">
					<div className="popular-container__card__title">
						<span className="popular-container__card__title-text">
							Breeze Ornate Grazie Pro
						</span>
						<span className="popular-container__card__title-price">$12.86</span>
					</div>
					<div className="popular-container__card__links">
						<a href="#3" className="popular-container__card__links-detals">
							<span className="popular-container__card__links-span">
								Details
							</span>
							<img
								src="./img/icon-show.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>

						<a href="#3" className="popular-container__card__links-cart">
							<span className="popular-container__card__links-cart-span">
								Buy Now
							</span>
							<img
								src="./img/icon-cart-orange.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>
					</div>
					<img
						src="./img/popular-card2.svg"
						alt="img"
						className="popular-container__card__main-img"
					/>
					<div className="popular-container__card__circles">
						<div className="popular-container__card__circles__1"></div>
						<div className="popular-container__card__circles__2"></div>
						<div className="popular-container__card__circles__3"></div>
					</div>
				</div>
				{/* третья карточка */}
				<div className="popular-container__card">
					<div className="popular-container__card__title">
						<span className="popular-container__card__title-text">
							Breeze Ornate Grazie Pro
						</span>
						<span className="popular-container__card__title-price">$12.86</span>
					</div>
					<div className="popular-container__card__links">
						<a href="#3" className="popular-container__card__links-detals">
							<span className="popular-container__card__links-span">
								Details
							</span>
							<img
								src="./img/icon-show.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>

						<a href="#3" className="popular-container__card__links-cart">
							<span className="popular-container__card__links-cart-span">
								Buy Now
							</span>
							<img
								src="./img/icon-cart-orange.svg"
								alt="img"
								className="popular-container__card__links-img"
							/>
						</a>
					</div>
					<img
						src="./img/popular-card3.svg"
						alt="img"
						className="popular-container__card__main-img"
					/>
					<div className="popular-container__card__circles">
						<div className="popular-container__card__circles__1"></div>
						<div className="popular-container__card__circles__2"></div>
						<div className="popular-container__card__circles__3"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Popular;
