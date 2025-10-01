import React from 'react';
import Vaga from '../Vaga';
import { ListaVagasContainer, ListaVagasTitle, ListaVagasWrapper } from './styles';

const ListaVagas = () => {
  // Dados de exemplo para as vagas
  const vagas = [
    {
      id: 1,
      titulo: 'Desenvolvedor Front-end React',
      empresa: 'TechCorp',
      localizacao: 'São Paulo, SP',
      salario: 'R$ 7.000,00',
      contrato: 'CLT',
      descricao: 'Estamos procurando um desenvolvedor Front-end com experiência em React para trabalhar em projetos inovadores.'
    },
    {
      id: 2,
      titulo: 'Desenvolvedor Back-end Node.js',
      empresa: 'DataSystems',
      localizacao: 'Rio de Janeiro, RJ',
      salario: 'R$ 8.000,00',
      contrato: 'PJ',
      descricao: 'Vaga para desenvolvedor Back-end com conhecimentos em Node.js, Express e bancos de dados SQL e NoSQL.'
    },
    {
      id: 3,
      titulo: 'Desenvolvedor Full Stack',
      empresa: 'WebSolutions',
      localizacao: 'Belo Horizonte, MG',
      salario: 'R$ 9.500,00',
      contrato: 'CLT',
      descricao: 'Procuramos um desenvolvedor Full Stack para atuar em todas as etapas do desenvolvimento de aplicações web.'
    }
  ];

  return (
    <ListaVagasContainer>
      <ListaVagasTitle>Vagas em destaque</ListaVagasTitle>
      <ListaVagasWrapper>
        {vagas.map(vaga => (
          <Vaga 
            key={vaga.id}
            titulo={vaga.titulo}
            empresa={vaga.empresa}
            localizacao={vaga.localizacao}
            salario={vaga.salario}
            contrato={vaga.contrato}
            descricao={vaga.descricao}
          />
        ))}
      </ListaVagasWrapper>
    </ListaVagasContainer>
  );
};

export default ListaVagas;