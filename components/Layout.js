import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import nProgress from "nprogress";
import NProgress from "nprogress";


const Layout = ({ children , title ,  footer = true, dark = false }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouterChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouterChange);
        router.events.on("routeChangeComplete", () => NProgress.done());
        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouterChange);
        };
    }, []);


    return (
        <>
        <Navbar />

        <main className="main">
            {title && (
                <h1 className="bg-light">
                    {title}
                </h1>
            )}
            {children}
        </main>

                                {/* - {new Date().getFullYear()} */}
        {
            footer && (
                <footer className="bg-dark text-light text-center">
                    <div className="container p-1">
                        <h6>&copy; Juan Manuel Grehuello Portfolio</h6>
                        <p>2023. All rights reserved</p>
                    </div>
                </footer>
            )
        }
    </>
    );
};

export default Layout;