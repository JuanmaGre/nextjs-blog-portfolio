import Layout from "../components/Layout";
import { githubData } from "../profile";


const SocialMediaCard = ({ user }) => (
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <div className="card card-body mt-2 text-center text-light">
                <h1 className="title3">{user.name}</h1>
                <img src={user.img} className="img mt-2" alt=""/>
                <a
                href={user.linkURL}
                target="_blank"
                className="btn mt-4 my-2"
                >
                    Go to Linkedin
                </a>
                <a
                href={user.githURL}
                target="_blank"
                className="btn"
                >
                    Go to Github
                </a>
            </div>
        </div>
    </div>
);

const socialMedia = () => {
    return (
    <Layout>
        <h1 className="title2 text-center text-dark">My Works:</h1>
        <div className="row2">
            { githubData.map( ( user , i) => (
                <SocialMediaCard user={user} key={i} />
            ))}
        </div>
    </Layout>
    )
};


export default socialMedia;
