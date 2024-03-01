"use strict";var F=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var D=F(function(K,C){
var G=require('@stdlib/array-base-broadcast-array/dist');function H(i,r,E){var b,q,m,p,d,s,u,f,t,x,e,o,n,y,c,j,A,g,h,k,l,w,a,v,S,z,B;if(a=r[1],d=a[3],s=a[2],u=a[1],f=a[0],!(d<=0||s<=0||u<=0||f<=0))for(S=G(i[0],r[0],a),z=S.data,v=S.strides,b=v[3],q=v[2],m=v[1],p=v[0],B=i[1],j=0,o=0;o<f;o++){for(c=0,h=z[j],w=B[o],e=0;e<u;e++){for(y=0,g=h[c],l=w[e],x=0;x<s;x++){for(n=0,A=g[y],k=l[x],t=0;t<d;t++)k[t]=E(A[n]),n+=b;y+=q}c+=m}j+=p}}C.exports=H
});var I=D();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
