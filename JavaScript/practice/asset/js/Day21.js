const datas = async ()=>{
    const getdatas = await fetch("https://dummyjson.com/products")
    const change = getdatas.json()
    const product = change.products
    const showdata_tbody = document.getElementById("showproduct")
    let getshow = ""
    data.forEach((e)=> {
        getshow += '<tr>
        <td>${e.id}</td>
        <td>${e.titlle}</td>
        <td>${e.description}</td>
        <td>${e.id}</td>
        <td>${e.id}</td>



        </tr>'
        
    });



    // console.log(getdatas);
    

}
datas()