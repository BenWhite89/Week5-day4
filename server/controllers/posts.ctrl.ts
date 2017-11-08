import * as express from 'express';
import * as procedures from '../procedures/posts.proc';

let router = express.Router();

router.route('/')
    .get((req, res) => {
        procedures.GetPosts()
            .then(function(posts) {
                res.send(posts);
            }, function(err) {
                res.status(500).send(err);
            });
    })
    .post((req, res) => {
        procedures.CreatePost(req.body.userId, req.body.categoryId, req.body.title, req.body.content)
            .then(function(id: any) {
                res.status(201).send(id[0]);
            }, function(err) {
                res.status(500).send(err);
            });
    });

router.route('/:id')
    .get((req, res) => {
        procedures.GetPost(req.params.id)
            .then(function(post: any) {
                res.send(post[0]);
            }, function(err) {
                res.status(500).send(err);
            });
    })
    .patch((req, res) => {
        procedures.UpdatePost(req.params.id, req.body.categoryId, req.body.title, req.body.content)
            .then(function(posts) {
                res.status(204);
            }, function(err) {
                res.status(500).send(err);
            });
    })
    .delete((req, res) => {
        procedures.DeletePost(req.params.id)
            .then(function(id) {
                res.status(204);
            }, function(err) {
                res.status(500).send(err);
            });
    });

export default router;

