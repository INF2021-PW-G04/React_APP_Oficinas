import {List, Datagrid, TextField, NumberField,
    ReferenceField, EditButton, Edit, SimpleForm, SearchInput, TextInput, NumberInput, ReferenceInput, SelectInput, Filter, DeleteButton, Create, AutocompleteInput  } from "react-admin";


const PostTitle = ({record}) => 
    <span>{record ? `${record.id}-${record.marca} ${record.modelo}` : ''}</span>

const PostFilter = (props) => <Filter {...props}>
    <SearchInput source="matricula" alwaysOn />
    <ReferenceInput label="Responsável" source="idCliente" reference="clientes" filterToQuery={searchText => ({ nome: searchText })} allowEmpty>
        <AutocompleteInput optionText="nome" />
    </ReferenceInput>
    <ReferenceInput label="ID Responsável" source="idCliente" reference="clientes" filterToQuery={searchText => ({ id: searchText })} allowEmpty>
        <TextInput source="id"/>
    </ReferenceInput>
</Filter>

export const AutomovelList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID"/>
            <TextField source="matricula" label="Matrícula"/>
            <TextField source="marca" label="Marca"/>
            <TextField source="modelo" label="Modelo"/>
            <NumberField source="ano" label="Ano"/>
            <TextField source="cor" label="Cor"/>
            <ReferenceField source="idCliente" label="Responsável" reference="clientes">
                <TextField source="nome" />
            </ReferenceField>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const AutomovelEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" label="ID"/>
            <TextInput source="matricula" label="Matrícula"/>
            <TextInput source="marca" label="Marca"/>
            <TextInput source="modelo" label="Modelo"/>
            <NumberInput source="ano" label="Ano"/>
            <TextInput source="cor" label="Cor"/>
            <ReferenceInput source="idCliente" reference="clientes" label="Responsável">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const AutomovelCreate = props => (
    <Create title="Registar Automóvel" {...props}>
        <SimpleForm>
            <TextInput source="matricula" label="Matrícula"/>
            <TextInput source="marca" label="Marca"/>
            <TextInput source="modelo" label="Modelo"/>
            <NumberInput source="ano" label="Ano"/>
            <TextInput source="cor" label="Cor"/>
            <ReferenceInput source="idCliente" reference="clientes" label="Responsável">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

