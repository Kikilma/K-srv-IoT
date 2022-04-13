function hello() {
    setTimeout(() => {
        console.log(" Hola kikilma desde docker node AWS :) ");
        hello();
    }, 1000);
}

hello(); 