import db from "@/fb";
//import * as firebase from "firebase/app";
import "firebase/auth";

const firestore = true;
const mySql = false;

export async function setCompleteProject(project, id) {
  if (firestore) {
    //firestore method
    await db
      .collection(project)
      .doc(id)
      .update({ status: "completed" });
    console.log("kiírtam valamit");
  } else if (mySql) {
    //MySql method
    console.log("mySql method", mySql);
  }
}
export async function deleteProjectfromDb(project, id) {
  if (firestore) {
    //firestore method
    await db
      .collection(project)
      .doc(id)
      .delete();
  } else {
    //MySql method
    console.log("mySql method", mySql);
  }
}
