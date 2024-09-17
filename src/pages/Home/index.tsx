import { Banner } from "./components/Banner";
import { Catalog } from "./components/Catalog";
import { HomeContainer } from "./styles";


export function Home() {
    return(
        <HomeContainer>
            <Banner></Banner>
            <Catalog></Catalog>
        </HomeContainer>
    )
}