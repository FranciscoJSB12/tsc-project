(async ()=> {
    const myCart = [];
    const products = [];
    const limit = 2;
  
    async function getProducts() {
      const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
        method: 'GET'
      });
      const data = await rta.json();
      products.concat(data);
    }
    function getTotal() {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].prize;
      }
      return total;
    }
    function addProduct(index) {
      if (getTotal() <= limit) {
        myCart.push(products[index]);
      }
    }
  
    await getProducts();
    addProduct(1);
    addProduct(2);
    const total = getTotal();
    console.log(total);
    const person = {
      name: 'Nicolas',
      lastName: 'Molina'
    }
    const rta = person;
    console.log(rta);
  });

//npx tsc src/demo.ts --target es6 ejecutamos usando target, de lo contrario usa es3
//npx tsc src/demo.ts --target es6 --outDir dist añadimos --outDir dist para indicar la carpeta de salida
//npx tsc src/*.ts --target es6 --outDir dist esto compila todos los archivos .ts y los guarda en dist
