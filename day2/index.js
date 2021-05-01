let A = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]
   function spi(A){
          let res=[];
          let t=0;
          let l=0;
          let b = A.length-1;
          let r = A[0].length-1;
          let dir=0;
          while(t<=b && l<=r){
              if(dir===0){
              for(let i=l;i<=r;i++){res.push(A[t][i])};
              t++;
              }else if(dir===1){
              for(let i=t;i<=b;i++){res.push(A[i][r])};
              r--;    
            }else if(dir===2){
                for(let i=r;i>=l;i--){res.push(A[b][i])};
                b--;    
            }else {
                for(let i=b;i>=t;i--){res.push(A[i][l])};
                l++;    
            }
              dir=(dir+1)%4;
          }
          return res
      }
   
console.log(spi(A))
