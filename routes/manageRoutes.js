const { Router } = require("express");

const {
    handleTransferMoney,
    handleSplitMoney,
    handleFixedDeposit,
    handleBankStatement 
    } = require("../controller/accounts")

const router = Router();

router.post("/transferMoney", handleTransferMoney);
router.post("/splitMoney", handleSplitMoney);
router.post("/fixedDeposit", handleFixedDeposit);
router.post("/bankStatement", handleBankStatement);

module.exports = router;