import React from 'react';
import { VagaContainer, VagaTitulo, VagaInfo, VagaDescricao, VagaButton } from './styles';

const Vaga = ({ titulo, empresa, localizacao, salario, contrato, descricao }) => {
  return (
    <VagaContainer>
      <VagaTitulo>{titulo}</VagaTitulo>
      <VagaInfo>
        <span>Empresa: {empresa}</span>
        <span>Localização: {localizacao}</span>
        <span>Salário: {salario}</span>
        <span>Contrato: {contrato}</span>
      </VagaInfo>
      <VagaDescricao>{descricao}</VagaDescricao>
      <VagaButton>Ver detalhes</VagaButton>
    </VagaContainer>
  );
};

export default Vaga;