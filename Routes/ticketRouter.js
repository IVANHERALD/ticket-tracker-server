import express from 'express'
import { postTicket,getAllTicket } from '../Controllers/TicketControllers.js'

const router = express.Router()
router.post("/createTicket",postTicket)
router.get("/getAllTickets",getAllTicket)

export default router;