import './Categories.sass';

function Categories() {
	return (
		<div className="categories-container">
			<div className="categories-container__description">
				<span className="categories-container__description-title">
					Categories
				</span>
				<a href="#6" className="categories-container__description-link">
					<span className="categories-container__description-link__span">
						Show colLection
					</span>
					<img
						src="./img/icon-show.svg"
						alt="img"
						className="categories-container__description-link__img"
					/>
				</a>
			</div>
			{/* карточки категорий */}
			<div className="categories-container__card-box">
				<div className="categories-container__card-box__item">
					<img
						className="categories-container__card-box__item-img"
						src="./img/Rectangle 6.svg"
						alt="img"
					/>
					<a href="#1" className="categories-container__card-box__item-span">
						Headphone
					</a>
				</div>
				<div className="categories-container__card-box__item">
					<img
						src="./img/headphoneVacum.svg"
						alt="img"
						className="categories-container__card-box__item-img"
					/>
					<a href="#2" className="categories-container__card-box__item-span">
						True Wireless Stereo
					</a>
				</div>
				<div className="categories-container__card-box__item">
					<img
						src="./img/runheadphone.svg"
						alt="img"
						className="categories-container__card-box__item-img"
					/>
					<a href="#3" className="categories-container__card-box__item-span">
						Earbud
					</a>
				</div>
				<div className="categories-container__card-box__item">
					<img
						src="./img/columnBT.svg"
						alt="img"
						className="categories-container__card-box__item-img"
					/>
					<a href="#4" className="categories-container__card-box__item-span">
						Portable Speaker
					</a>
				</div>
			</div>
		</div>
	);
}

export default Categories;
