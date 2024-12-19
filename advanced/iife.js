const pr = () => {
    return new Promise((res, rej)=> {
        setTimeout(()=> {
            res('data received');
        }, 1000);
    });
}

(async ()=> {
    const a = await pr();
    console.log(a);
    
    const b = await pr();
    console.log(b);
    
    const c = await pr();
    console.log(c);
    
}) ();