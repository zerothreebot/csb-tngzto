(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{51:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var s=t(19),c=t(11),r=t(36),i=(t(51),t(20)),a=t(10),l=t(37),o=t(5);function d(){var n=Object(c.useState)(h()),e=Object(a.a)(n,2),t=e[0],s=e[1];if(Object(c.useEffect)((function(){function n(){s(h())}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),t.innerWidth>1080)return Object(o.jsx)(l.a,{className:"spline",scene:"https://prod.spline.design/iOqZdG8kmioXfVAq/scene.splinecode"})}function h(){var n=window;return{innerWidth:n.innerWidth,innerHeight:n.innerHeight}}var j,x,b,m,g,p,v,f=t(29),w=t.n(f),O=t(15),u=t.n(O),y=(t.p,t.p,t.p,t.p,document.getElementById("root")),A=Object(r.createRoot)(y);var W=i.a.div(j||(j=Object(s.a)(['\n  font-family: "Montserrat";\n  height: 100vh;\n  width: 960px;\n  margin: auto;\n\n  color: white;\n\n  @media screen and (max-width: 960px) {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n']))),k=i.a.div(x||(x=Object(s.a)(["\n  position: absolute;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n\n  .mainText {\n    display: flex;\n    flex-direction: column;\n  }\n  .nameflag {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    font-style: italic;\n    gap: 30px;\n  }\n  .UA {\n    width: 80px;\n    height: 80px;\n  }\n  h1 {\n    font-weight: 700;\n    font-size: 80px;\n  }\n  p {\n    font-size: 32px;\n  }\n  h1,\n  p {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 960px) {\n    align-items: center;\n    width: 90vw;\n    max-width: 100%;\n\n    .mainText {\n      align-items: center;\n      gap: 4vw;\n    }\n    .description {\n      text-align: center;\n    }\n    .UA {\n      width: 10vw;\n      height: 10vw;\n    }\n    h1 {\n      font-size: 10vw;\n    }\n\n    p {\n      max-width: 80vw;\n      font-size: 5vw;\n    }\n  }\n"]))),C=i.a.div(b||(b=Object(s.a)(['\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-image: url("background.png");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n']))),M=i.a.div(m||(m=Object(s.a)(['\n  font-family: "Montserrat";\n  margin: auto;\n  color: white;\n  display: flex;\n\n  flex-direction: column;\n  padding: 0 25px;\n  h1 {\n    margin-top: 96px;\n    font-size: 26px;\n  }\n  .shit {\n    width: 400px;\n    margin: 25px 0;\n  }\n  .telegramFeed {\n    gap: 25px;\n  }\n  @media all and (max-width: 960px) {\n    align-items: start;\n  }\n']))),z=i.a.div(g||(g=Object(s.a)(["\n  display: flex;\n  max-width: 960px;\n  flex-wrap: wrap;\n\n  @media all and (max-width: 960px) {\n    flex-direction: column;\n    padding-bottom: 20vw;\n    h1 {\n      margin-top: 96px;\n      font-size: 6vw;\n    }\n  }\n"]))),Z=i.a.div(p||(p=Object(s.a)(['\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  p {\n    max-width: 70vw;\n    margin-top: 70px;\n    padding: 30px;\n    width: 500px;\n    white-space: pre-line;\n    border: solid;\n    font-weight: 500;\n    border-color: white;\n    border-width: 2px;\n    color: white;\n    background-color: #00000000;\n  }\n  .smaller {\n    background-color: #ff424dbb;\n    :hover {\n      color: #ff424d;\n    }\n  }\n  .smallerTW {\n    background-color: #1d9bf0bb;\n    :hover {\n      color: #1d9bf0;\n    }\n  }\n  .smallerTG {\n    background-color: #229ed9bb;\n\n    :hover {\n      color: #2aabee;\n    }\n  }\n  .smaller,\n  .smallerTG,\n  .smallerTW {\n    font-family: "Montserrat";\n    font-weight: 600;\n    border-radius: 100px;\n    border: none;\n    padding: 6px 20px;\n    color: white;\n    backdrop-filter: blur(5px);\n    transition: 200ms;\n\n    :hover {\n      cursor: pointer;\n      font-weight: bold;\n      background: rgba(255, 255, 255, 1);\n      transform: translateX(8px);\n      box-shadow: 0 0 10px 5px #fff, 0 0 20px 7px #ff424d, 0 0 30px 10px #1d9bf0;\n    }\n  }\n  .seeallstuff {\n    list-style: none;\n    color: #ff424d;\n    transition: 200ms;\n    :hover {\n      text-decoration: none;\n      color: white;\n      background: red;\n      padding: 10px;\n    }\n  }\n']))),Y=i.a.div(v||(v=Object(s.a)(["\n  .navbar {\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: width 600ms ease;\n\n    z-index: 9999;\n  }\n\n  .navbar-nav {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n  }\n\n  .nav-item {\n    width: 100%;\n  }\n\n  .nav-link {\n    display: flex;\n    align-items: center;\n    height: 5rem;\n    color: var(--text-primary);\n    text-decoration: none;\n    filter: grayscale(100%) opacity(0.7);\n    transition: var(--transition-speed);\n  }\n\n  .nav-link:hover {\n    filter: grayscale(0%) opacity(1);\n    background: var(--bg-secondary);\n    color: var(--text-secondary);\n  }\n\n  @media screen and (min-width: 960px) {\n    .nav-link:last-of-type:hover {\n      border-right: 5px solid;\n      border-left: 5px solid;\n      border-image: linear-gradient(\n          45deg,\n          #f79533,\n          #f37055,\n          #ef4e7b,\n          #a166ab,\n          #5073b8,\n          #1098ad,\n          #07b39b,\n          #6fba82\n        )\n        1;\n      background-size: 300% 300%;\n      clip-path: inset(0px -150px 0px 0px);\n    }\n  }\n  @media screen and (max-width: 960px) {\n    .nav-link:hover {\n      box-shadow: 0 0 0 0 #fff; /* outer cyan */\n      border-right: 0px solid;\n      border-left: 0px solid;\n      border-top: 5px solid;\n      border-bottom: 0px solid;\n      border-image: linear-gradient(\n          45deg,\n          #f79533,\n          #f37055,\n          #ef4e7b,\n          #a166ab,\n          #5073b8,\n          #1098ad,\n          #07b39b,\n          #6fba82\n        )\n        1;\n      background-size: 300% 300%;\n    }\n  }\n  .link-text {\n    display: none;\n    margin-left: 1rem;\n  }\n\n  .nav-link svg {\n    width: 2rem;\n    min-width: 2rem;\n    margin: 0 1.5rem;\n  }\n\n  .fa-primary {\n    color: #ff7eee;\n  }\n\n  .fa-secondary {\n    color: #df49a6;\n  }\n\n  .fa-primary,\n  .fa-secondary {\n    transition: var(--transition-speed);\n  }\n\n  .logo {\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 1rem;\n    text-align: center;\n    color: var(--text-secondary);\n    background: var(--bg-secondary);\n    font-size: 1.5rem;\n    letter-spacing: 0.3ch;\n    width: 100%;\n  }\n\n  .logo svg {\n    transform: rotate(0deg);\n    transition: var(--transition-speed);\n  }\n\n  .logo-text {\n    display: inline;\n    position: absolute;\n    left: -999px;\n    transition: var(--transition-speed);\n  }\n\n  .navbar:hover .logo svg {\n    transform: rotate(-180deg);\n  }\n\n  /* Small screens */\n  @media only screen and (max-width: 1080px) {\n    .navbar {\n      bottom: 0;\n      width: 100vw;\n      height: 5rem;\n    }\n\n    .logo {\n      display: none;\n    }\n\n    .navbar-nav {\n      flex-direction: row;\n    }\n\n    .nav-link {\n      justify-content: center;\n    }\n\n    main {\n      margin: 0;\n    }\n  }\n\n  /* Large screens */\n  @media only screen and (min-width: 1080px) {\n    .navbar {\n      top: 0;\n      width: 5rem;\n      height: 100vh;\n    }\n\n    .navbar:hover {\n      width: 16rem;\n    }\n\n    .navbar:hover .link-text {\n      display: inline;\n    }\n\n    .navbar:hover .logo svg {\n      margin-left: 11rem;\n    }\n\n    .navbar:hover .logo-text {\n      left: 0px;\n    }\n  }\n\n  .dark {\n    --text-primary: #b6b6b6;\n    --text-secondary: #ececec;\n    --bg-primary: #23232e;\n    --bg-secondary: #141418;\n  }\n\n  .light {\n    --text-primary: #1f1f1f;\n    --text-secondary: #000000;\n    --bg-primary: #ffffff;\n    --bg-secondary: #e4e4e4;\n  }\n\n  .solar {\n    --text-primary: #576e75;\n    --text-secondary: #35535c;\n    --bg-primary: #fdf6e3;\n    --bg-secondary: #f5e5b8;\n  }\n\n  .theme-icon {\n    display: none;\n  }\n\n  .dark #darkIcon {\n    display: block;\n  }\n\n  .light #lightIcon {\n    display: block;\n  }\n\n  .solar #solarIcon {\n    display: block;\n  }\n"])));A.render(Object(o.jsxs)(c.StrictMode,{children:[Object(o.jsx)(C,{children:Object(o.jsx)(d,{})}),Object(o.jsx)(Y,{children:Object(o.jsx)("nav",{class:"navbar",children:Object(o.jsxs)("ul",{class:"navbar-nav",children:[Object(o.jsx)("li",{class:"logo",children:Object(o.jsxs)(w.a,{href:"#home",class:"nav-link",children:[Object(o.jsx)("span",{class:"link-text logo-text",children:"VOLSKIY"}),Object(o.jsx)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 47.255 47.255",children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z"})})})]})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsxs)(w.a,{href:"#animations",class:"nav-link",children:[Object(o.jsxs)("svg",{version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",children:[Object(o.jsx)("g",{children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M501.801,26.212H10.199C4.566,26.212,0,30.778,0,36.411v439.178c0,5.633,4.566,10.199,10.199,10.199h491.602 c5.632,0,10.199-4.566,10.199-10.199V36.411C512,30.778,507.433,26.212,501.801,26.212z M20.398,266.199h77.514v89.753H20.398 V266.199z M491.602,245.801h-48.956c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h48.956v89.753 h-48.956c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h48.956v89.039H20.398v-89.039h77.514v66.295 c0,5.633,4.566,10.199,10.199,10.199h295.777c5.632,0,10.199-4.566,10.199-10.199V156.048h77.514V245.801z M118.311,432.446 V79.554h275.378v352.892H118.311z M491.602,135.649h-77.514V69.355c0-5.633-4.567-10.199-10.199-10.199H108.112 c-5.633,0-10.199,4.566-10.199,10.199v176.446H20.398v-89.753h52.016c5.633,0,10.199-4.566,10.199-10.199 c0-5.633-4.566-10.199-10.199-10.199H20.398V46.61h471.203V135.649z"})})}),Object(o.jsx)("g",{children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M330.334,247.752l-123.41-89.753c-3.103-2.257-7.209-2.581-10.627-0.84c-3.42,1.74-5.572,5.253-5.572,9.089v179.506 c0,3.836,2.152,7.349,5.571,9.089c1.461,0.744,3.047,1.111,4.627,1.111c2.117,0,4.224-0.659,6-1.951l123.41-89.753 c2.639-1.919,4.2-4.985,4.2-8.248C334.534,252.737,332.972,249.67,330.334,247.752z M211.124,325.724V186.276L306.994,256 L211.124,325.724z"})})}),Object(o.jsx)("g",{children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M372.271,90.773c-5.632,0-10.199,4.566-10.199,10.199v86.693c0,5.633,4.567,10.199,10.199,10.199 s10.199-4.566,10.199-10.199v-86.693C382.47,95.339,377.903,90.773,372.271,90.773z"})})}),Object(o.jsx)("g",{children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M372.271,212.143c-5.632,0-10.199,4.566-10.199,10.199v13.259c0,5.633,4.567,10.199,10.199,10.199 s10.199-4.566,10.199-10.199v-13.259C382.47,216.71,377.903,212.143,372.271,212.143z"})})})]}),Object(o.jsx)("span",{class:"link-text",children:"Animations"})]})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsxs)(w.a,{href:"#artworks",class:"nav-link",children:[Object(o.jsx)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 58 58",children:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M57,6H1C0.448,6,0,6.447,0,7v44c0,0.553,0.448,1,1,1h56c0.552,0,1-0.447,1-1V7C58,6.447,57.552,6,57,6z M56,50H2V8h54V50z"}),Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M16,28.138c3.071,0,5.569-2.498,5.569-5.568C21.569,19.498,19.071,17,16,17s-5.569,2.498-5.569,5.569 C10.431,25.64,12.929,28.138,16,28.138z M16,19c1.968,0,3.569,1.602,3.569,3.569S17.968,26.138,16,26.138s-3.569-1.601-3.569-3.568 S14.032,19,16,19z"}),Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M7,46c0.234,0,0.47-0.082,0.66-0.249l16.313-14.362l10.302,10.301c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414 l-4.807-4.807l9.181-10.054l11.261,10.323c0.407,0.373,1.04,0.345,1.413-0.062c0.373-0.407,0.346-1.04-0.062-1.413l-12-11 c-0.196-0.179-0.457-0.268-0.72-0.262c-0.265,0.012-0.515,0.129-0.694,0.325l-9.794,10.727l-4.743-4.743 c-0.374-0.373-0.972-0.392-1.368-0.044L6.339,44.249c-0.415,0.365-0.455,0.997-0.09,1.412C6.447,45.886,6.723,46,7,46z"})]})}),Object(o.jsx)("span",{class:"link-text",children:"Artworks"})]})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsxs)("a",{href:"https://www.patreon.com/bePatron?u=40713749",class:"nav-link",target:"_blank",children:[Object(o.jsx)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 470 470",children:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M123.431,225.992c-9.486-9.486-23.904-11.096-35.074-4.844v-97.677c0-4.961-1.242-9.636-3.426-13.737 c1.315-0.391,2.69-0.596,4.093-0.596c7.903,0,14.333,6.429,14.333,14.333v72.109c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5 v-72.109c0-16.174-13.159-29.333-29.333-29.333c-5.35,0-10.508,1.445-15.01,4.133c-4.39-2.621-9.516-4.133-14.99-4.133 c-16.174,0-29.333,13.158-29.333,29.339l0.122,137.644c0.005,6.281,2.331,15.148,5.409,20.625c0.05,0.09,0.103,0.178,0.157,0.266 l86.394,139.901c1.794,3.271,3.411,9.494,3.411,13.162V462.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-27.425 c0-6.283-2.322-15.153-5.401-20.631c-0.051-0.09-0.103-0.178-0.157-0.266L48.233,274.278c-1.795-3.273-3.416-9.499-3.419-13.169 l-0.122-137.637c0-7.903,6.43-14.333,14.333-14.333s14.333,6.429,14.333,14.333v123.262c0,0.176,0.014,0.349,0.026,0.522 c0.129,7.336,2.979,14.633,8.565,20.219l67.177,67.176c2.929,2.929,7.678,2.929,10.606,0c2.929-2.929,2.929-7.677,0-10.606 l-67.177-67.176c-5.588-5.588-5.588-14.681,0-20.269s14.681-5.588,20.27,0l82.656,82.656c9.226,9.226,17.021,28.044,17.021,41.092 V462.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V360.347c0-16.982-9.406-39.691-21.415-51.699L123.431,225.992z"}),Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M410.976,94.139c-5.474,0-10.6,1.511-14.99,4.133c-4.501-2.688-9.66-4.133-15.01-4.133 c-16.174,0-29.333,13.158-29.333,29.333v72.109c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-72.109 c0-7.903,6.43-14.333,14.333-14.333c1.403,0,2.779,0.205,4.093,0.596c-2.183,4.101-3.426,8.776-3.426,13.737v97.677 c-11.169-6.251-25.587-4.642-35.074,4.845l-82.656,82.656c-12.008,12.008-21.415,34.717-21.415,51.699V462.5 c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V360.347c0-13.048,7.795-31.866,17.021-41.092l82.656-82.656 c5.588-5.588,14.681-5.588,20.27,0c5.588,5.588,5.588,14.681,0,20.27l-67.177,67.176c-2.929,2.929-2.929,7.677,0,10.606 c2.929,2.929,7.678,2.929,10.606,0l67.177-67.176c5.586-5.586,8.435-12.883,8.565-20.219c0.012-0.173,0.026-0.346,0.026-0.522 V123.471c0-7.903,6.43-14.333,14.333-14.333s14.333,6.429,14.333,14.326l-0.122,137.644c-0.003,3.67-1.625,9.896-3.419,13.169 l-86.393,139.901c-0.054,0.087-0.106,0.176-0.157,0.266c-3.079,5.478-5.401,14.348-5.401,20.631V462.5c0,4.142,3.358,7.5,7.5,7.5 s7.5-3.358,7.5-7.5v-27.425c0-3.668,1.617-9.89,3.411-13.162l86.394-139.901c0.054-0.087,0.106-0.176,0.157-0.266 c3.078-5.477,5.404-14.343,5.409-20.625l0.122-137.65C440.308,107.297,427.149,94.139,410.976,94.139z"}),Object(o.jsx)("path",{fill:"currentColor",class:"fa-secondary",d:"M352.601,66.253C352.601,29.721,322.879,0,286.348,0c-20.152,0-39.015,9.192-51.476,24.567 C222.811,9.595,204.331,0,183.652,0c-36.532,0-66.253,29.721-66.253,66.253c0,14.55,4.631,28.361,13.393,39.94l98.227,129.832 C230.437,237.899,232.65,239,235,239s4.563-1.101,5.981-2.975l98.227-129.832C347.969,94.614,352.601,80.803,352.601,66.253z M327.246,97.143L235,219.069L142.754,97.142c-6.774-8.952-10.354-19.634-10.354-30.889c0-28.261,22.992-51.253,51.253-51.253 c27.984,0,50.75,22.766,50.75,50.75c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5c0-9.79-2.15-19.086-6.004-27.442 C252.82,23.847,268.966,15,286.348,15c28.261,0,51.253,22.992,51.253,51.253C337.601,77.509,334.02,88.19,327.246,97.143z"})]})}),Object(o.jsx)("span",{class:"link-text",children:"Support"})]})})]})})}),Object(o.jsx)(W,{id:"home",children:Object(o.jsxs)(k,{children:[Object(o.jsxs)("div",{className:"mainText",children:[Object(o.jsxs)("div",{className:"nameflag",children:[Object(o.jsx)("h1",{children:"BOB VOLSKIY"}),Object(o.jsx)("img",{src:"data:image/png;base64,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",className:"UA",alt:"Ukraine Flag"})]}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:"Join one of the most realistic 3D NSFW Artist"})})]}),Object(o.jsxs)("div",{class:"wrapper",children:[Object(o.jsxs)("div",{class:"button",onClick:function(){return window.open("https://twitter.com/BobVolskiy","_blank")},children:[Object(o.jsx)("div",{class:"icon",children:Object(o.jsx)("i",{class:"fab fa-twitter"})}),Object(o.jsx)("span",{children:"Twitter"})]}),Object(o.jsxs)("div",{class:"button",onClick:function(){return window.open("https://t.me/BobVolskiy","_blank")},children:[Object(o.jsx)("div",{class:"icon",children:Object(o.jsx)("i",{class:"fab fa-telegram"})}),Object(o.jsx)("span",{children:"Telegram"})]}),Object(o.jsxs)("div",{class:"button",onClick:function(){return window.open("https://www.patreon.com/bePatron?u=40713749","_blank")},children:[Object(o.jsx)("div",{class:"icon",children:Object(o.jsx)("i",{class:"fab fa-patreon"})}),Object(o.jsx)("span",{children:"Patreon"})]})]})]})}),Object(o.jsx)(Z,{}),Object(o.jsx)(Z,{children:Object(o.jsx)(z,{children:Object(o.jsxs)(M,{id:"Intro",children:[Object(o.jsx)("h1",{children:"Intro"}),Object(o.jsx)("div",{className:"telegramFeed",children:Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/26"})})})]})})}),Object(o.jsx)(Z,{children:Object(o.jsx)(z,{children:Object(o.jsxs)(M,{children:[Object(o.jsx)("h1",{id:"animations",children:"Animations"}),Object(o.jsxs)("div",{className:"telegramFeed",children:[Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/29"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/25"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/28"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/3"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/27"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/23"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/20"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/17"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/16"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/15"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/11"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/7"})})]}),Object(o.jsx)("h1",{id:"artworks",children:"Artworks"}),Object(o.jsxs)("div",{className:"telegramFeed",children:[Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/4"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/24"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/22"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/21"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/19"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/12"})}),Object(o.jsx)("div",{className:"shit",children:Object(o.jsx)(u.a,{src:"https://t.me/aeqrtghhwrth/8"})}),Object(o.jsx)("div",{className:"shit"})]})]})})})]}))}},[[59,1,2]]]);
//# sourceMappingURL=main.52239149.chunk.js.map