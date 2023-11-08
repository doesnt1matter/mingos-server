module.exports = (error, req, res, next) => 
{
    console.log(`\x1b[31mSTATUS:${error.status} MESSAGE: ${error.message}`);
    res.status(error.status).json({type: error.type, message: error.message});
}