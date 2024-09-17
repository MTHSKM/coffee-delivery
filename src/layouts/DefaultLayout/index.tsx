import { Outlet } from "react-router-dom";
import { Header } from '../../components/Header'
import { LayerContainer } from "./styles";

export function DefaultLayout() {
    return(
        <LayerContainer>
            <Header></Header>
            <Outlet></Outlet>
        </LayerContainer>
    )
}