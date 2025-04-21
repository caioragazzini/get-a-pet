const express = require('express');

const router =express.Router();

router.get('/', (_req, res) => {
    res.json({
        status: "Vc está logado",
    });
});

module.exports = router;