import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerIconsContainer, BannerLeftContainer, BannerTextContainer, IconWrapperContainer } from "./styles";

import bannerImage from '../../../../assets/banner-image.svg'

export function Banner() {
    return (
        <BannerContainer>
            <BannerLeftContainer>
                <BannerTextContainer>
                    <div>
                        <p>Encontre o café perfeito para qualquer hora do dia</p>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </div>
                </BannerTextContainer>

                <BannerIconsContainer>
                    <div>
                        <IconWrapperContainer variant="orange">
                            <ShoppingCart color="#FFFFFF" size={16} weight="fill"></ShoppingCart>
                            <span>Compra simples e segura</span>
                        </IconWrapperContainer>
                        <IconWrapperContainer variant="yellow">
                            <Timer color="#FFFFFF" size={16} weight="fill"></Timer>
                            <span>Entrega rápida e rastreada</span>
                        </IconWrapperContainer>
                    </div>

                    <div>
                        <IconWrapperContainer variant="black">
                            <Package color="#FFFFFF" size={16} weight="fill"></Package>
                            <span>Embalagem mantém o café intacto</span>
                        </IconWrapperContainer>
                        <IconWrapperContainer variant="purple">
                            <Coffee color="#FFFFFF" size={16} weight="fill"></Coffee>
                            <span>O café chega fresquinho até você</span>
                        </IconWrapperContainer>

                    </div>
                </BannerIconsContainer>

            </BannerLeftContainer>
            <img src={bannerImage}></img>
        </BannerContainer>
    )
}