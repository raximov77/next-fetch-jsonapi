import {FC, memo} from 'react';
import Link from 'next/link';

const Navbar: FC = memo((): JSX.Element | null => {
    return (
        <nav className="container">
            <ul className="py-4 flex gap-x-8">
                <li className="text-white/80 hover:text-white">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="text-white/80 hover:text-white">
                    <Link href="/users">
                        <a>Users</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
});

export default Navbar;
