import Axios from "./axiso.js"
class Base extends Axios{
    constructor(){
        super()
        this.baseurl = "http://127.0.0.1:3004"
    }
}
export default Base