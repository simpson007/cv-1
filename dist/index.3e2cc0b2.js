!function(){let n=document.querySelector("#html"),r=document.querySelector("#style"),e="/*你好，我是鸣雷\n*接下来我演示一下我的前端功底\n*首先我要准备一个div\n*/\n#div1 {\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/*接下来我把 div 变成一个太极图\n*注意看\n*首先，把 div 变成一个圆\n*/\n#div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border: none;\n  }\n/*太极分阴阳\n*白色为阳，黑色为阴\n*/\n#div1 {\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*加上两个神秘的小球\n*阳中有阴，阴中有阳\n*/\n#div1::before {\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::after {\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n",a="",d=0,t=()=>{setTimeout((()=>{"\n"===e[d]?a+="<br>":" "===e[d]?a+="&nbsp;":a+=e[d],n.innerHTML=a,r.innerHTML=e.substring(0,d),window.scrollTo(0,99999),n.scrollTo(0,99999),d<e.length-1&&(d+=1,t())}),10)};t()}();
//# sourceMappingURL=index.3e2cc0b2.js.map
