import express from 'express'
import { postTicket,getAllTicket,getLastTicketNumber,getTicketById,updateTicket, deleteTicket } from '../Controllers/TicketControllers.js'

const router = express.Router()
router.post("/createTicket",postTicket)
router.get("/getAllTickets",getAllTicket)
router.get("/getTicketNum",getLastTicketNumber)
router.get("/getTicketbyId",getTicketById)
router.put("/update",updateTicket)
router.delete("/deleteTicket",deleteTicket)
export default router;