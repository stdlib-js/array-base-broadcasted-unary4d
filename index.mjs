// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.0-esm/index.mjs";function a(a,s,t){var o,d,e,f,i,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E;if(i=(A=s[1])[3],n=A[2],m=A[1],b=A[0],!(i<=0||n<=0||m<=0||b<=0))for(D=(C=r(a[0],s[0],A)).data,o=(B=C.strides)[3],d=B[2],e=B[1],f=B[0],E=a[1],x=0,p=0;p<b;p++){for(u=0,k=D[x],z=E[p],l=0;l<m;l++){for(h=0,g=k[u],w=z[l],j=0;j<n;j++){for(v=0,y=g[h],q=w[j],c=0;c<i;c++)q[c]=t(y[v]),v+=o;h+=d}u+=e}x+=f}}export{a as default};
//# sourceMappingURL=index.mjs.map
