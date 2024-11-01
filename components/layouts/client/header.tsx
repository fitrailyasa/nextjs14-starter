// components/layouts/client/header.tsx
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <h1>My Next.js App</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/auth/login">Login</Link></li>
                    <li><Link href="/auth/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
