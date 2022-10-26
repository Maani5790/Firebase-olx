




function getData(e) {

  window.location.href = "../HTML/index.html";

    // window.location.href = "../HTML/product_olx.html"

    // ----------------------- Geting value of Ad Itemm ---------------------------

    var Ad_Item = document.getElementById("form6Example1").value

    
    

    // ----------------------- Geting value of Brand Selection ---------------------------

    // var e = document.getElementById("ddlViewBy");
    // var value = e.value;
    // var text = e.options[e.selectedIndex].text;


    var e = document.getElementById("select_brand");
    
    const value = e.value;
    const brand = e.options[e.selectedIndex].text;


    // ----------------------- Geting value of Description ----------------------------
    var description = document.getElementById("form6Example7").value

    
    // ----------------------- Geting value Your Condition ---------------------------
    var e = document.getElementById("conditionGet");
    const condition = e.value;
    const condition_get = e.options[e.selectedIndex].text;


    // ----------------------- Geting value Your ads Location---------------------------
    var e = document.getElementById("Ads_Location");
    const Ads_Location = e.value;
    const ads = e.options[e.selectedIndex].text;


    // ----------------------- Geting value of City ----------------------------
    var price= document.getElementById("form6Example5").value


    
  

    document.getElementById('file').addEventListener('change', (e)=>{
    const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        document.body.style.background = `url(data:image/png;base64,${base64String})`;
      };
      reader.readAsDataURL(file);
  })

  // ----------------------- Storing DaTa in Array  -----------------------------------


  let dataArrayStore = []

  if (Ad_Item !== "" && price !== "" && description !== ""){
    if (localStorage.getItem("ADS_INFORMATION")) {
      dataArrayStore = JSON.parse(localStorage.getItem("ADS_INFORMATION"))
      dataArrayStore.push({Ad_Item , brand , price , description, ads, condition_get})

      localStorage.setItem("ADS_INFORMATION" , JSON.stringify(dataArrayStore))

      document.getElementById("form_action").setAttribute("action", "../HTML/index.html")

    }
    else {
      dataArrayStore.push({Ad_Item , brand , price , description, ads, condition_get})
      localStorage.setItem("ADS_INFORMATION" , JSON.stringify([{Ad_Item , brand , price , description, ads, condition_get}]))
    }
  }
  else{
    alert("Please Fill All Requirements")
  }




  // -------------------------- Storing Data separetely ------------------------

  if (Ad_Item !== "" && price !== "" && description !== ""){


    localStorage.setItem("AD Item" , Ad_Item)
    localStorage.setItem("Brand_Selected" ,brand)
    localStorage.setItem("Description" , description)
    localStorage.setItem("Condtion_Select" , condition_get)
    localStorage.setItem("Ads Location" , ads)
    localStorage.setItem("Price" ,price )

    document.getElementById("form_action").setAttribute("action", "../HTML/product_olx.html")

  }
  else{
    alert("Please Fill All Requirements")
  }




}

// --------------------------- Getting Data through separate fieds -----------------------------

document.getElementById("Ads_title").innerText = localStorage.getItem("AD Item[]")
document.getElementById("description_item").innerText = localStorage.getItem("Description")
document.getElementById("price_item").innerText = localStorage.getItem("Price")

document.getElementById("conditon_item").innerText = localStorage.getItem("Condtion_Select")
document.getElementById("location").innerText = localStorage.getItem("Ads Location")
document.getElementById("location_map").innerText = localStorage.getItem("Ads Location")
document.getElementById("price_side").innerText = localStorage.getItem("Price")









