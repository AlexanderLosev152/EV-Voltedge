import { Features } from './components/widgets/Features/Features';
import { Header } from './components/widgets/Header/Header';
import { Hero } from './components/widgets/Hero/Hero';
import { Products } from './components/widgets/Products/Products';

import './App.scss';
import { Mobility } from './components/widgets/Mobility/Mobility';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Products />
			<Features />
			<Mobility />
		</>
	);
}

export default App;
