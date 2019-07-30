(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(29),o=a.n(r),c=(a(83),a(18)),l=a(11),s=a(23),m=a(19),h=a(22),d=a(30),u=a.n(d),p=a(33),g=a(24),b=a(118),E=a(117),v=a(109),y=a(119),f=a(101),w=a(70),k=Object(w.a)({palette:{primary:{main:"#bdbdbd"},secondary:{main:"#546e7a"},type:"dark"},overrides:{MuiButton:{root:{color:"white","&:hover":{backgroundColor:"#546e7a"}}},AppBar:{root:{marginBottom:"0vh"}}}}),j=(a(85),a(112)),x=a(71),O=a(110),I=a(111),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(v.a,{item:!0,xs:12,md:5,align:"center"},i.a.createElement(x.a,{style:{height:"60vh"}},i.a.createElement(v.a,{container:!0,direction:"column",justify:"center",spacing:0,alignItems:"center",style:{minHeight:"60vh"}},i.a.createElement(v.a,{item:!0,xs:10},i.a.createElement(O.a,{className:"aboutCard",style:{height:"50vh",overflowY:"scroll",color:"black",backgroundColor:"#bdbdbd"},raised:"true"},i.a.createElement(I.a,null,i.a.createElement(f.a,{variant:"h4"},this.props.title),i.a.createElement("hr",{style:{borderTop:"1px solid black"}}),this.props.body.map(function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(f.a,{variant:"h6"},e,i.a.createElement("br",null),i.a.createElement("br",null)))})))))))}}]),t}(n.Component),N=[{title:"Here, as a Human.",body:["I was born in New Jersey, and received my BFA in Studio Art from The School of the Art Institute of Chicago.","I currently reside in Colorado with my wife and two year old daughter.","When I am not working I love making music, drinking tea, dancing, and engaging in great conversation."]},{title:"Here, as a Developer.",body:["I have a passion for creating beautiful, responsive user experiences.","I work primarily in HTML, CSS, JavaScript, and React.js.","I also have experience in Python, Ruby on Rails, and Angular."]}],A=Object(j.a)(function(e){return{body:{height:"80vh",overflowX:"hidden"}}});function S(){var e=A();return i.a.createElement(u.a,{theme:k},i.a.createElement("div",{className:e.body},i.a.createElement(v.a,{container:!0,spacing:4,justify:"space-evenly",alignItems:"center",style:{minHeight:"80vh"}},N.map(function(e,t){return i.a.createElement(C,{key:t,title:e.title,body:e.body})}))))}var H=a(113),W=a(46),T=a(57),B=a(65),G=Object(j.a)(function(e){return{bg:{height:"80vh",overflowX:"hidden"},contact:{maxWidth:345,margin:"auto"},link:{marginLeft:"100px"},icon:{marginRight:"1vw"}}});function R(){var e=G();return i.a.createElement(u.a,{theme:k},i.a.createElement("div",{className:e.bg},i.a.createElement(O.a,{className:e.contact},i.a.createElement(I.a,null,i.a.createElement(v.a,{container:!0,spacing:3},i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{variant:"h4",style:{textAlign:"center"}},"Find me here!")),i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{variant:"h6",className:e.link},i.a.createElement(H.a,{href:"https://www.github.com/duhlite",target:"_blank",rel:"noopener"},i.a.createElement(W.a,{icon:T.a,className:e.icon,size:"lg"}),"Github"))),i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{variant:"h6",className:e.link},i.a.createElement(H.a,{href:"https://www.linkedin.com/in/travis-mingalone/",target:"_blank",rel:"noopener"},i.a.createElement(W.a,{icon:T.b,className:e.icon,size:"lg"}),"LinkedIn"))),i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{variant:"h6",className:e.link},i.a.createElement(H.a,{href:"mailto:travismingalone@gmail.com"},i.a.createElement(W.a,{icon:B.a,className:e.icon,size:"lg"}),"Email"))))))))}var z=a(66),M=a.n(z),J=a(67),P=a.n(J),V=[{image:M.a,title:"Gardening ToolKit Home",main:"Gardening ToolKit",secondary:"Gardening Web App, allows users to add garden beds and crops, and advises on future crops based on a 5 year rotation cycle. Created with React.js, Node.js, Express.js, and AWS.",link:"https://confident-wiles-0228d9.netlify.com/",git:"https://github.com/duhlite/gardening-app-api"},{image:P.a,title:"What's In A Song Homepage",main:"What's in a Song",secondary:"Web App with two functions. It finds if a word is in a song, using Genius' API. It can also craft a playlist through the Spotify API. Built using React.js, Redux, Node.js, Express.js, and deployed through Heroku.",link:"https://duhlite-whats-in-a-song.herokuapp.com/",git:"https://github.com/duhlite/music-project"}],F=a(114),L=a(115),X=a(116),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(v.a,{item:!0,xs:12,md:6,lg:4},i.a.createElement(O.a,{style:{maxWidth:400},raised:"true"},i.a.createElement(F.a,null,i.a.createElement(L.a,{style:{height:200},image:this.props.image,title:this.props.title}),i.a.createElement(I.a,null,i.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.main),i.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.secondary))),i.a.createElement(X.a,null,i.a.createElement(E.a,{size:"small",color:"primary",href:this.props.link},"View Site"),i.a.createElement(E.a,{size:"small",color:"primary",href:this.props.git},"View Github"))))}}]),t}(n.Component),K={height:"80vh",flexGrow:1,overflowX:"hidden"},_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:K},i.a.createElement(v.a,{container:!0,spacing:3,justify:"space-evenly",alignItems:"center"},V.map(function(e,t){return i.a.createElement(D,{key:t,image:e.image,title:e.title,main:e.main,secondary:e.secondary,link:e.link,git:e.git})})))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){a.setState({isHidden:"visible"}),a.domElem.current&&setTimeout(function(){a.domElem.current.scrollIntoView({behavior:"smooth",block:"start"})},200)},a.state={isHidden:"hidden"},a.domElem=i.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement(u.a,{theme:k},i.a.createElement("div",{id:"main"},i.a.createElement(v.a,{container:!0,spacing:3},i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{variant:"h2",component:"h4",className:"splash",id:"name"},"Hello, I'm Travis Mingalone")),i.a.createElement(v.a,{item:!0,xs:6},i.a.createElement(f.a,{variant:"h3",className:"splash",component:"p",id:"title"},"A Full Stack Developer")),i.a.createElement(v.a,{item:!0,xs:6},i.a.createElement(E.a,{size:"large",id:"portbutton",component:p.b,to:"/about",onClick:function(t){return e.handleClick(t)}},"View my Work")))),i.a.createElement(b.a,{position:"static",id:"nav",ref:this.domElem,style:{marginBottom:"10vh",visibility:"".concat(this.state.isHidden)}},i.a.createElement(y.a,null,i.a.createElement(f.a,{variant:"h6",id:"brand"},"Travis Mingalone"),i.a.createElement(E.a,{component:p.b,to:"/about"},"About"),i.a.createElement(E.a,{component:p.b,to:"/portfolio"},"Portfolio"),i.a.createElement(E.a,{component:p.b,to:"/contact"},"Contact"))),i.a.createElement(g.a,{path:"/about",component:S}),i.a.createElement(g.a,{path:"/portfolio",component:_}),i.a.createElement(g.a,{path:"/contact",component:R}),i.a.createElement("footer",{style:{color:"".concat(k.palette.primary.main),margin:"auto"}},"Copyright \xa9 Travis Mingalone 2019")))}}]),t}(i.a.Component),$={height:"100%"};var q=function(){return i.a.createElement(Y,{style:$,id:"home"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a.p+"static/media/GardeningToolkit.a106e0a8.png"},67:function(e,t,a){e.exports=a.p+"static/media/WhatsInaSong.03dc27d9.png"},78:function(e,t,a){e.exports=a(100)},83:function(e,t,a){},85:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.f76c9b09.chunk.js.map