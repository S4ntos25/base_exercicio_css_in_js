import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, FormContainer, InputGroup, Label, Input, Select, Button } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Encontre o emprego dos seus sonhos</HeroTitle>
      <HeroSubtitle>Somos o site com mais vagas de tecnologia no mercado, direcionadas a front-end, back-end e fullstack!</HeroSubtitle>
      
      <FormContainer>
        <InputGroup>
          <Label htmlFor="cargo">Cargo</Label>
          <Input type="text" id="cargo" name="cargo" placeholder="Digite o cargo" />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="local">Local</Label>
          <Input type="text" id="local" name="local" placeholder="Digite a cidade" />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="contrato">Tipo de contrato</Label>
          <Select id="contrato" name="contrato">
            <option value="">Selecione</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
            <option value="freelancer">Freelancer</option>
          </Select>
        </InputGroup>
        
        <Button type="submit">Procurar</Button>
      </FormContainer>
    </HeroContainer>
  );
};

export default Hero;