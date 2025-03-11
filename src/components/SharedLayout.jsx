import { Outlet } from "react-router-dom";
import {Container, Header, Logo, Link} from '../styles/SharedLayout.styled';
import Footer from "../pages/Footer";



const SharedLayout = () => {

    return(
        <Container>
            <Header>
                <Logo/>
                    <nav>
                        <Link to="/portfolio">Cv</Link>
                        <Link to="/portfolio/projects">Projects</Link>
                        <Link to="/portfolio/certificates">Certificates</Link>
                        <Link to="/portfolio/about">About</Link>
                    </nav>
            </Header>
            <Outlet />
            <Footer/>
        </Container>
    )
}

export default SharedLayout;