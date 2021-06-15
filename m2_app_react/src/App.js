import './App.css';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import React from 'react';
import { Admin, Resource,  } from "react-admin";
import lb4Provider from "react-admin-lb4";
import OficinaList from "./OficinaList";
import {OficinaEdit, OficinaCreate} from "./OficinaCE";
import {ClienteList, ClienteEdit, ClienteCreate} from "./ClienteList";
import {AutomovelList, AutomovelEdit, AutomovelCreate} from "./AutomovelList";
import {ReparacaoList, ReparacaoEdit, ReparacaoCreate} from "./ReparacaoList";
import {IntervencaoList, IntervencaoEdit,IntervencaoCreate} from "./IntervencaoList";
import {BasicInfo} from "./Dashboard";
import {theme} from "./Theme.js";



const dataProvider = lb4Provider("http://localhost:3000/");


const App = () => (
 <Admin theme={theme} dashboard = {BasicInfo} dataProvider={dataProvider}>
    <Resource name="oficinas" options={{ label: 'Oficinas' }} list={OficinaList} edit={OficinaEdit} create={OficinaCreate} icon={EmojiTransportationOutlinedIcon}/>
    <Resource name="clientes" options={{ label: 'Clientes' }} list={ClienteList} edit={ClienteEdit} create={ClienteCreate} icon={PeopleOutlineIcon}/>
    <Resource name="automovels" options={{ label: 'Automóveis' }} list={AutomovelList} edit={AutomovelEdit} create={AutomovelCreate} icon={DirectionsCarOutlinedIcon}/>
    <Resource name="reparacaos" options={{ label: 'Reparações' }} list={ReparacaoList} edit={ReparacaoEdit} create={ReparacaoCreate} icon={BuildOutlinedIcon}/>
    <Resource name="intervencaos" options={{ label: 'Intervenções' }} list={IntervencaoList} edit={IntervencaoEdit} create={IntervencaoCreate} icon={AssignmentTurnedInOutlinedIcon}/>
 </Admin>
);

export default App;

