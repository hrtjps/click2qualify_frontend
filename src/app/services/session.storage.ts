
export class SessionStorage {


	static get(key : string){
		let current = JSON.parse(localStorage.getItem(key));
		return current;
	}

	static set(key : string, data : any){
		let val = JSON.stringify(data);
		localStorage.setItem(key, val);
	}

}