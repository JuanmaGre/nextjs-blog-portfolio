import Layout from "../components/Layout";
import Link from "next/link";
import { skills , experiences , projects , me } from "../profile";


const index = () => (
    <Layout>
    {/* header card */}
    <header className="rowHeader">
        <div className="col-md-12">
            <div className="card card-body bg-dark text-light animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-md-3">
                        <img src="portfolio.png" width="90%" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-9">
                        <h1>Juan Manuel Grehuello</h1>
                        <h3 className="text-secondary">Full Stack Developer</h3>
                        <p className="mt-4">
                            Since my childhood I have always been passionate about internalizing myself in everything that was the
                            operation of computers, I am fascinated by technological progress and that is why when I was presented
                            with the opportunity to dedicate myself to this industry I did not hesitate and I faced it from the first day with
                            a lot of enthusiasm and conviction.
                        </p>
                        <Link href="/hireMe">
                            <a className="btn btn-outline-light p-2">Hire Me</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/* Second Section */}
    <section className="row no-gutters py-2">
        <div className="rowSkills col-md-3 offset-md-1">
            <div className="card bg-light text-dark animate__animated animate__fadeInLeft">

                {/* Skills Section */}
                <div className="card-body">
                    <h1 className="title">Skills</h1>
                    {skills.map( ({skill, percentage} , i) => (
                        <div key={i}>
                            <h6>
                                {skill}
                            </h6>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${percentage}%` }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="col-md-7">
            <div className="card bg-light text-dark animate__animated animate__fadeInRight">
                
                {/* Experience Section */}
                <div className="card-body">
                    <h1 className="title">About me</h1>
                    <ul>
                        {me.map(( {description} , index) => (
                            <li key={index}>
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h1 className="title">Experience</h1>
                    <ul>
                    {experiences.map( ({ title, description, from, to } , index) => (
                        <li key={index}>
                            <h3 className="text-secondary">{title}</h3>
                            <h5>{from} {to ? `- ${to}` : "- current"}</h5>
                            <p>{description}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Portofolio Section */}
    <section>
        <div className="rowProjects">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title2">Projects</h1>
                        </div>
                            
                        {projects.slice(0, 6).reverse().map(({name , description , image , mainURL } , i) => (
                            <div className="col-md-4 py-3" key={i}>
                                <div className="card h-80 bg-light text-dark">
                                    <div className="row">
                                        <img 
                                            src={`/${image}`}
                                            alt=""
                                            className="card-body card-img-top"
                                        />
                                    </div>
                                        <h4 className="text-center">{name}</h4>
                                        
                                        <div className="card-body text-dark">
                                            <p>{description}</p>
                                            <a
                                                href={mainURL}
                                                className="p-1 btn-outline-dark"
                                                target="_blank"
                                                >Go to Website</a>
                                        </div>
                                </div>
                            </div>
                        ))}
                            <div className="col-md-12">
                                <div className="text-center">
                                    <Link href="/projects">
                                        <a className="btn">More projects</a>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Layout>
);

export default index;
