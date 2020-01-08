const { Router } = require('express');
const router = Router();


router.post('/send-email',(req,res) =>{
    const {name, email, phone, enterprice, description} = req.body;
    
    contentHMTL = `
    <h1>User information: </h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>User phone: ${phone}</li>
        <li>User enterprice: ${enterprice}</li>
        <li>User description: ${description}</li>
    </ul>
    <p>Message</p>
    `;
    console.log(contentHMTL)
    res.send("received");
});

module.exports = router;