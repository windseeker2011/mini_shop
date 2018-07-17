Page({
    data: {
        category: [
            {name:'乌龙茶',id:'wulongcha'},
            {name:'红茶',id:'hongcha'},
            {name:'绿茶',id:'lvcha'},
            {name:'黑茶',id:'heicha'},
            {name:'白茶',id:'baicha'},
            {name:'花茶',id:'huacha'},
            {name:'茶器',id:'chaqi'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'wulongcha'
    },
    onReady(){
        var self = this;
        // wx.request({
        //     url:'data/cate-detail.txt',
        //     success(res){
        //         self.setData({
        //             detail : res.data
        //         })
        //     }
        // });
        self.setData({
          detail: [
            {
              "id": "wulongcha",
              "banner": "/image/c1.png",
              "cate": "乌龙茶",
              "detail": [
                {
                  "thumb": "/image/c2.png",
                  "name": "安溪铁观音"
                },
                {
                  "thumb": "/image/c3.png",
                  "name": "武夷岩茶"
                },
                {
                  "thumb": "/image/c4.png",
                  "name": "台湾高山茶"
                },
                {
                  "thumb": "/image/c4.png",
                  "name": "广东单枞"
                },
                {
                  "thumb": "/image/c3.png",
                  "name": "漳平水仙"
                },
                {
                  "thumb": "/image/c2.png",
                  "name": "其他乌龙茶"
                }
              ]
            },
            {
              "id": "hongcha",
              "banner": "/image/c1.png",
              "cate": "红茶",
              "detail": [
                {
                  "thumb": "/image/s4.png",
                  "name": "金骏眉"
                },
                {
                  "thumb": "/image/s5.png",
                  "name": "正山小种"
                },
                {
                  "thumb": "/image/s6.png",
                  "name": "祁门红茶"
                },
                {
                  "thumb": "/image/s6.png",
                  "name": "云南滇红"
                },
                {
                  "thumb": "/image/s5.png",
                  "name": "凌云白毫红茶"
                },
                {
                  "thumb": "/image/s4.png",
                  "name": "英德红茶"
                },
                {
                  "thumb": "/image/s5.png",
                  "name": "锡兰红茶"
                },
                {
                  "thumb": "/image/s4.png",
                  "name": "其他红茶"
                }
              ]
            },
            {
              "id": "lvcha",
              "banner": "/image/c1.png",
              "cate": "绿茶",
              "detail": [
                {
                  "thumb": "/image/c2.png",
                  "name": "测试"
                }
              ]
            },
            {
              "id": "heicha",
              "banner": "/image/c1.png",
              "cate": "黑茶",
              "detail": [
                {
                  "thumb": "/image/s4.png",
                  "name": "测试"
                }
              ]
            },
            {
              "id": "baicha",
              "banner": "/image/c1.png",
              "cate": "白茶",
              "detail": [
                {
                  "thumb": "/image/c2.png",
                  "name": "测试"
                }
              ]
            },
            {
              "id": "huacha",
              "banner": "/image/c1.png",
              "cate": "花茶",
              "detail": [
                {
                  "thumb": "/image/s4.png",
                  "name": "测试"
                }
              ]
            },
            {
              "id": "chaqi",
              "banner": "/image/c1.png",
              "cate": "茶器",
              "detail": [
                {
                  "thumb": "/image/s4.png",
                  "name": "测试"
                }
              ]
            }
          ]
        });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})