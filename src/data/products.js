import IMG1 from '/images/product-1.jpg';
import IMG2 from '/images/product-2.jpg';
import IMG3 from '/images/product-3.jpg';

export const products = [
	{
		img: IMG1,
		title: 'Home Smart Charger',
		descr:
			'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
		price: { new: '$599', old: '$999' }
	},
	{
		img: IMG2,
		title: 'Portable EV Charger',
		descr:
			'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
		price: { new: '$299', old: '$599' }
	},
	{
		img: IMG3,
		title: 'Ultra-Fast Public Charging Station',
		descr:
			'A high-power Level 3 DC fast charger for public and commercial locations. Equipped with dual ports.',
		price: { new: '$12,999', old: '$20,999' }
	}
];
