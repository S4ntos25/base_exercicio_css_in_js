import styled from 'styled-components';

export const VagaContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const VagaTitulo = styled.h3`
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const VagaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  
  span {
    background-color: #f0f2f5;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #7f8c8d;
  }
`;

export const VagaDescricao = styled.p`
  color: #34495e;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const VagaButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;