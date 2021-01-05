var app = getApp()
Page({
  jumpToP10(){
    wx.navigateTo({
      url: '/pages/p10/p10',
    })
  },
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
	
		dishesList:[
			[
				{
					name:"奶油乳脂虎皮蛋糕",
					dic:"烤制乳脂蛋糕，乳脂风味浓郁",
					price:28,
					num:1,
					id:1,
					pic: '/assets/cart01.png'
				},
				{
					name:"奶油乳脂草莓千层",
					dic:"烤制乳脂蛋糕，乳脂风味浓郁",
					price:28,
					num:1,
					id:29,
					pic: '/assets/cart02.png'
				},
				{
					name:"奶油乳脂虎皮蛋糕",
					dic:"烤制乳脂蛋糕，乳脂风味浓郁",
					price:28,
					num:1,
					id:2,
					pic: '/assets/cart01.png'
				}
			]
		],
		// dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},

	// 选择蛋糕
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})