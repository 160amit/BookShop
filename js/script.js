{
    let count = 0;
    document.getElementsByClassName("nright")[0].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count += 10;
            document.getElementsByClassName("card")[0].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[0].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count -= 10;
            document.getElementsByClassName("card")[0].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 0;
        }, 1000);
    })
}
{
    let count = 0;
    document.getElementsByClassName("nright")[1].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count += 10;
            document.getElementsByClassName("card")[1].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[1].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count -= 10;
            document.getElementsByClassName("card")[1].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 0;
        }, 1000);
    })
}
{
    let count = 0;
    document.getElementsByClassName("nright")[2].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count += 10;
            document.getElementsByClassName("card")[2].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[2].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count -= 10;
            document.getElementsByClassName("card")[2].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 0;
        }, 1000);
    })
}
{
    let count = 0;
    document.getElementsByClassName("nright")[3].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count += 10;
            document.getElementsByClassName("card")[3].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[3].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count -= 10;
            document.getElementsByClassName("card")[3].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 0;
        }, 1000);
    })
}
{
    let count = 0;
    document.getElementsByClassName("nright")[4].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count += 10;
            document.getElementsByClassName("card")[4].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[4].addEventListener("click", (element) => {
        const a = setInterval(() => {
            count -= 10;
            document.getElementsByClassName("card")[4].scrollLeft = count;

        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count = 0;
        }, 1000);
    })
}
{
    let count=0;
    document.getElementsByClassName("nright")[5].addEventListener("click",(element)=>{
        const a=setInterval(() => {
            count+=10;
            document.getElementsByClassName("card")[5].scrollLeft=count;
            
        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count=900
        }, 1000);
    })
    document.getElementsByClassName("nleft")[5].addEventListener("click",(element)=>{
        const a=setInterval(() => {
            count-=10;
            document.getElementsByClassName("card")[5].scrollLeft=count;
            
        }, 1);
        setTimeout(() => {
            clearInterval(a)
            count=0;
        }, 1000);
    })
}




