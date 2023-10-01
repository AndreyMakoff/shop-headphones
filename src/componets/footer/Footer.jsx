import './Footer.sass';
// import { YMaps, Map } from 'react-yandex-map';
import {
	YMaps,
	Map,
	FullscreenControl,
	GeolocationControl,
	// ZoomControl,
} from '@pbe/react-yandex-maps';

function Footer() {
	return (
		<div>
			<div className="footer-container">
				<div className="footer-container__box">
					<img
						src="./img/Brand-ico.svg"
						alt="img"
						className="footer-container__box__logo"
					/>
					<div className="footer-container__box__contact">
						<h3 className="footer-container__box__contact-title">
							Наши контакты
						</h3>
						<div className="footer-container__box__thirdbox">
							<span className="footer-container__box__thirdbox__number">
								+7 (924) 300-17-46
							</span>
							<div className="footer-container__box__thirdbox__messanger">
								<a
									href="https://web.tlgrm.app/"
									className="footer-container__box__thirdbox__messanger__link"
								>
									<div className="footer-container__box__thirdbox__messanger__img">
										<img
											src="img/contactFooter/contactVk.svg"
											alt="VK"
											className="footer-container__box__thirdbox__messanger__vk"
										/>
									</div>
								</a>
								<a
									href="https://web.tlgrm.app/"
									className="footer-container__box__thirdbox__messanger__link"
								>
									<div className="footer-container__box__thirdbox__messanger__img">
										<img
											src="img/contactFooter/contactTel.svg"
											alt="Tel"
											className="footer-container__box__thirdbox__messanger__tel"
										/>
									</div>
								</a>
								<a
									href="https://web.tlgrm.app/"
									className="footer-container__box__thirdbox__messanger__link"
								>
									<div className="footer-container__box__thirdbox__messanger__img">
										<img
											src="img/contactFooter/contactVib.svg"
											alt="Viber"
											className="footer-container__box__thirdbox__messanger__vb"
										/>
									</div>
								</a>
								<a
									href="https://web.tlgrm.app/"
									className="footer-container__box__thirdbox__messanger__link"
								>
									<div className="footer-container__box__thirdbox__messanger__img">
										<img
											src="img/contactFooter/contactWhat.svg"
											alt="Whatsap"
											className="footer-container__box__thirdbox__messanger__wh"
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<YMaps>
					<div>
						<Map
							defaultState={{ center: [55.75, 37.57], zoom: 9 }}
							Map
							container
							className={'footer-container__map'}
						>
							<FullscreenControl />
							<GeolocationControl options={{ float: 'left' }} />
							{/* <ZoomControl options={{ float: 'right' }} /> */}
						</Map>
					</div>
				</YMaps>
			</div>
			<h4 className="footer-container__span">
				Copyright © 2023 • Breeze - Official • All rights reserved
			</h4>
		</div>
	);
}

export default Footer;
