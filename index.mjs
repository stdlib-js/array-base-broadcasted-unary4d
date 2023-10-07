// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@esm/index.mjs";function a(a,s,t){var o,d,e,f,i,n,m,b,c,j,l,p,h,u,v,x,y,g,k,q,w,z,A,B,C,D,E;if(i=(A=s[1])[3],n=A[2],m=A[1],b=A[0],!(i<=0||n<=0||m<=0||b<=0))for(D=(C=r(a[0],s[0],A)).data,o=(B=C.strides)[3],d=B[2],e=B[1],f=B[0],E=a[1],x=0,p=0;p<b;p++){for(v=0,k=D[x],z=E[p],l=0;l<m;l++){for(u=0,g=k[v],w=z[l],j=0;j<n;j++){for(h=0,y=g[u],q=w[j],c=0;c<i;c++)q[c]=t(y[h]),h+=o;u+=d}v+=e}x+=f}}export{a as default};
//# sourceMappingURL=index.mjs.map
