import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


class firebase{
    constructor(config){
        this.app = initializeApp(config);
        this.analytics = getAnalytics(this.app);
        this.storage = getFirestore(this.app);
    }

    get = async (col, attr) => {
         let qry = [];
         if(attr['query'] !== undefined && Array.isArray(attr['query'])){
            attr['query'].forEach((x)=>{
                qry.push(where(x.field, x.cond, x.value));
            });
         }
         const q = query(collection(this.storage, col), ...qry);
         let data = [];
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({_id: doc.id, ...doc.data()});
           // console.log(doc.id, " => ", doc.data());
          });
          return data;
        
    }

}

export default firebase;