import './polyfills.server.mjs';
import{B as _,a as o,b as d,c as r,d as a,e as c,f as h,g as f,h as p,i as s,p as g,r as m,s as y,v}from"./chunk-ZC7L3NEU.mjs";import{a as l,b as u}from"./chunk-VVCT4QZE.mjs";var I={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pe=u(l({},I),{"[class.ng-submitted]":"isSubmitted"});var S=new d("CallSetDisabledState",{providedIn:"root",factory:()=>V}),V="always";var O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=o({});let t=e;return t})();var D=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:S,useValue:n.callSetDisabledState??V}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=o({imports:[O]});let t=e;return t})();var b=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["app-home"]],standalone:!0,features:[s],decls:0,vars:0,template:function(i,w){},dependencies:[D]});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this.title="app1"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["app-root"]],standalone:!0,features:[s],decls:4,vars:0,consts:[[1,"fa-solid","fa-home"]],template:function(i,w){i&1&&(c(0,"h1"),p(1,"Hello,Angular"),h(),f(2,"app-home")(3,"i",0))},dependencies:[b]});let t=e;return t})();var M=[];var E={providers:[_(M),y()]};var N={providers:[v()]},F=g(E,N);var x=()=>m(A,F),Ge=x;export{Ge as a};
