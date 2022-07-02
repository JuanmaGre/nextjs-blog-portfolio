import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout title="Page Not Found" className="text-center">
        <div className="text-center">
            <h1 className="display-1">
                404
            </h1>
                <p>
                    Developing this page at the moment. It will be online soon. Please, return to{" "} 
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
