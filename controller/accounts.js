async function handleTransferMoney(req, res){
    return res.status(200).json({ request: "success transferMoney" })
}

async function handleSplitMoney(req, res){
    return res.status(200).json({ request: "success splitMoney" })
}

async function handleFixedDeposit(req, res){
    return res.status(200).json({ request: "success fixedDeposit" })
}

async function handleBankStatement(req, res){
    return res.status(200).json({ request: "success bankStatement" })
}

module.exports = {
    handleTransferMoney,
    handleSplitMoney,
    handleFixedDeposit,
    handleBankStatement
}