import {FC, memo, ReactElement} from 'react';

interface HeaderProps {
    children?: ReactElement;
}

const Header: FC<HeaderProps> = memo(({children}): JSX.Element | null => {
    return <header className="bg-slate-600">{children}</header>;
});

export default Header;
