// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {environment} from "../../environments/environment";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// const app = initializeApp(environment.firebaseConfig)
// const analytics = getAnalytics(app)
// export const db = getFirestore(app)
// export async function getCities(db :any) {
//   const citiesCol = collection(db, 'list-token');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
