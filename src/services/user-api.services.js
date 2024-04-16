import axios from "axios";

export class UserApiServices {

    const invoke = axios("http://localhost:3000/")
    getAll() {
        return invoke.get("users");
    }
    create(body){
        return invoke.post("users",body);
    }
    update(body,id){
        return invoke.put("users/"+id,body);
    }
    delete(id){
        return invoke.delete("users/"+id);
    }
}