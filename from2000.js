let date2000 = new Date(2000, 1, 1);

function from2000() {
    return new Date() - date2000;
}

module.exports = from2000;


