import styled from 'styled-components';

export const HeroContainer = styled.section`
  background-color: #f0f2f5;
  padding: 3rem 2rem;
  text-align: center;
`;

export const HeroTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex: 1;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-end;
  
  &:hover {
    background-color: #2980b9;
  }
`;