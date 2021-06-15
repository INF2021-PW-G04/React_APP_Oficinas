import {List, Datagrid, TextField, NumberField, DateField,
    ReferenceField, EditButton, Edit, SimpleForm, NumberInput, DateInput, ReferenceInput, SelectInput, DeleteButton, Filter, AutocompleteInput, Create,TextInput, } from "react-admin";


const PostTitle = ({record}) => 
    <span>{record ? `Reparação - ${record.id}` : ''}</span>

const PostFilter = (props) => <Filter {...props}>
    <ReferenceInput label="Oficina" source="idOficina" reference="oficinas" allowEmpty>
        <SelectInput optionText="nome" />
    </ReferenceInput>
    <ReferenceInput label="Matrícula" source="idAutomovel" reference="automovels" filterToQuery={searchText => ({ matricula: searchText })} allowEmpty alwaysOn>
        <AutocompleteInput optionText="matricula" />
    </ReferenceInput>
    <ReferenceInput label="Responsável" source="idCliente" reference="clientes" filterToQuery={searchText => ({ nome: searchText })} allowEmpty>
        <AutocompleteInput optionText="nome" />
    </ReferenceInput>
    <ReferenceInput label="ID Responsável" source="idCliente" reference="clientes" filterToQuery={searchText => ({ id: searchText })} allowEmpty>
        <TextInput source="id"/>
    </ReferenceInput>
</Filter>    




export const ReparacaoList = props => (

    <List filters={<PostFilter />} {...props} >
        <Datagrid rowClick={(id, basePath, record)=>{return `intervencaos?filter=%7B%22idReparacao%22%3A%22${record.id}%22%7D&order=ASC&page=1&perPage=10&sort=descricao`}} title="Lista de Intervenções">
            <NumberField source="id" />
            <DateField source="data" />
            <NumberField source="custo" />
            <ReferenceField source="idAutomovel" label="Matrícula" reference="automovels">
                <TextField source="matricula" />
            </ReferenceField>
            <ReferenceField source="idAutomovel" label="Marca" reference="automovels">
                <TextField source="marca" />
            </ReferenceField>
            <ReferenceField source="idCliente" label="Responsável" reference="clientes">
                <TextField source="nome" />
            </ReferenceField>
            <ReferenceField source="idCliente" label="Contato" reference="clientes">
                <TextField source="num_telefone" />
            </ReferenceField>
            <ReferenceField source="idOficina" label="Oficina" reference="oficinas">
                <TextField source="nome" />
            </ReferenceField>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);


export const ReparacaoEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" label="ID"/>
            <DateInput source="data" label="Data da Reparação" />
            <NumberInput source="custo" label="Custo"/>
            <ReferenceInput source="idOficina" reference="oficinas" label="Oficina de Reparação">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput source="idCliente" reference="clientes" label="Cliente Responsável">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput source="idAutomovel" reference="automovels" label="Matrícula do Automóvel">
                <SelectInput optionText="matricula" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ReparacaoCreate = props => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <DateInput source="data" label="Data da Reparação" />
            <NumberInput source="custo" label="Custo"/>
            <ReferenceInput source="idOficina" reference="oficinas" label="Oficina de Reparação">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput source="idCliente" reference="clientes" label="Cliente Responsável">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput source="idAutomovel" reference="automovels" label="Matrícula do Automóvel">
                <SelectInput optionText="matricula" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
