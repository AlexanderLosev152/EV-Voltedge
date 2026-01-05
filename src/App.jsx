import { Features } from './components/widgets/Features/Features';
import { Header } from './components/widgets/Header/Header';
import { Hero } from './components/widgets/Hero/Hero';
import { Products } from './components/widgets/Products/Products';
import { Mobility } from './components/widgets/Mobility/Mobility';
import { Comfort } from './components/widgets/Comfort/Comfort';
import { Footer } from './components/widgets/Footer/Footer.jsx';

import './App.scss';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Products />
			<Features />
			<Mobility />
			<Comfort />
			<Footer />
		</>
	);
}

export default App;
