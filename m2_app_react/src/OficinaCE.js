import { NumberField,  Edit, SimpleForm, TextInput, NumberInput, Create } from "react-admin";

const PostTitle = ({record}) => 
    <span>{record ? `${record.nome}` : ''}</span>

export const OficinaEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" label="ID"/>
            <TextInput source="nome" label="Nome"/>
            <TextInput source="endereco" label="Endereço"/>
            <TextInput source="distrito" label="Distrito"/>
            <TextInput source="email" label="E-mail de Contato"/>
            <NumberInput source="num_contato" label="Número de Contato"/>
        </SimpleForm>
    </Edit>
);

export const OficinaCreate = (props) => (
        <Create title="Registar Oficina" {...props}>
            <SimpleForm>
                <TextInput source="nome" label="Nome"/>
                <TextInput source="endereco" label="Endereço"/>
                <TextInput source="distrito" label="Distrito"/>
                <TextInput source="email" label="E-mail de Contato"/>
                <NumberInput source="num_contato" label="Número de Contato"/>
            </SimpleForm>
        </Create>
);