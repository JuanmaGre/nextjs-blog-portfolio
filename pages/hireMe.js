import Layout from "../components/Layout";
import { contactData } from "../profile";


const ContactCard = ({ hire }) => (
    <div className="col-md-4 offset-md-4">
        <div className="card">
            <div className="overflow">
                <img src={hire.img} className="card-img-top" alt=""/>
            </div>
            <div className="card-body text-center">
                <h3>{hire.name}</h3>
                <h5 className="text-secondary">{hire.degree}</h5>
                <h6 className="mt-4">{hire.phoneNumber}</h6>
                <h6>{hire.eMail}</h6>
                <a
                href={hire.whatsapp}
                target="_blank"
                className="btn my-2"
                >
                    Whatsapp:
                </a>
            </div>
        </div>
    </div>
);

const hireMe = () => {
    return (
    <Layout>
        <h1 className="title2 text-center text-dark">Contact Me:</h1>
        <div className="row2">
            { contactData.map( ( hire , i) => (
                <ContactCard hire={hire} key={i} />
            ))}
        </div>
    </Layout>
    )
}

export default hireMe;