
const storage = {
    setStorage(key, data) {
        let now_time = new Date().getTime()
        let emptime = now_time + 60*1000
        data.emptime = emptime
        wx.setStorageSync(key, data)
    },
    getStorage(key) {
        let now_time = new Date().getTime()
        let data = wx.getStorageSync(key)
        if (!data) {
            return null
        }
        if (data.emptime < now_time) {
            wx.removeStorageSync(key)
        }
        return data
    }
}

export default storage