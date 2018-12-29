import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZQEip13ef2kbJw3SNPFGFD-4QhN5_x50",
  authDomain: "chatbox-app-react-d982s.firebaseapp.com",
  databaseURL: "https://chatbox-app-react-d982s.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
