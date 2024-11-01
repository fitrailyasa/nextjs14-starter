// components/layouts/admin/sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
    return (
        <header>
            <h1>Content Management System</h1>
            <nav>
                <ul>
                    <li><Link href="/admin/dashboard">Dashboard</Link></li>
                    <li><Link href="/admin/user">User Management</Link></li>
                    <li><Link href="/admin/product">Product Management</Link></li>
                    <li><Link href="/admin/category">Category Management</Link></li>
                    <li><Link href="/">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Sidebar;
