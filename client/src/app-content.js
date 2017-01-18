import {getReviews} from "api";
import s_SearchClass from "sSearchClass";

class searchPipeline{
    constructor(){
        this.steps = [];
    }
    
    use(func){
        this.steps.push(func);
        console.log(func);
    }

    search(){
        for(let x = 0; x < this.steps.length; x ++){
            console.log("searching");
            let result = this.steps[x].apply(this);
            if(result === true)
                return;
        }
        setTimeout(this.search.bind(this), 2000);
    }
}

const iframeID = "ptifrmtgtframe";
let iframe = document.getElementById(iframeID);


// If there is an iframe detected in the browser, redirect to the source of the iframe
if(iframe != null){
    const src = iframe.src;
    window.location = src;
    console.log(src);
} else {
    beginSearch();
}

function beginSearch(){
    console.log("Setting up pipeline");
    console.log(s_SearchClass);
    let sPipeline = new searchPipeline();
    sPipeline.use(s_SearchClass);

    sPipeline.search();
}
