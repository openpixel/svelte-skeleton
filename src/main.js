import App from './app.html';
import history from './history';

const app = new App({
	target: document.body
});

history.listen((location, action) => {
	app.set({
		location
	});
});

window.app = app;

export default app;