import Layout from "../components/Layout";
import Link from 'next/link';
import { posts } from "../profile";


const PostCard = ({ post }) => (
    <div className="blog col-md-3">
        <div className="card">
            <div className="overflow">
                <img src={post.imageURL} className="card-img-top" alt=""/>
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                {/* <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                    <button className="btn btn-outline-light p-1">Read</button>
                </Link> */}
            </div>
        </div>
    </div>
);


const blog = () => {
    return (
        <Layout footer={false}>
            <h1 className="title2 text-center text-dark">My Blog</h1>
            <div className="row text-light">
                { posts.map( (post , i) => (
                    <PostCard post={post} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default blog;
