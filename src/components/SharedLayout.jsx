import { Outlet } from "react-router-dom";
import {Container, Header, Logo, Link} from '../styles/SharedLayout.styled';
import Footer from "../pages/Footer";



const SharedLayout = () => {

    return(
        <Container>
            <Header>
                <Logo/>
                    <nav>
                        <Link to="/">Cv</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/certificates">Certificates</Link>
                        <Link to="/about">About</Link>
                    </nav>
            </Header>
            <Outlet />
            <Footer/>
        </Container>
    )
}

export default SharedLayout;