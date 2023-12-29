import express from 'express'
import { postTicket,getAllTicket,getLastTicketNumber } from '../Controllers/TicketControllers.js'

const router = express.Router()
router.post("/createTicket",postTicket)
router.get("/getAllTickets",getAllTicket)
router.get("/getTicketNum",getLastTicketNumber)
export default router;