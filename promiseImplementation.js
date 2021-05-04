class Treasure {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = value => {
            if(this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
            }
        }

        const reject = err => {
            if(this.status === "pending") {
                this.status = "rejected";
                this.value = err;
            }
        }

        try {
            handler(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        if(this.status === "fulfilled") {
            onFulfilled(this.value)
        } else if (this.status === "rejected") {
            onRejected(this.value);
        }
    }

    catch(onFulfilled, onRejected) {
        if(this.status === "fulfilled") {
            onFulfilled(this.value)
        } else if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}

const testPromise = new Treasure((resolve, reject) => {
    reject('Implemented Promise works!!!')
});


testPromise.then((res) => {
    console.log('res == ', res);
}, (err) => {
    console.log('err == ', err);
});