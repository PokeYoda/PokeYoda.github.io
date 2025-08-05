import { useEffect, useRef } from 'react';

function Header({ isDark, setIsDark, selectedPage, setSelectedPage }) {
    const navRefs = useRef({});
    const indicatorRef = useRef(null);

    const navItems = ['Home', 'About Me', 'Projects', 'Contact'];

    // Moves the background to the selected nav item
    const updateIndicator = () => {
        const el = navRefs.current[selectedPage];
        const indicator = indicatorRef.current;

        if (!el || !indicator) return;

        const newRect = el.getBoundingClientRect();
        const containerRect = el.parentElement.parentElement.getBoundingClientRect();

        const newLeft = newRect.left - containerRect.left;
        const newWidth = newRect.width;

        const currentLeft = parseFloat(indicator.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        const currentWidth = parseFloat(indicator.style.width) || 0;

        const leftDiff = Math.abs(newLeft - currentLeft);
        const widthDiff = Math.abs(newWidth - currentWidth);

        const stretchWidth = leftDiff + newWidth;

        // Stretch phase
        if (newLeft < currentLeft) {
            indicator.style.transform = `translateX(${newLeft}px)`;
        }
        indicator.style.width = `${stretchWidth}px`;

        // Contract phase after delay
        setTimeout(() => {
            indicator.style.transform = `translateX(${newLeft}px)`;
            indicator.style.width = `${newWidth}px`;
        }, 150); // stretch duration before contracting
    };


    // Update when page changes or window resizes
    useEffect(() => {
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [selectedPage]);

    return (
        <nav className="bg-white border-b dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                {/* <a href="#" className="flex items-center space-x-3">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Logo"
                    />
                    <span className="text-2xl font-semibold dark:text-white">Flowbite</span>
                </a> */}

                <div className="hidden md:block relative">
                    {/* Background Indicator */}
                    <div
                        ref={indicatorRef}
                        className="absolute top-0 left-0 h-full bg-blue-700 rounded-md z-0"
                        style={{
                            width: 0,
                            transition: 'transform 300ms ease, width 300ms ease',
                            willChange: 'transform, width',
                        }}
                    />





                    {/* Nav Links */}
                    <ul className="relative z-10 flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item}>
                                <button
                                    ref={(el) => (navRefs.current[item] = el)}
                                    onClick={() => setSelectedPage(item)}
                                    className={`relative z-10 py-2 px-3 rounded-sm transition-colors duration-300
                    ${selectedPage === item
                                            ? 'text-white'
                                            : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400'
                                        }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dark Mode Toggle */}
                <div className="ms-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isDark}
                            onChange={() => setIsDark(!isDark)}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                        <span className="ms-3 text-2xl text-gray-900 dark:text-gray-300">🌗</span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default Header;
