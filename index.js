domReady(()=>{

    const checkbox=document.getElementById("checkbox-ad")

    checkbox.checked = localStorage.getItem("checked")==="true";




    checkbox.addEventListener("change",()=>{


        if(checkbox.checked){
            localStorage.setItem("checked","true")
        }
        else{
            localStorage.removeItem("checked")
        }
    },false)
})



function domReady(callback){

    if(document.readyState==="complete"){

        callback()
    }
    else{

        window.addEventListener("load",()=>{

            callback()

        } ,false )
    }
}