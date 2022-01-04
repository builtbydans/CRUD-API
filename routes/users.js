/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';

import {
  createUser, getUser, findUser, updateUser, deleteUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', findUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
