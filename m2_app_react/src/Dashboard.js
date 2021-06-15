import * as React from "react";
import { Card, CardContent, CardHeader,  } from '@material-ui/core';
import { useGetList, Loading,    } from "react-admin";


const AllOficinas = () => {
    
    const { data, ids, loading, error } = useGetList(
        'oficinas',
        { field: 'nome', order: 'DESC' }
    );

    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    
    return (
        <ul>
            {ids.map(id =>
                <li key={id}>{data[id].nome}</li>
            )}
        </ul>
    );
};

const CountClientes = () => {
    
    const { data, ids, loading, error } = useGetList(
        'clientes',
    );

    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    
    return (
        <ul>
            <li>Total de Clientes: {ids.length}</li>
        </ul>   
    );
};

const CountRepa = () => {
    
    const { data, ids, loading, error } = useGetList(
        'reparacaos',
    );

    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    
    return (
        <ul>
            <li>Total de Reparações: {ids.length}</li>
        </ul> 
    );
};

const CountAuto = () => {
    
    const { data, ids, loading, error } = useGetList(
        'automovels',
    );


    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    
    return (
        <ul>
            <li>Total de Automóveis: {ids.length}</li> 
        </ul>  
    );
};

export const BasicInfo = (...props) => (
    <Card>
        <CardHeader title="Informações básicas:" />
        <CardContent>
            <div>
                <AllOficinas/>
                <CountClientes/> 
                <CountAuto/>
                <CountRepa/>
            </div>
        </CardContent>
        
    </Card>
);



