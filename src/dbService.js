
import db from "@/fb";
//import * as firebase from "firebase/app";
import "firebase/auth";

export function setCompleteProject(project, id) {
    try {
        db.collection(project)
        .doc(id)
        .update({ status: "completed" })
        return "kiírtam valamit"
    } catch (error) {
        return error
    }
}


