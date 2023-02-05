"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[558],{7124:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(5697),o=t.n(r),a=t(7294),i=t(4942),c=t(5987),l=t(885),s=t(5210),u={prefix:String(Math.round(1e10*Math.random())),current:0},d=a.createContext(u);var m=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);var E=t(7391),v=t(9148);var f=function(e){var n=e.children,t=e.in,r=e.mountOnEnter,o=e.unmountOnExit,i=(0,a.useRef)(t);return(0,a.useEffect)((function(){t&&(i.current=!0)}),[t]),t?n:o||!i.current&&r?null:n},p=t(5893),g=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],A=["activeKey","getControlledId","getControllerId"],b=["as"];function h(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function w(e){var n=e.active,t=e.eventKey,r=e.mountOnEnter,o=e.transition,i=e.unmountOnExit,c=e.role,l=void 0===c?"tabpanel":c,s=e.onEnter,u=e.onEntering,d=e.onEntered,m=e.onExit,f=e.onExiting,p=e.onExited,b=h(e,g),w=(0,a.useContext)(E.Z);if(!w)return[Object.assign({},b,{role:l}),{eventKey:t,isActive:n,mountOnEnter:r,transition:o,unmountOnExit:i,onEnter:s,onEntering:u,onEntered:d,onExit:m,onExiting:f,onExited:p}];var y=w.activeKey,x=w.getControlledId,Z=w.getControllerId,O=h(w,A),j=(0,v.h)(t);return[Object.assign({},b,{role:l,id:x(t),"aria-labelledby":Z(t)}),{eventKey:t,isActive:null==n&&null!=j?(0,v.h)(y)===j:n,transition:o||O.transition,mountOnEnter:null!=r?r:O.mountOnEnter,unmountOnExit:null!=i?i:O.unmountOnExit,onEnter:s,onEntering:u,onEntered:d,onExit:m,onExiting:f,onExited:p}]}var y=a.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,o=w(h(e,b)),a=(0,l.Z)(o,2),i=a[0],c=a[1],s=c.isActive,u=c.onEnter,d=c.onEntering,m=c.onEntered,g=c.onExit,A=c.onExiting,y=c.onExited,x=c.mountOnEnter,Z=c.unmountOnExit,O=c.transition,j=void 0===O?f:O;return(0,p.jsx)(E.Z.Provider,{value:null,children:(0,p.jsx)(v.Z.Provider,{value:null,children:(0,p.jsx)(j,{in:s,onEnter:u,onEntering:d,onEntered:m,onExit:g,onExiting:A,onExited:y,mountOnEnter:x,unmountOnExit:Z,children:(0,p.jsx)(r,Object.assign({},i,{ref:n,hidden:!s,"aria-hidden":!s}))})})})}));y.displayName="TabPanel";var x=function(e){var n,t,r=e.id,o=e.generateChildId,i=e.onSelect,c=e.activeKey,f=e.defaultActiveKey,g=e.transition,A=e.mountOnEnter,b=e.unmountOnExit,h=e.children,w=(0,s.$c)(c,f,i),y=(0,l.Z)(w,2),x=y[0],Z=y[1],O=(n=r,(t=(0,a.useContext)(d))!==u||m||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,a.useMemo)((function(){return n||"react-aria".concat(t.prefix,"-").concat(++t.current)}),[n])),j=(0,a.useMemo)((function(){return o||function(e,n){return O?"".concat(O,"-").concat(n,"-").concat(e):null}}),[O,o]),C=(0,a.useMemo)((function(){return{onSelect:Z,activeKey:x,transition:g,mountOnEnter:A||!1,unmountOnExit:b||!1,getControlledId:function(e){return j(e,"tabpane")},getControllerId:function(e){return j(e,"tab")}}}),[Z,x,g,A,b,j]);return(0,p.jsx)(E.Z.Provider,{value:C,children:(0,p.jsx)(v.Z.Provider,{value:Z||null,children:h})})};x.Panel=y;var Z=x,O=t(563);function j(e){return"boolean"==typeof e?e?O.Z:f:e}var C=["transition"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(e){var n=e.transition,t=(0,c.Z)(e,C);return(0,p.jsx)(Z,B(B({},t),{},{transition:j(n)}))};R.displayName="TabContainer";var S=R,N=(0,t(8870).Z)("tab-content"),F=t(5900),W=t.n(F),J=t(9541),z=["bsPrefix","transition"],k=["className","as"];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=a.forwardRef((function(e,n){var t=e.bsPrefix,r=e.transition,o=w(G(G({},(0,c.Z)(e,z)),{},{transition:j(r)})),a=(0,l.Z)(o,2),i=a[0],s=i.className,u=i.as,d=void 0===u?"div":u,m=(0,c.Z)(i,k),f=a[1],g=f.isActive,A=f.onEnter,b=f.onEntering,h=f.onEntered,y=f.onExit,x=f.onExiting,Z=f.onExited,C=f.mountOnEnter,P=f.unmountOnExit,B=f.transition,R=void 0===B?O.Z:B,S=(0,J.vE)(t,"tab-pane");return(0,p.jsx)(E.Z.Provider,{value:null,children:(0,p.jsx)(v.Z.Provider,{value:null,children:(0,p.jsx)(R,{in:g,onEnter:A,onEntering:b,onEntered:h,onExit:y,onExiting:x,onExited:Z,mountOnEnter:C,unmountOnExit:P,children:(0,p.jsx)(d,G(G({},m),{},{ref:n,className:W()(s,S,g&&"active")}))})})})}));I.displayName="TabPane";var K=I,D={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},H=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};H.propTypes=D;var T=Object.assign(H,{Container:S,Content:N,Pane:K})},884:function(e,n,t){var r=t(7294),o=t(3639),a=t(994),i=t(7408),c=t(6594),l=t(7159);n.Z=function(){var e=r.useState(!1),n=e[0],t=e[1];return r.createElement(o.Z,{className:"overflow-hidden"},r.createElement(a.Z,{className:"text-center text-white d-flex justify-content-center move-forward py-5 rounded"},r.createElement(i.Z,{xs:12,md:6},r.createElement("div",{className:"d-block"},r.createElement("h2",{className:"text-white"},"Ready To Move Forward With ",r.createElement("br",null)," Flipflop Team?"),r.createElement("p",null,"Increase efficency, productivity, and business performance with Flipflop various products that have been used by tens of thousands of businesses in the word."),r.createElement(c.Z,{onClick:function(){return t(!0)}},"Get Started")))),r.createElement(l.Z,{handleClose:function(e){return t(!1)},show:n}))}},9367:function(e,n,t){t.r(n),t.d(n,{Head:function(){return f},default:function(){return p}});var r=t(7294),o=t(9357),a=t(4557),i=t(3639),c=t(994),l=t(7408),s=t(7124),u=t(8823),d=t.p+"static/poc-ed836fd248e5664e41d55ccc43f983a1.jpg",m=t.p+"static/business-concept-91470764b221fbcd091eb8d3ea32177a.webp",E=t.p+"static/dev-method-b9b63ac6570f86ce869be0ca89b25e15.jpg",v=t(884),f=function(){return r.createElement(o.Z,{title:"POC Open Source"})},p=function(){var e=r.useState("poc"),n=e[0],t=e[1];return r.createElement(a.Z,null,r.createElement("div",{className:"busniess-wrap"},r.createElement(i.Z,{fluid:!0},r.createElement(c.Z,{className:"busniess-need p-5"},r.createElement(l.Z,{xs:12},r.createElement("div",{className:"mx-5 text-dark"},r.createElement("h2",{className:"text-capitalize"},"POC and Open Source Development Services"),r.createElement("p",null,"Looking for a reliable and innovative partner to help you navigate the complex world of POC and open source development? Look no further than our expert team at FlipFlop.")))))),r.createElement(i.Z,null,r.createElement(c.Z,{className:"text-center justify-content-center d-flex"},r.createElement(l.Z,{md:6},r.createElement("h6",{className:"fs-2 text-dark my-5"},"Unlock the Power of Innovation and Flexibility with Our Expertise")))),r.createElement(i.Z,{fluid:!0,className:"web-dev"},r.createElement(c.Z,null,r.createElement(l.Z,{md:12},r.createElement(s.Z.Container,{activeKey:n},r.createElement(c.Z,{className:"d-flex align-items-center"},r.createElement(l.Z,{md:6},r.createElement(s.Z.Content,null,r.createElement(s.Z.Pane,{eventKey:"poc"},r.createElement("div",null,r.createElement("img",{className:"d-flex m-auto d-flex justify-content-center w-75",src:d,alt:"poc"}))),r.createElement(s.Z.Pane,{eventKey:"research-dev"},r.createElement("div",null,r.createElement("img",{className:"d-flex m-auto d-flex justify-content-center w-75",src:m,alt:"business_concept"}))),r.createElement(s.Z.Pane,{eventKey:"dev-method"},r.createElement("div",null,r.createElement("img",{className:"d-flex m-auto d-flex justify-content-center w-75",src:E,alt:"dev_mthod"}))))),r.createElement(l.Z,{md:6},r.createElement(c.Z,null,r.createElement(l.Z,{md:12},r.createElement("div",{className:"webdev-head"},r.createElement("h2",{className:"text-capitalize fs-1 font-weight-normal"},"POC and Open Source Development Services"),r.createElement("h5",null,"Looking for a reliable and innovative partner to help you navigate the complex world of POC and open source development? Look no further than our expert team at FlipFlop.")))),r.createElement(c.Z,{className:"webdev-nav-link"},r.createElement(l.Z,{md:12},r.createElement(u.Z,{variant:"pills",className:"flex-column"},r.createElement(u.Z.Item,{onMouseEnter:function(){return t("poc")}},r.createElement(u.Z.Link,{eventKey:"poc"},r.createElement("img",{alt:"proof of concept",src:"data:image/png;base64,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"}),"Proof Of Concept"),r.createElement("p",null,"With years of experience working with a wide range of clients and technologies, we are well-equipped to help you unlock the full potential of your POC and open source projects. Whether you're looking to create a new product or service, or simply need help optimizing an existing one, we are here to help.")),r.createElement(u.Z.Item,{onMouseEnter:function(){return t("research-dev")}},r.createElement(u.Z.Link,{eventKey:"research-dev"},r.createElement("i",{className:"bi bi-search"})," Research And Concept Development"),r.createElement("p",null,"Our POC and open source development services include everything from research and concept development, to prototyping and testing, to full-scale development and deployment. We work closely with you to understand your unique needs and goals, and then use our expertise to help you achieve them.")),r.createElement(u.Z.Item,{onMouseEnter:function(){return t("dev-method")}},r.createElement(u.Z.Link,{eventKey:"dev-method"},r.createElement("img",{alt:"proven develop tech",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9ElEQVR4nO2aS4hcRRSGv2mdUZMsjKCJSbevaDSoqDuVRAYRRKLxgS5UzFKYce9KNFHQTgTjPgtFRQwSszAzEeNjF9CNYJRIkGy0fTGOMULEnuiVgv/C4XJvd9Wd6tuv+aHo7upzTlX995x6nFuwghVYTAF7gJ+ApGRpAU3ZqgIN4CDwF3BG3zeXNdZcxsCzxdmqYvC/57S9WJaElgzcaepSo0W/s9hqPKHXeF9tzYuMjcCc6pwnBCPJGVwoAb4yMXBG7dRNXV11f44DAUlBO6XbT1YIYKg84HROCDTMRDgwHnAx8CiwF/gYOGHi9z/gF+A4cAR4CbgfuCRgEnR6G1Q+Ut17AeP2IiBbOsHKbAGWSiyjbeBD4HHggoJ2rgF+NfJtfXd1V3fpY9eOxyJgAvge+BJ4FXgIuE2uugq4EFgP3AA8ArwMfAacM3Z+AJ7JIeJa4Iucvrm6TbEIiGHn/BI2LgVmgK+MvafM//eZMFoAnldZMMvgvcvteFnEnAQn5DVvATXV3QP8Y2J9rZF33w/oPydzdz86nvRwFdhgtr+viaAsXN3rxjtciI0MAe/K9pzxiDzUtEV2su+MCgHXAf8CZ4ErPeSvAv7WhLppFAh4QXbfDNB5WzrPjQIBn8vuAwE6D0rn01Eg4DfZdROhL9LTodttDj0BS7I7GaAzZXaK3gmRreX7yDaPhMjtObs3V9crYr31miX27EXlFWN3XWbJejZH3tWlqEmncgKmRELqCTGSou4w9DNwDLhF7vuJZJ9QSVQ3KZlj0tlSNQGxkQ4+7cCSJqP0d8Oc39OJyp4c80joC1aHbCeFdWbwLgewzwzuW2DWyM6qLiVpn3RSEvLCoRPWq8/RsF2Ji/0BOjW5cqIBOdwKTHfQmZYM0klko9OWN4v96qvrczTsVmfcWT0EN2v5OaccQIjekkpKiC/2qK+7iIh5GX04UG/SxLx98tcDh3Sed290PtBckGLazAkhaz5KvaWHpWj4RkZv9JS/Q8vaURPzE2bwf+SsHu7YeoVkJsyccFS2nE1f70mUY4yGloxe7imfHZyd8A6p7rDe5NSNh7lERoqZHDs+2OixEQvGWRl1+TsfpB1+MuPaRW9zGgVvc+qyEULAKsm6Pkcn4KKKCWgMCgGtiCFwUHXzIqGhvH42BGZLhkB6+vuRAZ0ENxe80l4wXjFwk+CcjLq8fYxlsK6nfVpufyATEjGWQTfJRsOunBPeoG6E9qqvLn0WDdvHfSu8useHoZlBPwyN1XF4ahk3xfJuiMVMiHSCbx8rSYs1MzZjpcQqIaCVc1PMF743xMomRTuh2wC9CUgCdl290A/FecDOcSSgBjwGfFfg4t1+F6JI0Te2ek1A+sRPmrbs927jGFoCajlP/BTwtG6gjHwInMw88Z3yBt92h56ARCU78KJ2Ry4EksAnPPIEJIHt9i0Etnne+szC6dw17ASsUd6/rcuPu3Vj4yZdZ5tUWas699+LugnSlu6aQQoB3wOTS3mlNzmPmCusIaUtXWdj4Ahodun8Gxmb7gnvULZmTmv5ornfu6gL1IdF7I7M5ceBC4FW5sB0mZKQiT7LxHxov/pKQGJk3J3er/X7RInMkS/6FgKdZKoavG1zoAg4bj5dGPQSy3VxbwJaHjfF7IRXxeBtm736v1RKrMonH7sUwuem2KKWul7M9n0nYAWMEf4H2hjf4xws/rQAAAAASUVORK5CYII="}),"Proven development methodologies"),r.createElement("p",null,"With our cutting-edge technologies and proven development methodologies, we can help you create truly innovative and flexible products and services that are sure to stand out in the marketplace. And with our commitment to open source development, you can be confident that your projects will be built on the latest and greatest technologies, without the need to spend a fortune on licensing fees.")))))))))),r.createElement(c.Z,null,r.createElement(l.Z,{xs:12},r.createElement("div",{className:"service-blog d-block m-5"},r.createElement("h6",null,"Conclusion"),r.createElement("p",null,"So why wait? Contact us today to learn more about our POC and open source development services, and to see how we can help you unleash the full power of innovation and flexibility in your next project."))))),r.createElement(v.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-poc-open-source-js-0e38f9fa7fb2a7a6c7b3.js.map