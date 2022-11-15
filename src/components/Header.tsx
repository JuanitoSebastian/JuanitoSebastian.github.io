import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = () => {

    const scrollPosition = useScrollPosition();

    const classNames = (...classes: [string]) => {
        return classes.filter(Boolean).join(' ')
    }

    const headerHeight = () => {
        const offset = 144 - scrollPosition;
        return offset < 64 ? 64 : offset;
    };

    const navMargin = () => {
        const offset = 40 - scrollPosition;
        return offset < 8 ? 8 : offset;
    };

    const headerWrapperStyle = { height: `${headerHeight()}px` };
    const navStyle = { marginTop: `${navMargin()}px` };

    return (
        <div style={headerWrapperStyle} className='w-full bg-white bg-opacity-80 fixed top-0 backdrop-blur z-20 transition items-center overflow-hidden shadow-lg'>
            <header className="container mx-auto max-w-6xl px-4 pt-4">
                    <div className="grid grid-cols-2 w-full h-full items-start">
                        <div className="flex flex-col gap items-start">
                            <a href="/">
                                <div className="flex flex-row">
                                    <h1 className="">Juan</h1>
                                    <h1 className={classNames(scrollPosition > 0 ? 'visible' : 'invisible')}>.fi</h1>
                                </div>
                                <h1 className={classNames(scrollPosition > 0 ? 'invisible' : 'visible')}>Sebastian</h1>
                                <h1 className={classNames(scrollPosition > 0 ? 'invisible' : 'visible')}>Covarrubias</h1>
                            </a>
                        </div>
                        <nav style={navStyle} className="flex-row gap-8 items-center justify-end md:flex hidden">
                            <a className="font-light" href="/#about-me">about me</a>
                            <a className="font-light" href="/#my-work">my work</a>
                            <a className="font-light" href="/#footer">contact</a>
                        </nav>
                    </div>
            </header>
        </div>
    );
};

export default Header;

// w-full bg-white bg-opacity-50 fixed top-0 backdrop-blur z-20 h-36