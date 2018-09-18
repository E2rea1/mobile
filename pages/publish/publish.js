// pages/publish/publish.js
Page({
  data: {
    address:'点击选择，要勾选哦~'
  },
  obj:{
    type:'sell'
  },
  selAddress(){
    wx.chooseLocation({
      success: (res)=>{
        this.setData({
          address:res.address
         
        })
        // console.log(res)
        Object.assign(this.obj,{
          address:res.address,
          latitude:res.latitude,
          longitude:res.longitude
        })
        console.log(this.obj)
      },
      
    })
  },
  radioChange(e){
    // console.log(e)
    this.obj.type=e.detail.value
    console.log(this.obj)
  },
  desc(e){
    this.obj.desc = e.detail.value
  },
  contact(e){
    this.obj.contact = e.detail.value
  },
  save(){
    console.log(this.obj)
    wx.request({
      url: 'http://localhost:3000/list', 
      data: this.obj,
      header: {'content-type':'application/json'},
      method: 'POST',
     
      success: (res)=>{
        this.setData({
          suc:true
        })
      }
     
    })
  },
  go(){
   wx.navigateBack({
     delta: 1,
   })
  }
  
})