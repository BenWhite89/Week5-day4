import * as express from 'express';
import * as procedures from '../procedures/users.proc';

let router = express.Router();

router.route('/')
    .get((req, res) => {
        procedures.GetUsers()
            .then(function(users) {
                res.send(users);
            }, function(err) {
                res.status(500).send(err);
            });
    })
    .post((req, res) => {
        procedures.CreateUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password)
            .then(function(id: any) {
                res.status(201).send(id[0]);
            }, function(err) {
                res.status(500).send(err);
            });
    });

export default router;