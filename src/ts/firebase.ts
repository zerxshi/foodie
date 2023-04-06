import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3GCekSJfmdWkYLiyX43Hqpmp-D-h-QfI",
  authDomain: "foodie-7ce16.firebaseapp.com",
  projectId: "foodie-7ce16",
  storageBucket: "foodie-7ce16.appspot.com",
  messagingSenderId: "768043848606",
  appId: "1:768043848606:web:3dc742f7025a3877327c8f",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
