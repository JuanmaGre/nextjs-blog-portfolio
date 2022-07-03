import Layout from "../components/Layout";
import { certificates } from "../profile";


const CertificationCard = ({ certification }) => (
    <div className="blog col-md-4">
        <div className="card">
            <div className="overflow">
                <img src={certification.img} className="card-img-top" alt=""/>
            </div>
            <div className="card-body">
                <h1>{certification.name}</h1>
                <p>{certification.givenBy}</p>
            </div>
        </div>
    </div>
);


const certificate = () => {
    return (
        <Layout footer={false}>
            <h1 className="title2 text-center text-dark">My Blog</h1>
            <div className="rowBlog text-light">
                { certificates.map( (certification , i) => (
                    <CertificationCard certification={certification} key={i} />
                ))}
            </div>
        </Layout>
    );
};


export default certificate;