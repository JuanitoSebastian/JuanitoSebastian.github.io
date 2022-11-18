import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = () => {

    const scrollPosition = useScrollPosition();
    const scrollCutOff = 80;

    const isHeaderCollapsed = () => {
        return scrollPosition > scrollCutOff;
    };

    const headerTitle = () => {
        const title = ["Juan.fi"];
        const fullTitle = ["Juan", "Sebastian", "Covarrubias"]
        return isHeaderCollapsed() ? title : fullTitle;
    }

    const headerHeight = () => {
        return isHeaderCollapsed() ? 64 : 144;
    };

    const headerWrapperStyle = { height: `${headerHeight()}px` };

    return (
        <div style={headerWrapperStyle} className='w-full bg-white bg-opacity-80 fixed top-0 backdrop-blur z-20 transition-all ease-out duration-500 items-center overflow-hidden'>
            <header className="container mx-auto max-w-6xl px-4 pt-4 h-full">
                <div className="flex-row gap-8 items-center justify-end h-full flex transition-all duration-500">
                    <a href="/">
                        <div className="flex flex-col items-start justify-center">
                            {headerTitle().map((text) => (
                                <h1 key={text}>{text}</h1>
                            ))}
                        </div>
                    </a>
                    <div className="flex-grow"></div>
                    <a className="font-light hidden md:block" href="/#about-me">about me</a>
                    <a className="font-light hidden md:block" href="/#my-work">my work</a>
                    <a className="font-light hidden md:block" href="/#footer">contact</a>
                </div>
            </header>
        </div>
    );
};

export default Header;