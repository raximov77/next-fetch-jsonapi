/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {FC, memo, ReactElement} from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

interface LayoutProps {
    children?: ReactElement;
}

const Layout: FC<LayoutProps> = memo(({children}): JSX.Element | null => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <main>{children}</main>
        </>
    );
});

export default Layout;
