import { makeAutoObservable } from 'mobx'

class Store {
	value = 0;
	constructor() {
		console.log('counter constructor')
		makeAutoObservable(this)
	}
	increment(){
		console.log('counter +')
		this.value++;
	}
	decrement(){
		console.log('counter -')
		this.value--;
	}
}

export default new Store();
