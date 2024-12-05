const cashbackService = require("../services/cashbackService");

const cashbackController = {
  sendCashback: async (req, res, next) => {
    try {
      const { uid } = req.params;
      const { amount } = req.body;

      console.log(`Processing cashback for uid: ${uid}, amount: ${amount}`);

      if (!amount || amount <= 0) {
        console.warn(`Invalid amount attempted: ${amount}`);
        return res.status(400).json({ message: "Invalid amount" });
      }

      const result = await cashbackService.processCashback(uid, amount);

      if (result.status !== 200) {
        return res.status(result.status).json({ message: result.message });
      }

      console.log(`Successfully processed cashback for uid: ${uid}, amount: ${amount}`);
      res.setHeader("Connection", "keep-alive");
      return res.json({ message: "Cashback sent" });
    } catch (error) {
      console.error("Cashback processing error:", {
        error: error,
        uid: req.params.uid,
        stack: error.stack,
      });

      if (!res.headersSent) {
        return res.status(500).json({
          message: "Error processing cashback",
          error: error.message,
        });
      }
      next(error);
    }
  },
};

module.exports = cashbackController;
