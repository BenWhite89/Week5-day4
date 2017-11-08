import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import check from './middleware/assetcheck';
import api from './api';

let app = express();

let clientPath = path.join(__dirname, '../client');

app.use(express.static(clientPath));
app.use(bodyParser.json());

app.get('*', check);
app.use('/api', api);


app.listen(3000);