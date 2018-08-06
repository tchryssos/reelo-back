const express = require('express')
const router = express.Router()

// Controller
const player_controller = require('../controllers/player.controller')


// GET
router.get('/:id', player_controller.player_details)

// POST
router.post('/create', player_controller.player_create)

// PATCH
router.patch('/:id/update', player_controller.player_update)
router.patch('/update-elo', player_controller.update_elo)

// DELETE
router.delete('/:id/delete', player_controller.player_delete)

module.exports = router
