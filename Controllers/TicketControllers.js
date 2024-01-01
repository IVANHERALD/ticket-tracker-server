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
      const tickets = await TicketModel.find();
      res.status(200).json({ tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  export const getLastTicketNumber = async (req, res, next) => {
    try {
      const lastTicket = await TicketModel.findOne().sort({ issueId: -1 }).limit(1);
      const lastTicketNumber = lastTicket ? lastTicket.issueId : 0;
      res.status(200).json({ lastTicketNumber });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
export const getTicketById = async (req, res, next) => {

  const id = req.query._id;
  if(!id)
  {
    return res.status(400).json({message:'Missing query parameter: id'});
  }
  try {
    const Ticket = await TicketModel.findById(id);
    res.status(200).json({ Ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateTicket = async(req,res,next) =>{
  const id = req.query._id; 
  try {
    const updatedTicket = req.body; 
    if (!id) {
      console.log(id)
      return res.status(400).json({ message: 'Ticket ID is required for updating.' });
    }

    const existingTicket = await TicketModel.findById(id);
    if (!existingTicket) {
      return res.status(404).json({ message: 'Ticket not found.' });
    }
    const updated = await TicketModel.findByIdAndUpdate(id, updatedTicket, { new: true });
    return res.status(200).json({ message: 'Ticket updated successfully.', updated });
  } catch (error) {
    console.error('Error updating Ticket:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
export const deleteTicket = async (req, res, next) => {
  const id = req.query._id;

  try {
    if (!id) {
      return res.status(400).json({ message: 'Ticket ID is required for deletion.' });
    }

    const existingTicket = await TicketModel.findById(id);
    if (!existingTicket) {
      return res.status(404).json({ message: 'Ticket not found.' });
    }

    await TicketModel.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Ticket deleted successfully.' });
  } catch (error) {
    console.error('Error deleting Ticket:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
