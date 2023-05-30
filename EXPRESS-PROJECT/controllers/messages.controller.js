 function g_m(req, res){
    res.send("Hii")
}

function p_m(req, res){
    console.log('Updating messages...');
}

module.exports = {
    g_m,
    p_m,
}