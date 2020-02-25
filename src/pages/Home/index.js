import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://images.lojanike.com.br/500x500/produto/99904_783137_20190704203531.png"
                    alt="Jumpman"
                />
                <strong>Air Jordan Jumpman</strong>
                <span>$600,00</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/500x500/produto/195056_1802367_20191114122851.jpg"
                    alt="Jumpman"
                />
                <strong>Air Jordan 1 Mid</strong>
                <span>$600,00</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/500x500/produto/180596_1772586_20191029224327.png"
                    alt="Jumpman"
                />
                <strong>Jordan React Havoc</strong>
                <span>$600,00</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images.lojanike.com.br/500x500/produto/193775_1849606_20191126114050.jpg"
                    alt="Jumpman"
                />
                <strong>Air Jordan 1 Jester</strong>
                <span>$600,00</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
