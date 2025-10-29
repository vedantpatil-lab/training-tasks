class vendingMachine{
    constructor(){
        this.denoms = [500, 200, 100, 50, 20, 10, 5, 2, 1];
        this.products = [
            {
                id: 1,
                name: "water",
                price: 50
            }
        ];
        this.selectedProduct = null;
        this.balance = 0
    }

    restock(product){
        const occupied = this.products.find(item => item.id === product.id)
        if(occupied){
            return {
                ok: false,
                message: "This product is present. Select other one."
            }
        }

        this.products.push(product);
        return {
                ok: true,
                message: "Product is restock successfully !"
            }
    }

    selectProduct(id){
        const product = this.products.find(item => item.id === id)
        if(!product){
            return {
                ok: false,
                message: "Unknown product"
            }
        };
        this.selectedProduct = product;
        return {
            ok: true,
            message: "Please insert the coins !",
        }

    }

    insertCoins(bill){
        if(!Number.isInteger(bill) || bill <=0){
            return {
                ok: false,
                message: "Unknown bill"
            }
        }

        this.balance += bill

        if(this.selectedProduct.price > this.balance){
            const dueAmount = this.selectedProduct.price - this.balance;
            // console.log(dueAmount)   
            return{
                ok:true,
                message: `Insert more ${dueAmount}`
            }
        }

        return this.dispense(this.selectedProduct)

    }

    dispense(product){
        this.products = this.products.filter(item => item.id !== product.id);

        const notesToReturn = this.returnChange()

        return {
            ok:true,
            message: `Product has been dispensed. Please collect your change : ${notesToReturn.join(", ")}`
        }
    }

    returnChange(){
        const coins = [];

        let remainingBalance = this.balance - this.selectedProduct.price;

        for(const note of this.denoms){
            while(remainingBalance >= note){
                coins.push(note)
                remainingBalance = remainingBalance - note
            }
        }
        return coins;
    }
}

const vm = new vendingMachine();

const data = vm.restock({
    id: 2,
    name: "water",
    price: 50
});

const product = vm.selectProduct(2);
console.log(product)

// // console.log(data)

// vm.selectProduct(1);
// vm.insertCoins(10)
vm.insertCoins(10)
const cm = vm.insertCoins(50)

console.log(cm)
// console.log(vm)

