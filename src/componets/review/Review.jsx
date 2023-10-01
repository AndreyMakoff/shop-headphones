import './Review.sass';
function Review() {
	return (
		<div className="review-container">
			<h3 className="review-container__title">Paul McKenzie</h3>
			<span className="review-container__text">
				“They stay securely in my ears, allowing me to move freely while
				enjoying my music”
			</span>

			<div className="review-container__fotoclient-box">
				<div className="review-container__fotoclient-box__item">
					<img
						src="./img/img-people1.svg"
						alt="img"
						className="review-container__fotoclient-box__item-foto"
					/>
					<img
						src="./img/img-people2.svg"
						alt="img"
						className="review-container__fotoclient-box__item-foto"
					/>
					<img
						src="./img/img-people3.svg"
						alt="img"
						className="review-container__fotoclient-box__item-foto"
					/>
					<img
						src="./img/img-people4.svg"
						alt="img"
						className="review-container__fotoclient-box__item-foto"
					/>
					<img
						src="./img/img-people5.svg"
						alt="img"
						className="review-container__fotoclient-box__item-foto"
					/>
				</div>
				<span className="review-container__fotoclient-box__descprition">
					1500+ <br /> customers have enjoyed <br /> their music like never
					before
				</span>
			</div>

			<div className="review-container__img"></div>
		</div>
	);
}

export default Review;
