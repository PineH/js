/*
*User: H
*Created by Webstrom.
* */

//返回
history.back()

//.ambient-content img 下以偶数 并改变样式
$(".ambient-content img:even").attr("class","ambient-right");

/*
* 遍历
* */
img.each(function (i) {
    if(i%3 == 0){
        var list_pic    =   new Array($(this).attr("src"));
        var list    =   list_pic[0];
    }
});