import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import AboutMe from "./AboutMe";

function Portfolio() {
    const [isDark, setIsDark] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Home");

    // Function to render the correct component with animation
    const renderPage = (key) => {
        const pageProps = {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.4 }
        };

        switch (key) {
            case "Home":
                return <motion.div key="Home" {...pageProps}><Home /></motion.div>;
            case "About Me":
                return <motion.div key="AboutMe" {...pageProps}><AboutMe /></motion.div>;
            case "Projects":
                return <motion.div key="Projects" {...pageProps}><Projects /></motion.div>;
            case "Contact":
                return <motion.div key="Contact" {...pageProps}><Contact /></motion.div>;
            default:
                return <motion.div key="Default" {...pageProps}><Home /></motion.div>;
        }
    };

    return (
        <div className={`min-h-screen ${isDark ? "dark" : ""} bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>

            <Header
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDark={isDark}
                setIsDark={setIsDark}
            />

            <AnimatePresence mode="wait">
                {renderPage(selectedPage)}
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default Portfolio;
