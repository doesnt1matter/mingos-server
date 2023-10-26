module.exports = (err, req, res, next) => 
{
    console.log(`\x1b[31mSTATUS:${err.status}\nMESSAGE:"${err.message}" \n\x1b[30mSTACK:${err.stack}"`);
    res.status(err.status).json(err.message);
}