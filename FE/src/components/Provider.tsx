import { BrowserRouter } from 'react-router-dom';

function Provider({ children }: { children: React.ReactNode }) {
	return <BrowserRouter>{children}</BrowserRouter>;
}

export default Provider;
