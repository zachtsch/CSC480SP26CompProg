function maxDistance(colors: number[]): number {
    let dist = 0;
    for(let i = 0; i < colors.length; i++){
        for(let k = i+1; k < colors.length; k++){
            if(colors[i]==colors[k]) continue;
            dist=Math.max(dist,Math.abs(k-i))
        }   
    }
    return dist;
};