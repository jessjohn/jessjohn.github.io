(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(278)},140:function(e,t,a){},274:function(e,t,a){e.exports=a.p+"static/media/App.0f413598.less"},278:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(35),i=a.n(r),o=(a(140),a(15)),c=a(16),s=a(18),m=a(17),u=a(19),d=a(283),h=a(290),p=a(285),E=a(291),g=a(288),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{textAlign:"justified"},l.a.createElement(h.a,{as:"h1"},"About Me"),l.a.createElement(p.a,null),l.a.createElement(E.a,{textAlign:"center",compact:!0,style:{marginLeft:"auto",marginRight:"auto"}},l.a.createElement("img",{src:"/me.jpg",alt:"me",width:200}),l.a.createElement("p",null,"Hi, I'm Jess.")),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,"What is Jess currently doing?"),"I'm currently working as a full time software engineer at an analytics and machine learning company in Ottawa, Canada. My day job is to write Java that supports Elasticsearch clusters, create REST APIs, and to solve high level problems. In my spare time, I'm learning about ML+AI by playing with TensorFlow.js. I also volunteer at the Ottawa Tool Library, and with Ladies Learning Code. My hobbies are watching TV and movies, playing video games, cooking, snowboarding when there's snow and biking when there isn't."),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,"How did Jess get there?"),'After studying radio broadcasting in college, I had gotten a taste for higher learning and wanted to continue my educational path. Someone told me I was "very logical" and that I should give programming a try. I enrolled in my first programming class in 2012, and graduated with a BCS in 2016. During university I worked on developing UIs and APIs at a company called CENX, which lead me down the path of Big Data and analytics. In 2016, just before graduating, I began working at Interset doing similar UI and API development but at a much larger scale (from millions of events per month, to billions per week!). Analytics and machine learning play key roles in my current job, and I\'m eager to continue honing my skills in these areas.'),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,"What does Jess bring to the table?"),"I've never enjoyed feeling helpless or useless when problems arise. Even with the smallest problems, like a drawer that sticks or a border off by 1 pixel, I just ",l.a.createElement("i",null,"feel")," better after a problem is solved. Looking back, I can see now that learning to program was a no-brainer for me. What I learned while being a radio DJ still serves me today - communication, creativity, and not being afraid to be the only voice in a room are all skills that I've used throughout my programming career. Combine all that with a no-quit-until-its-done attitude, and you've got Jess."),l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,"What is Jess passionate about?"),"Solving problems has always been my passion, especially the challenging ones. I'm happy to spend my days solving problems that can be Googled, but I truly enjoy tackling problems that require creative solutions. No matter the domain (programming, DIYing, meal prepping) I love trying to find the perfect solution to the task at hand."))}}]),t}(n.Component),v=a(292),y=a(289),f=a(119),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.pageChange;return l.a.createElement("div",null,l.a.createElement(v.a,{as:y.a,animation:"overlay",icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"thin",color:"teal"},l.a.createElement(y.a.Item,{as:"a",onClick:function(){return e("about")}},l.a.createElement(f.a,{name:"user outline"}),"About Me"),l.a.createElement(y.a.Item,{as:"a",onClick:function(){return e("resume")}},l.a.createElement(f.a,{name:"file alternate outline"}),"CV"),l.a.createElement(y.a.Item,{as:"a",onClick:function(){return e("projects")}},l.a.createElement(f.a,{name:"boxes"}),"Projects"),l.a.createElement(y.a.Item,{as:"a",href:"https://github.com/jessjohn",target:"_blank"},l.a.createElement(f.a.Group,{size:"large"},l.a.createElement(f.a,{name:"github"}),l.a.createElement(f.a,{corner:!0,name:"external",inverted:!0})),l.a.createElement("br",null),"GitHub"),l.a.createElement(y.a.Item,{as:"a",href:"https://www.linkedin.com/in/jess-johnson-84b39164/",target:"_blank"},l.a.createElement(f.a.Group,{size:"large"},l.a.createElement(f.a,{name:"linkedin alternate"}),l.a.createElement(f.a,{corner:!0,name:"external",inverted:!0})),l.a.createElement("br",null),"LinkedIn")))}}]),t}(n.Component),C=a(287),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).p5Canvas=null,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.p5Canvas=new window.p5(this.props.p5Function,this.props.canvasId)}},{key:"componentWillReceiveProps",value:function(e){this.p5Canvas.updateProps(e)}},{key:"componentWillUnmount",value:function(){this.p5Canvas&&this.p5Canvas.remove()}},{key:"render",value:function(){return l.a.createElement(E.a,{id:this.props.canvasId,style:{height:350}})}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).changeLearningRate=function(e){return a.setState({learningRate:Math.round(100*e.target.value)/100})},a.state={learningRate:.05},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.learningRate;return l.a.createElement(E.a,{basic:!0},l.a.createElement("p",null,"Using TensorFlow.js, p5, and React, this example shows a linear regression. Click the canvas to add points and watch the line attempt a best fit. The learning rate is purposefully slow here for demo purposes."),l.a.createElement("label",{htmlFor:"learning-rate"},"Learning Rate: ",e),l.a.createElement("input",{id:"learning-rate",type:"range",min:0,max:.5,step:"any",value:e,onChange:this.changeLearningRate,list:"tickmarks",style:{width:350,margin:5}}),l.a.createElement("datalist",{id:"tickmarks"},l.a.createElement("option",{value:"0"}),l.a.createElement("option",{value:"0.05"}),l.a.createElement("option",{value:"0.10"}),l.a.createElement("option",{value:"0.15"}),l.a.createElement("option",{value:"0.20"}),l.a.createElement("option",{value:"0.25"}),l.a.createElement("option",{value:"0.30"}),l.a.createElement("option",{value:"0.35"}),l.a.createElement("option",{value:"0.40"}),l.a.createElement("option",{value:"0.45"}),l.a.createElement("option",{value:"0.5"})),l.a.createElement(k,{learningRate:e,canvasId:"linear-regression",p5Function:I}))}}]),t}(n.Component);function I(e){var t={};e.updateProps=function(e){t=e},e.reset=function(){e.clear()};var a,n,l=window.tf,r=[],i=function(e){return l.tensor1d(e).mul(a).add(n)};e.setup=function(){var t=document.getElementById("linear-regression");e.createCanvas(t.offsetWidth-28,t.offsetHeight-28),a=l.variable(l.scalar(e.random(1))),n=l.variable(l.scalar(e.random(1)))},e.mousePressed=function(){if(e.mouseX>0&&e.mouseX<e.width&&e.mouseY>0&&e.mouseY<e.height){var t=e.map(e.mouseX,0,e.width,0,1),a=e.map(e.mouseY,0,e.height,1,0);r.push([t,a])}},e.draw=function(){if(e.background(255),r.length<=0)return e.textSize(32),void e.text("Click to add points",.5*e.width-120,.5*e.height);l.tidy(function(){var e=r.reduce(function(e,t){return e.push(t[0]),e},[]),a=r.reduce(function(e,t){return e.push(t[1]),e},[]);l.train.sgd(t.learningRate||.05).minimize(function(){return t=i(e),n=l.tensor1d(a),t.sub(n).square().mean();var t,n})}),e.stroke(0),e.strokeWeight(2),r.forEach(function(t){var a=e.map(t[0],0,1,0,e.width),n=e.map(t[1],0,1,e.height,0);e.ellipse(a,n,8,8)});var a=[0,1],n=l.tidy(function(){return i(a)}),o=n.dataSync();n.dispose();var c=e.map(a[0],0,1,0,e.width),s=e.map(a[1],0,1,0,e.width),m=e.map(o[0],0,1,e.height,0),u=e.map(o[1],0,1,e.height,0);e.stroke("red"),e.strokeWeight(4),e.line(c,m,s,u)}}var O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{basic:!0},l.a.createElement("p",null,"Using TensorFlow.js, p5, and React, this example shows a mouse trying to get some cheese. The cheese is placed wherever you click and the mouse will try to get it by using some ML magic. The values for what the mouse's current guess at the X and Y position of the cheese is are shown on the canvas to prove that the mouse is ",l.a.createElement("i",null,"learning"),", rather than just being animated towards the given X and Y coordinates."),l.a.createElement(k,{canvasId:"mouse-and-cheese",p5Function:R}))}}]),t}(n.Component);function R(e){var t,a,n,l,r,i;e.updateProps=function(t){t,e.loop()};window.tf;e.preload=function(){n=e.loadImage("/cheese.png"),i=e.loadImage("/mouse.png")},e.setup=function(){var t=document.getElementById("mouse-and-cheese");e.createCanvas(t.offsetWidth-28,t.offsetHeight-28),l=e.width-50,r=0},e.mousePressed=function(){e.mouseX>0&&e.mouseX<e.width&&e.mouseY>0&&e.mouseY<e.height&&(e.clear(),t=e.mouseX,a=e.mouseY)},e.draw=function(){e.image(i,l,r,40,40),t&&a&&e.image(n,t,a,40,40)}}var x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(k,{canvasId:"xor",p5Function:S})}}]),t}(n.Component);function S(e){e.updateProps=function(t){t,e.loop()};window.tf}var A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeIndex:1},a.handleClick=function(e,t){var n=t.index,l=a.state.activeIndex===n?-1:n;a.setState({activeIndex:l})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.activeIndex;return l.a.createElement(E.a.Inline,null,l.a.createElement(h.a,{as:"h1"},"Projects"),l.a.createElement(C.a,{styled:!0,fluid:!0},l.a.createElement(C.a.Title,{active:0===e,index:0,onClick:this.handleClick},l.a.createElement(f.a,{name:"dropdown"}),"Linear Regression"),l.a.createElement(C.a.Content,{active:0===e},l.a.createElement(j,null)),l.a.createElement(C.a.Title,{active:1===e,index:1,onClick:this.handleClick},l.a.createElement(f.a,{name:"dropdown"}),"Mouse and Cheese"),l.a.createElement(C.a.Content,{active:1===e},l.a.createElement(O,null)),l.a.createElement(C.a.Title,{active:2===e,index:2,onClick:this.handleClick},l.a.createElement(f.a,{name:"dropdown"}),"XOR"),l.a.createElement(C.a.Content,{active:2===e},l.a.createElement(x,null))))}}]),t}(n.Component),P=a(293),W=a(279),L=a(286),z=a(280),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={margin:5};return l.a.createElement(E.a.Inline,null,l.a.createElement(h.a,{as:"h1"},"CV"),l.a.createElement(E.a,null,l.a.createElement(h.a,{as:"h2"},"Work Experience"),l.a.createElement(p.a,null),l.a.createElement(P.a,{columns:3,celled:"internally",textAlign:"justified"},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Currently working at ",l.a.createElement("b",null,"Interset")," as a Software Engineer on the ",l.a.createElement("b",null,"Search & Discovery")," team to manage ",l.a.createElement("b",null,"Elasticsearch")," clusters by writing queries and index management tools in ",l.a.createElement("b",null,"Java")," and ",l.a.createElement("b",null,"Python"),". Also writing ",l.a.createElement("b",null,"REST and CRUD APIs")," which act at a high level to manipulate different underlying ",l.a.createElement("b",null,"SQL and NoSQL")," databases as well as handle authentication and various proxy services. Worked with Apache's ",l.a.createElement("b",null,"Storm")," and ",l.a.createElement("b",null,"Kafka")," to manage a rules engine and notification system that users can customize to interact with the core product. Assisted the Customer Solutions team by providing support on phone calls, and traveled to a customer site to help with an on-site upgrade and installation. Write unit tests, integration tests, and automated tests.")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png",size:"small",centered:!0}),l.a.createElement("p",null,"Interset"),l.a.createElement("p",null,"Jan 2018 - Present")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"Java"),l.a.createElement(z.a,{style:e},"Elasticsearch"),l.a.createElement(z.a,{style:e},"DropWizard"),l.a.createElement(z.a,{style:e},"REST / CRUD API"),l.a.createElement(z.a,{style:e},"SQL / NoSQL"),l.a.createElement(z.a,{style:e},"Storm"),l.a.createElement(z.a,{style:e},"Kafka")))),l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Worked at ",l.a.createElement("b",null,"Interset")," as a Software Engineer on the ",l.a.createElement("b",null,"UX team"),". Used ",l.a.createElement("b",null,"ES6+ JavaScript")," to develop and maintain a ",l.a.createElement("b",null,"React SPA")," dedicated to revealing anomalous behaviour within an entity base. Used ",l.a.createElement("b",null,"d3")," to build graphs and diagrams which represent both baselines and unexpected activity, and used ",l.a.createElement("b",null,"Less")," to style components. Was solely responsible for converting statement from ",l.a.createElement("b",null,"Redux to MobX"),", and helped with the initial transition from ",l.a.createElement("b",null,"Angular to React"),".")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"https://interset.com/wp-content/uploads/2018/02/Interset_horizontal_RGB.png",size:"small",centered:!0}),l.a.createElement("p",null,"Interset"),l.a.createElement("p",null,"July 2016 - Dec 2017")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"JavaScript"),l.a.createElement(z.a,{style:e},"React"),l.a.createElement(z.a,{style:e},"SPA"),l.a.createElement(z.a,{style:e},"d3"),l.a.createElement(z.a,{style:e},"Less"),l.a.createElement(z.a,{style:e},"Redux"),l.a.createElement(z.a,{style:e},"MobX")))),l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Worked with ",l.a.createElement("b",null,"7theta")," as an Independent Contractor. Used ",l.a.createElement("b",null,"ClojureScript"),"and ",l.a.createElement("b",null,"React")," to make ",l.a.createElement("b",null,"Material themed")," components that use advanced visualization to help users manipulate and gain actionable insight from",l.a.createElement("b",null,"Big Data")," sets. Was the primary developer on an analytics front end for time based data in a geo-spatial context. Used ",l.a.createElement("b",null,"Clojure")," to build an asynchronous event framework for client-to-server as well as server-to-client ",l.a.createElement("b",null,"websocket")," communication in support of real-time visualizations.")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"https://avatars1.githubusercontent.com/u/13917401?s=200&v=4",size:"mini",centered:!0}),l.a.createElement("p",null,"7theta"),l.a.createElement("p",null,"September 2015 - July 2016")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"Clojure"),l.a.createElement(z.a,{style:e},"ClojureScript"),l.a.createElement(z.a,{style:e},"React"),l.a.createElement(z.a,{style:e},"Leaflet"),l.a.createElement(z.a,{style:e},"Material UI"),l.a.createElement(z.a,{style:e},"Websockets")))),l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Worked at ",l.a.createElement("b",null,"CENX")," as a Junior Software Developer, using ",l.a.createElement("b",null,"Clojure and ClojureScript")," to build UIs with ",l.a.createElement("b",null,"React")," components and to develop a framework to abstract client and server side communication for",l.a.createElement("b",null,"RESTful APIs")," and ",l.a.createElement("b",null,"websockets"),". Implemented data transformations for complex network data so that it could be visualized and indexed in search engines. Wrote automated test cases for quality assurance.")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"https://cenx.com/wp-content/uploads/2017/09/CENX-Logo-RGB.png",size:"small",centered:!0}),l.a.createElement("p",null,"CENX"),l.a.createElement("p",null,"May 2014 - August 2015")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"Clojure"),l.a.createElement(z.a,{style:e},"ClojureScript"),l.a.createElement(z.a,{style:e},"React"),l.a.createElement(z.a,{style:e},"REST API"),l.a.createElement(z.a,{style:e},"Websockets")))))),l.a.createElement(E.a,null,l.a.createElement(h.a,{as:"h2"},"Education"),l.a.createElement(p.a,null),l.a.createElement(P.a,{columns:3,celled:"internally",textAlign:"justified"},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Received a ",l.a.createElement("b",null,"Bachelor of Computer Science with Honours")," in the Network Computing stream and a minor in ",l.a.createElement("b",null,"Philosophy")," from Carleton University. While studying here I learned the core concepts associated with OOP and functional programming languages, a taste for algorithms, and developed the techniques needed to learn new skills.")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"http://cou.on.ca/wp-content/uploads/2015/04/Carleton-University.png",size:"small",centered:!0}),l.a.createElement("p",null,"Carleton University"),l.a.createElement("p",null,"September 2012 - August 2016")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"Computer Science"),l.a.createElement(z.a,{style:e},"Honours"),l.a.createElement(z.a,{style:e},"Philosophy"),l.a.createElement(z.a,{style:e},"Network Computing"),l.a.createElement(z.a,{style:e},"OOP"),l.a.createElement(z.a,{style:e},"Functional Programming")))),l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:10},l.a.createElement("p",null,"Attended ",l.a.createElement("b",null,"Loyalist College")," to study ",l.a.createElement("b",null,"Radio Broadcasting"),". I specialized in audio production and commercial writing. I learned a lot about public speaking and the importance of communication between different teams to enable a radio station to operate smoothly.")),l.a.createElement(P.a.Column,{width:3,textAlign:"center"},l.a.createElement(W.a,{src:"https://www.collegesinstitutes.ca/wp-content/uploads/2015/11/member_logo_ON_Loyalist_College.jpeg",size:"small",centered:!0}),l.a.createElement("p",null,"Carleton University"),l.a.createElement("p",null,"September 2012 - August 2016")),l.a.createElement(P.a.Column,{width:3},l.a.createElement(L.a,{bulleted:!0},l.a.createElement(z.a,{style:e},"Radio Broadcasting"),l.a.createElement(z.a,{style:e},"Audio Production"),l.a.createElement(z.a,{style:e},"Commercial Writing"),l.a.createElement(z.a,{style:e},"Communication"),l.a.createElement(z.a,{style:e},"Public Speaking")))))))}}]),t}(n.Component),U=(a(274),a(275),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={currentPage:"about"},a.pageChange=function(e){return a.setState({currentPage:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.currentPage;return l.a.createElement("div",{className:"main-content"},l.a.createElement(w,{pageChange:this.pageChange}),l.a.createElement("div",{style:{marginLeft:170,marginRight:20,marginTop:20,marginBottom:20}},"about"===e?l.a.createElement(b,null):null,"resume"===e?l.a.createElement(J,null):null,"projects"===e?l.a.createElement(A,null):null))}}]),t}(n.Component));i.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[135,2,1]]]);
//# sourceMappingURL=main.2f8b1e5c.chunk.js.map