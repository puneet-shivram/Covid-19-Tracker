import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCjWFP0mq646sHT0UYDVphYgxQ1p6gXGk",
    authDomain: "covid-19-tracker-app-3641a.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-app-3641a.firebaseio.com",
    projectId: "covid-19-tracker-app-3641a",
    storageBucket: "covid-19-tracker-app-3641a.appspot.com",
    messagingSenderId: "453273563470",
    appId: "1:453273563470:web:f7d37adb1f5c656ffeee1f",
    measurementId: "G-7NG457ZZQ3"
  };
  class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
    }
    
    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
  }

  export default new Firebase();
