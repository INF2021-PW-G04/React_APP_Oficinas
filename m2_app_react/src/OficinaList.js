import {List, Datagrid, TextField, NumberField, EmailField, EditButton, TextInput, Filter, DeleteButton, AutocompleteInput } from "react-admin";

const PostFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn />
        <AutocompleteInput optionText="nome" />
    </Filter>

 const OficinaList = props => {

    return(
        <List {...props} filters={<PostFilter />} title='Lista de Oficinas'>
            <Datagrid rowClick={(id, basePath, record)=>{return `clientes?filter=%7B%22idOficina%22%3A%22${record.id}%22%7D&order=ASC&page=1&perPage=10&sort=nome`}}>
                <NumberField source="id" label="ID"/>
                <TextField source="nome" label="Nome"/>
                <TextField source="endereco" label="Endereço"/>
                <TextField source="distrito" label="Distrito"/>
                <EmailField source="email" label="E-mail de Contato"/>
                <NumberField source="num_contato" label="Número de Contato"/>
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
    )
 }

 export default OficinaList;











