import CarusolComponent from "./CarusolComponent";
import Footer from "./Footer";
import MoviesList from "./MoviesList";
import MyProfile from "./MyProfile";
import NavBar2 from "./NavBar2";
import NavbarComponent from "./NavbarComponent";

export default function Components(){
    return(
        <div>
            <NavbarComponent/>
            {/* <NavBar2/> */}
            <CarusolComponent/>
            <MoviesList/>
            <Footer/>
        </div>
    )
}