// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们家",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最可爱的胖猪",  // 同上...
        "今天是胖猪的生日",
        "这是我们在一起的",
        "第二个生日了",
        "胖猪又长大了一岁",
        "我们也在一起一年了",
        "今年要吃好的",
        "在国外不要老是哭鼻子",
        "生日快乐宝贝",
        "平安喜乐，万事胜意!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        // "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
        "故宫": "./imgs/gugong.jpg",
        "地铁": "./imgs/ditie.jpg",
        "浦东": "./imgs/pudong.jpg",
        "毕业": "./imgs/biye.jpg",
        "看这个猪": "./imgs/pig1.jpg", 
        "你好美": "./imgs/pig3.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "快点我, 你个猪",
        play: "来点音乐",
        bannar_coming: "来点颜色",
        balloons_flying: "好像还是少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
