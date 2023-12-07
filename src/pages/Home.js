import Header from "./../components/header/Header";

const Home = () => {
    return ( 
        <>
            <Header />

            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, React, Redux Toolkit, HTML, CSS, Styled Components, Bootstrap, Material UI</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>Express, PostgreSQL, Prisma ORM</p>
                            </li>
                        </ul>

                </div>
            </main>
      </>
     );
}
 
export default Home;