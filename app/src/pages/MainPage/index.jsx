import React, { useState } from 'react';

import { Container } from './style';

import api from '../../service/api';

export default function MainPage() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');

    async function fetch() {
        const response = await api.post('/api/cep', {cep});
        const { logradouro, bairro, localidade, uf }  = response.data;
        setLogradouro(logradouro);
        setBairro(bairro);
        setLocalidade(localidade);
        setUf(uf);
        setCep('');
    }

    return(
        <Container>
            <input placeholder='Digite o CEP' onChange={(e) => { setCep(e.target.value) }} value={cep} />
            <button onClick={fetch}>Consultar</button>
            <ul>
                <li>{logradouro}</li>
                <li>{bairro}</li>
                <li>{localidade}</li>
                <li>{uf}</li>
            </ul>
        </Container>
    )
}