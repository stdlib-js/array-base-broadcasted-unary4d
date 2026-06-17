"use strict";var F=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(d){throw (r=0, d)}};};var E=F(function(K,D){
var G=require('@stdlib/array-base-broadcast-array/dist');function H(i,r,d){var q,m,p,A,s,u,f,n,t,x,e,o,y,c,j,S,g,h,k,l,w,z,a,v,b,B,C;if(a=r[1],s=a[3],u=a[2],f=a[1],n=a[0],!(s<=0||u<=0||f<=0||n<=0))for(b=G(i[0],r[0],a),B=b.data,v=b.strides,q=v[3],m=v[2],p=v[1],A=v[0],C=i[1],S=0,o=0;o<n;o++){for(j=0,k=B[S],z=C[o],e=0;e<f;e++){for(c=0,h=k[j],w=z[e],x=0;x<u;x++){for(y=0,g=h[c],l=w[x],t=0;t<s;t++)l[t]=d(g[y]),y+=q;c+=m}j+=p}S+=A}}D.exports=H
});var I=E();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
