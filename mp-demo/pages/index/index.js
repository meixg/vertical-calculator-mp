/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: swan.canIUse('button.open-type.getUserInfo'),
    nodes: [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]}]}]
  },
  onLoad() {
    
  },
  getUserInfo(e) {
    swan.login({
      success: () => {
        swan.getUserInfo({
            success:(res)=> {
                this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                });
            },
            fail: ()=> {
              this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true
              });
            }
        });
      },
      fail: () => {
        swan.showModal({
          title: '未登录',
          showCancel: false
        });
      }
    });
  }
})
