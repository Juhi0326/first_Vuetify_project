
import db from "@/fb";
//import * as firebase from "firebase/app";
import "firebase/auth";

const firestore = true;
const mySql = false;

export function setCompleteProject(project, id) {
    
    if (firestore) {
        //firestor method
        try {
            db.collection(project)
            .doc(id)
            .update({ status: "completed" })
            console.log("kiírtam valamit");
        } catch (error) {
            console.log(error);
        }
    } else if (mySql) {
        //MySql method
        console.log("mySql method",mySql)
        
    }
 
}


