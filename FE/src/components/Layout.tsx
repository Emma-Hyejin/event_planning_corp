import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="flex flex-row  h-screen">
			<div className="mt-10 mx-5 bg-zinc-100 w-screen">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
