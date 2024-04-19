var defaultNumOfProducts = 4;

if (document.querySelectorAll('.table-col').length > defaultNumOfProducts) {
    console.log("display overflow");
} else {
    console.log("hide overflow");
}