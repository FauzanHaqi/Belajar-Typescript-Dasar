import Laptop from "./BaseLaptop"

class MacBook<T> extends Laptop<T> {
    constructor (type: T, numeric: boolean, touchButton: boolean) {
        super("MAcBook", type, numeric, touchButton);
    }
}

export default MacBook