import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
    return (
        <Layout title="Something Went Wrong" footer={false}>
            <p className="text-center">
                { statusCode ? 
                    `Could not load succesfully your user data: Status code ${statusCode}`
                    : "Could not get this page, sorry."
                }
            </p>
        </Layout>
    );
};

export default _error;