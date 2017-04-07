手机屏幕 横屏显示
##
执行条件： 自执行 ，屏幕resize 执行。
 
##
方法探究：<br>
在 Android 下，<br>
如果页面中<i  style="color:red"> 出现软键盘弹出 </i>的情况<strong>（存在有 Input 
的元素）</strong>时，页面有时会因为软键盘的弹出而导致页面回缩，<br>
即页面的宽度（竖屏时）或者高度（横屏时）被改变。<br>
无论是 <b  style="color:red">CSS Media Queries</b> 还是  <b  style="color:red">window.matchMedia() 
</b>方法，还是根据  <b  style="color:red">window.innerWidth </b>、 <b  style="color:red">window
.innerHeight</b>的页面宽高比对方法来实现的横竖屏判断方法，都会因此 受到影响，出现<b  style="color:red"> 判断失误</b>的情况（ Samsung 
SCH-i699 
机型，在竖屏时由于软键盘弹出导致页面<b  style="color:red"> 高度小于宽度</b>，被错误地判定为横屏）。
<br><br>
经过实际情况的研究，针对开发环境兼容的情况（ iOS 与 Android 下的微信内置浏览器与原生浏览器）来说，<br>
 <b  style="color:red">屏幕分辨率是不会改变的</b>，那么我们可以尝试 <b  style="color:red"> 比对 
 <i style="text-decoration:underline; color:yellow">页面宽高</i> 和 
 <i style="text-decoration:underline; color:yellow"> 屏幕分辨率</i> </b>来判断横竖屏。









