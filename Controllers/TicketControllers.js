import TicketModel from "../Models/TicketModels.js";
export const postTicket = async (req, res , next) => {
    try {
        const {
            issueId,openBy,openOn,requestedFor,description,priority,status
          
        } = req.body;
    
        const newTicket = new TicketModel({
            issueId,openBy,openOn,requestedFor,description,priority,status
          
        });
    
        const savedTicket = await newTicket.save();
        res.status(201).json({ newId: savedTicket._id });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const getAllTicket = async (req, res, next) => {
    try {
      const tickets = await Invoice.find();
      res.status(200).json({ tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };