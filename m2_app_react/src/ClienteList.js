import {List, Datagrid, TextField, NumberField,
    ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, Filter, DeleteButton, SearchInput, Create } from "react-admin";

const PostTitle = ({record}) => 
    <span>{record ? `${record.nome} ${record.apelido}` : ''}</span>

const PostFilter = (props) => <Filter {...props}>
    <SearchInput source="nome" alwaysOn />
    <ReferenceInput label="Oficina" source="idOficina" reference="oficinas" allowEmpty>
        <SelectInput optionText="nome" />
    </ReferenceInput>
</Filter>



export const ClienteList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID"/>
            <TextField source="nome" label="Nome"/>
            <TextField source="apelido" label="Apelido"/>
            <NumberField source="num_telefone" label="Número de Telefone"/>
            <TextField source="carta_conducao" label="Carta de Condução" emptyText=""/>
            <ReferenceField source="idOficina" label="Oficina" reference="oficinas">
                <TextField source="nome" />
            </ReferenceField>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);


export const ClienteEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" label="ID"/>
            <TextInput source="nome" label="Nome"/>
            <TextInput source="apelido" label="Apelido"/>
            <NumberInput source="num_telefone" label="Número de Telefone"/>
            <TextInput source="carta_conducao" label="Carta de Condução"/>
            <ReferenceInput source="idOficina" reference="oficinas" label="Oficina de Registo">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ClienteCreate = props => (
    <Create title="Registar Cliente" {...props}>
        <SimpleForm>
            <TextInput source="nome" label="Nome"/>
            <TextInput source="apelido" label="Apelido"/>
            <NumberInput source="num_telefone" label="Número de Telefone"/>
            <TextInput source="carta_conducao" label="Carta de Condução"/>
            <ReferenceInput source="idOficina" reference="oficinas" label="Oficina de Registo">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);





