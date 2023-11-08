module.exports = (error, req, res, next) => 
{
    console.log(`\x1b[31mSTATUS:${error.status}\nMESSAGE:"${error.message}""`);
    res.status(error.status).json({type: error.type, message: error.message});
}