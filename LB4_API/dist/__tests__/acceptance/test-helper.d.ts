import { Lb4OficinasApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Lb4OficinasApplication;
    client: Client;
}
