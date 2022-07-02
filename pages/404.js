import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout title="Page Not Found">
        <div className="text-center">
            <h1 className="display-1">
                404
            </h1>
                <p>
                    This page doesn't exists. Please, return to{" "} 
                <Link href="/">
                <a>
                    Home
                </a>
                </Link>
            </p>
        </div>
    </Layout>
);

export default custom404;
