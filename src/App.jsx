import './App.sass';
import Categories from './componets/categories/Categories';
import Description from './componets/description/Descpription';
import Footer from './componets/footer/Footer';
import Header from './componets/header/Header';
import Main from './componets/main/Main';
import Popular from './componets/popular/Popular';
import Review from './componets/review/Review';
import Post from './componets/section-email/Post';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Categories />
			<Description />
			<Popular />
			<Review />
			<Post />
			<Footer />
		</div>
	);
}

export default App;
