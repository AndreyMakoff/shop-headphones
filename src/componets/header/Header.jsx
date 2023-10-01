import './Header.sass';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
	return (
		<div className="header-container">
			<img
				className="header-container__img"
				src="./img/Brand-ico.svg"
				alt="oops"
			></img>
			<ul className="header-container__list">
				<li className="header-container__list__item">
					<a href="#1" className="header-container__list__item-ref">
						About us
					</a>
				</li>
				<li className="header-container__list__item">
					<a href="#2" className="header-container__list__item-ref">
						Collection
					</a>
				</li>
				<li className="header-container__list__item">
					<a href="#3" className="header-container__list__item-ref">
						Products
					</a>
				</li>
				<li className="header-container__list__item">
					<a href="#4" className="header-container__list__item-ref">
						Get in Touch
					</a>
				</li>
			</ul>

			<div className="header-container__input">
				<img
					src="./img/search-img.svg"
					alt="search-img"
					className="header-container__input__img"
				/>
				<input
					className="header-container__input__search"
					placeholder="Введеите название"
					type="text"
					required
				/>
				<a href="#3" className="header-container__cart-box">
					<img
						src="./img/cart.svg"
						alt="cart-img"
						className="header-container__cart-img"
					/>
				</a>
				<a href="#4" className="header-container__cart-box">
					<img
						src="./img/icon-person.svg"
						alt="cart-img"
						className="header-container__cart-img"
					/>
				</a>
			</div>
			<AiOutlineMenu className="header-container__btn-menu" />
		</div>
	);
}

export default Header;
