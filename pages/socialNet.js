import Layout from "../components/Layout";
import Error from './_error';


const SocialMedia = ( {user , statusCode} ) => {
    if (statusCode) {
        return <Error statusCode={statusCode}/>
    };
    
    return (
        <Layout footer={false}>
            <h1 className="title2 text-center text-dark">My Works</h1>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body mt-2 text-center text-light">
                        <h1 className="title3">{user.name}</h1>
                        <img src={user.avatar_url} className="img mt-2" alt=""/>
                        <a
                        href={user.blog}
                        target="_blank"
                        className="btn mt-4 my-2"
                        >
                            Go to Linkedin
                        </a>
                        <a
                        href={user.html_url}
                        target="_blank"
                        className="btn"
                        >
                            Go to Github
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

SocialMedia.proptypes= {};

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/JuanmaGre');
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode,
        },
    };
}


export default SocialMedia;
