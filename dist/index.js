!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/TextField"),require("@material-ui/core/InputAdornment")):"function"==typeof define&&define.amd?define(["react","@material-ui/core/styles","@material-ui/core/Button","@material-ui/core/CircularProgress","@material-ui/core/FormControlLabel","@material-ui/core/Switch","@material-ui/core/TextField","@material-ui/core/InputAdornment"],r):"object"==typeof exports?exports["vena-component-library"]=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/TextField"),require("@material-ui/core/InputAdornment")):e["vena-component-library"]=r(e.React,e["@material-ui/core/styles"],e["@material-ui/core/Button"],e["@material-ui/core/CircularProgress"],e["@material-ui/core/FormControlLabel"],e["@material-ui/core/Switch"],e["@material-ui/core/TextField"],e["@material-ui/core/InputAdornment"])}(window,function(e,r,o,t,n,i,a,l){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=11)}([function(e,r,o){e.exports=o(9)()},function(r,o){r.exports=e},function(e,o){e.exports=r},function(e,r){e.exports=o},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=i},function(e,r){e.exports=a},function(e,r){e.exports=l},function(e,r,o){"use strict";var t=o(10);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,r,o,n,i,a){if(a!==t){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:n};return o.PropTypes=o,o}},function(e,r,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,o){"use strict";o.r(r);var t=o(1),n=o.n(t),i=o(0),a=o.n(i),l=o(2),c=o(3),s=o.n(c),d=o(4),u=o.n(d),p="#FFFFFF",b="#333333";function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function g(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function m(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?g(o,!0).forEach(function(r){y(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function y(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var x={root:{minHeight:"36px",borderRadius:"6px",fontWeight:"bold"}},C={root:{minHeight:"32px",borderRadius:"0",lineHeight:"20px",boxShadow:"none"}};function O(e){var r=e.classes,o=e.color,t=e.disabled,i=e.isLoading,a=e.iconClass,l=e.onClick,c=e.children,d=h(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"confirmation":p=r.confirmation;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,f({classes:{root:r.root,contained:p,label:i?r.loadingButtonLabel:null},variant:"contained",disabled:t||i,onClick:l},d),a&&n.a.createElement("i",{className:a+" "+r.icon}),i&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(u.a,{color:"inherit",size:14})),c)}O.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},O.propTypes={classes:a.a.object.isRequired,color:a.a.oneOf(["primary","secondary","confirmation","danger"]),disabled:a.a.bool,isLoading:a.a.bool,iconClass:a.a.string,onClick:a.a.func.isRequired,children:a.a.node};var v=Object(l.withStyles)(function(e){return{root:m({minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",fontSize:"14px",color:p,textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto"}},"addin"===e.venaTheme?C.root:x.root),primary:{backgroundColor:"#0061BB","&:hover":{backgroundColor:"#00316E"},"&:disabled":{backgroundColor:"#76BDF5",color:p},"&:disabled&:hover":{backgroundColor:"#76BDF5",color:p}},secondary:{backgroundColor:"#D8D8D8",color:b,"&:hover":{backgroundColor:"#B4B4B4"},"&:disabled":{backgroundColor:"#D8D8D8",color:"#B4B4B4"},"&:disabled&:hover":{backgroundColor:"#D8D8D8",color:"#B4B4B4"}},confirmation:{backgroundColor:"#009C49","&:hover":{backgroundColor:"#006E2A"},"&:disabled":{backgroundColor:"#7EAA93",color:p},"&:disabled&:hover":{backgroundColor:"#7EAA93",color:p}},danger:{backgroundColor:"#FF5555","&:hover":{backgroundColor:"#BC3C3C"},"&:disabled":{backgroundColor:"#FF7F84",color:p},"&:disabled&:hover":{backgroundColor:"#FF7F84",color:p}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible"}}})(O);function F(){return(F=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function k(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function w(e){var r=e.classes,o=e.color,t=e.disabled,i=e.isLoading,a=e.iconClass,l=e.onClick,c=e.children,d=k(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,F({classes:{root:r.root,text:p,label:i?r.loadingButtonLabel:null},variant:"text",disabled:t||i,onClick:l},d),a&&n.a.createElement("i",{className:a+" "+r.icon}),i&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(u.a,{color:"inherit",size:14})),c)}w.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},w.propTypes={classes:a.a.object.isRequired,color:a.a.oneOf(["primary","secondary","danger"]),disabled:a.a.bool,isLoading:a.a.bool,iconClass:a.a.string,onClick:a.a.func.isRequired,children:a.a.node};var j=Object(l.withStyles)(function(e){return{root:{minHeight:"36px",minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto",color:"#D8D8D8"},"&:disabled&:hover":{color:"#D8D8D8"}},primary:{color:"#0085FF","&:hover":{backgroundColor:"#D0E8FC"}},secondary:{color:b,"&:hover":{backgroundColor:"#D8D8D8"}},danger:{color:"#FF5555","&:hover":{backgroundColor:"#FFD2D4"}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible",color:b}}})(w),T=o(5),D=o.n(T),P=o(6),S=o.n(P),E=function(e){var r=e.classes,o=e.checked,t=e.onChange,i=e.enabledText,a=e.disabledText;return n.a.createElement(D.a,{control:n.a.createElement(S.a,{classes:{switchBase:r.switchBase,bar:r.switchBar,icon:r.switchIcon,iconChecked:r.switchIconChecked,checked:r.switchChecked},inputProps:{"aria-checked":o},checked:o,onChange:t}),label:o?i:a,classes:{label:o?r.switchLabelOn:r.switchLabelOff}})};E.defaultProps={checked:!1,onChange:function(){},enabledText:"ON",disabledText:"OFF"},E.propTypes={classes:a.a.object.isRequired,checked:a.a.bool,onChange:a.a.func.isRequired,enabledText:a.a.string,disabledText:a.a.string};var B=Object(l.withStyles)(function(e){return{switchBase:{"&$switchChecked":{color:p,"& + $switchBar":{backgroundColor:"#009C49"}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},switchChecked:{transform:"translateX(12px)","& + $switchBar":{opacity:1}},switchBar:{borderRadius:10,width:30,height:16,marginTop:-8,marginLeft:-4,backgroundColor:"#D8D8D8",opacity:1},switchIcon:{width:12,height:12,marginLeft:23,boxShadow:"none"},switchLabelOn:{color:"#009C49",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"},switchLabelOff:{color:"#B4B4B4",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"}}})(E),R=o(7),q=o.n(R),L=o(8),I=o.n(L);function W(){return(W=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function _(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function A(e){var r=e.classes,o=e.disabled,t=e.endAdornment,i=e.error,a=e.fullWidth,l=e.helperText,c=e.id,s=e.label,d=e.onChange,u=e.placeholder,p=e.readOnly,b=e.required,f=e.value,h=_(e,["classes","disabled","endAdornment","error","fullWidth","helperText","id","label","onChange","placeholder","readOnly","required","value"]);return n.a.createElement(q.a,W({disabled:o,error:i,fullWidth:a,helperText:l,id:c,label:s,onChange:d,placeholder:u,value:f,variant:"standard",InputLabelProps:{shrink:!0,FormLabelClasses:{root:r.labelRoot,disabled:r.labelDisabled,error:r.labelError,focused:r.labelFocused},required:b},InputProps:{classes:{root:r.inputRoot,input:r.inputInput,disabled:r.inputDisabled,error:r.inputError,formControl:r.inputFormControl,focused:r.inputFocused},disableUnderline:!0,endAdornment:t?n.a.createElement(I.a,{position:"end"},t):null,readOnly:p},classes:{root:r.formControlRoot,fullWidth:r.formControlFullWidth},FormHelperTextProps:{classes:{root:r.helperTextRoot,error:r.helperTextError}}},h))}A.defaultProps={disabled:!1,error:!1,readOnly:!1,required:!1},A.propTypes={classes:a.a.object.isRequired,disabled:a.a.bool,error:a.a.bool,endAdornment:a.a.node,fullWidth:a.a.bool,helperText:a.a.node,id:a.a.string,label:a.a.node,onChange:a.a.func,placeholder:a.a.string,readOnly:a.a.bool,required:a.a.bool,value:a.a.any};var $=Object(l.withStyles)(function(e){return{formControlRoot:{minWidth:"320px",margin:"16px 0 8px 0","&$formControlFullWidth":{minWidth:"0"}},formControlFullWidth:{},helperTextRoot:{color:"#6B6C67",fontSize:"12px",fontStyle:"italic","&$helperTextError":{color:"#FF5555"}},helperTextError:{},inputInput:{padding:"1px 0 0 0"},inputRoot:{backgroundColor:p,border:"1px solid ".concat("#D8D8D8"),boxSizing:"border-box",color:b,fontSize:"14px",height:"32px",marginTop:"24px",paddingLeft:"8px",paddingRight:"8px","&$inputFormControl":{marginTop:"24px"},"&:hover":{border:"1px solid ".concat("#6B6C67")},"&$inputDisabled":{border:"1px solid ".concat("#D8D8D8"),backgroundColor:"#F2F2F2"},"&$inputError":{border:"1px solid ".concat("#FF5555")},"&$inputFocused":{border:"1px solid ".concat("#0085FF")}},inputDisabled:{},inputError:{},inputFormControl:{},inputFocused:{},labelRoot:{color:b,fontSize:"14px",transform:"scale(1)","&$labelDisabled":{color:b},"&$labelError":{color:b},"&$labelFocused":{color:b}},labelDisabled:{},labelError:{},labelFocused:{}}})(A);o.d(r,"Button",function(){return v}),o.d(r,"FlatButton",function(){return j}),o.d(r,"Switch",function(){return B}),o.d(r,"TextField",function(){return $})}])});