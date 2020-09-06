import React from "react";
import { Container } from "./styles";
import CargoForm from "../../../components/CargoForm";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { createCargo } from "../../../store/cargo/actions";

interface InformacaoCargoPageProps
  extends RouteComponentProps<any>,
    React.Props<any> {}

interface CargoFormData {
  descricao: string;
}

const CadastroCargoPage: React.FC<InformacaoCargoPageProps> = (props) => {


  const { register, handleSubmit } = useForm<CargoFormData>();
  const dispatch = useDispatch();
  const onSubmit = (data: CargoFormData) => {
    dispatch(createCargo(data.descricao));
   
    props.history.push("/cargos")
  };

  return (
    <Container>
      <h2>Cadastro de cargo </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CargoForm inputRefs={{ descricaoRef: register }}/>
        <Button type="submit" btnTheme="success">
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default CadastroCargoPage as React.FC;
