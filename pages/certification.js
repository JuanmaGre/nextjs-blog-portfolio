import Layout from "../components/Layout";
import { certificates } from "../profile";


const CertificationCard = ({ certification }) => (
    <div className="blog col-md-12">
        <div className="card col-md-4 offset-md-4">
            <div className="overflow">
                <img src={certification.img} className="card-img-center" alt=""/>
            </div>
            <div className="titleCer card-body">
                <h1>{certification.name}</h1>
                <h4>{certification.givenBy}</h4>
                <h6>{certification.degree}</h6>
            </div>
        </div>
    </div>
);


const certificate = () => {
    return (
        <Layout>
            <h1 className="title2 text-center text-dark">Certifications</h1>
            <div className="rowCertification text-light">
                { certificates.map( (certification , i) => (
                    <CertificationCard certification={certification} key={i} />
                ))}
            </div>
        </Layout>
    );
};


export default certificate;