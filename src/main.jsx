// import { render } from 'preact';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app.jsx';
import  store  from './app/store';
import { Provider } from 'react-redux';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container)

  console.log(store.getState());

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
