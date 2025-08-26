

const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //! Yo quiero mi dinero!!
        resolve(100);
        reject('mi amigo se perdio');
    },200)
});

myPromise.then(
    mymoney => {
        console.log(`Tengo mi dinero ${mymoney}`)
    }).catch(reason => {
        console.warn(reason);
}).finally(() => {
    console.log('Pues a seguir con mi vida');
})
;