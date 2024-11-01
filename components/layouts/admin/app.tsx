// components/
import Sidebar from './sidebar';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
