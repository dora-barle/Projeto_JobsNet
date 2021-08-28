import { useState, useEffect } from 'react';
import { Title, Title2, FormInput, FormInput2, FormInput3, FormInput4, Body } from './styles';
import axios from 'axios';



const App = () =>{

  const fetchAddress = async() => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setform({ ...form, endereco: address.data.logradouro });
  };

  const createCandidato = async (candidato) => {
  // quando subir o backend vai ter uma url que tem que colocar do localhost
    const user = await axios.post('http://localhost:5000/registro', form);
    if(user.status === 200){
      alert('Seu curriculo foi registrado com sucesso');
    } else{
      alert('Deu errado');
    }    
  };

  const [form, setform] = useState({
    //igual a back end
    nome: '',
    cargoPretendido: '',
    mes: '',
    dia: '',
    ano: '',
    estadoCivil: '',
    sexo: '',
    email: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    celular: '',
    telefoneFixo1: '',
    telefoneFixo2: '',
    contato: '',
    identidade: '',
    cpf: '',
    veiculo: '',
    habilitacao: ''   

  });
  
  useEffect(()=>{
    console.log(form);
  }, [form])

  
  return (
    
    <Body>    
      <div>      
        <Title> FORMULARIO </Title>     
      </div>     
         
      <container>
      <div>      
       <Title2> DADOS PESSOAIS </Title2>   
      </div>
        <label> Nome Completo * </label>
        <FormInput onChange={(e) => {
          setform({ ...form, nome: e.target.value});
        }}value= {form.nome}></FormInput>
        
        <label> Cargo Pretendido </label>
        <FormInput onChange={(e) => {
          setform({ ...form, cargoPretendido: e.target.value});
        }}value= {form.cargoPretendido}></FormInput>      
      </container>
    
      <div>        
        <label> Mes </label>
        <FormInput2 onChange={(e) => {
          setform({ ...form, mes: e.target.value});
        }}value= {form.mes}></FormInput2>
        <label> Dia </label>
        <FormInput2 onChange={(e) => {
          setform({ ...form, dia: e.target.value});
        }}value= {form.dia}></FormInput2>
        <label> Ano </label>
        <FormInput2 onChange={(e) => {
          setform({ ...form, ano: e.target.value});
        }}value= {form.ano}></FormInput2>

        <label> Estado Civil </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, estadoCivil: e.target.value});
        }}value= {form.estadoCivil}></FormInput3>

        <label> Sexo </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, sexo: e.target.value});
        }}value= {form.sexo}></FormInput3>
      </div>
    
      <div>
      <label> Endereço * </label>
        <FormInput4 onChange={(e) => {
          setform({ ...form, endereco: e.target.value});
        }}value= {form.endereco}></FormInput4>
      </div>

      <div>
      <label> Bairro </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, bairro: e.target.value});
        }}value= {form.bairro}></FormInput3>
      <label> Cidade </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, cidade: e.target.value});
        }}value= {form.cidade}></FormInput3>
      <label> CEP </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, cep: e.target.value});
        }}value= {form.cep}></FormInput3>
      </div>

      <div>
      <label> Celular </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, celular: e.target.value});
        }}value= {form.celular}></FormInput3>
      <label> Telefone Fixo 1 </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, telefoneFixo1: e.target.value});
        }}value= {form.telefoneFixo1}></FormInput3>
      <label> Telefone Fixo 2 </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, telefoneFixo2: e.target.value});
        }}value= {form.telefoneFixo2}></FormInput3>
      </div>

      <div>
      <label> Contato </label>
        <FormInput onChange={(e) => {
          setform({ ...form, contato: e.target.value});
        }}value= {form.contato}></FormInput>
      <label> E-mail </label>
        <FormInput onChange={(e) => {
          setform({ ...form, email: e.target.value});
        }}value= {form.email}></FormInput>
      </div>

      <label> 
        <Title2> DOCUMENTOS </Title2>         
      </label>
      <div>
      <label> Identidade </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, identidade: e.target.value});
        }}value= {form.identidade}></FormInput3>
      <label> CPF </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, cpf: e.target.value});
        }}value= {form.cpf}></FormInput3>
      </div>
      <div>
      <label> Possui Veículo </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, veiculo: e.target.value});
        }}value= {form.veiculo}></FormInput3>
      <label> Habilitação </label>
        <FormInput3 onChange={(e) => {
          setform({ ...form, habilitacao: e.target.value});
        }}value= {form.habilitacao}></FormInput3>
      </div>

      <div>
        <button onClick={() => createCandidato()}> ENVIAR </button>
        <button onClick={() => fetchAddress()}> Procurar CEP </button>
      </div>  
      
    </Body>
  );
}

export default App;
