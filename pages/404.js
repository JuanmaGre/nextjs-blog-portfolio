import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1 className="display-1 text-dark">
                404 - Page not found.
            </h1>
            <p className="text-dark">
                Developing this page at the moment. It will be online soon. Please, return to{" "} 
                <Link href="/">
                    <a className="text-dark">
                        Home
                    </a>
                </Link>
            </p>
        </div>
    </Layout>
);

export default custom404;
