import {List, Datagrid, TextField,
    ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberField, DeleteButton, Filter, Create, NumberInput,ReferenceInput } from "react-admin";

    const PostTitle = ({record}) => 
    <span>{record ? `${record.descricao}` : ''}</span>

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="descricao" alwaysOn />
    <ReferenceInput label="ID Reparação" source="idReparacao" reference="reparacaos" filterToQuery={searchText => ({ id: searchText })} allowEmpty>
        <TextInput source="idReparacao" alwaysOn />
    </ReferenceInput>
</Filter> 
    

export const IntervencaoList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID" />
            <TextField source="descricao" label="Descrição"/>
            <ReferenceField source="idReparacao" label="Identificador da Reparação" reference="reparacaos">
                <TextField source="id" />
            </ReferenceField>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const IntervencaoEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" label="ID"/>
            <NumberInput source="idReparacao" label="Identificador da Reparação"/>
            <TextInput source="descricao" label="Descrição"/>
        </SimpleForm>
    </Edit>
);

export const IntervencaoCreate = props => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="idReparacao" label="Identificação da Reparação"/>  
            <TextInput source="descricao" label="Descrição"/>
        </SimpleForm>
    </Create>
);



