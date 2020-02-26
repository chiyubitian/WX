import Storage from "./storage.js"
class Axios {
    get (url , data){
        if (!this.islogin()){
            return false
        }
        let { token } = this.islogin()
        console.log(token)
        data.token = token
        return new Promise((resolve , reject)=>{
            wx.request({
                url,
                data: data || {},
                method: "GET",
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })
        
    }
    post (url, data) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data: data || {},
                method: "POST",
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                }
            })
        })

    }
    islogin(){
        let login = Storage.getStorage("login") || Storage.getStorage("user")
        if (!login) {
            wx.showModal({
                title: '登录状态',
                content: '请重新登录',
                success(res) {
                    if (res.confirm) {
                        wx.switchTab({
                            url: "/pages/my/my"
                        })
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
            return false
        }
        return login
    }
}
export default Axios