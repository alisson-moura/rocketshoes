import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Sub-Total</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://images.lojanike.com.br/500x500/produto/193775_1849606_20191126114050.jpg"
                                alt="Jumpman"
                            />
                        </td>
                        <td>
                            <strong>Air Jordan 1 Jester</strong>
                            <span>$600,00</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido.</button>
                <Total>
                    <span>Total</span>
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}
