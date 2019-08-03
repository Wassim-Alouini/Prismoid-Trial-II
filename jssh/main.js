document.querySelector("#form").addEventListener("submit", function(e){
    //    e.preventDefault()
        submit()
      }
    )
    
    var firebaseConfig = {
      apiKey: "AIzaSyCcL0CT-LWDLqRov0lRbXg8nNlnz1oD2VA",
      authDomain: "final-project-gmc-17c4f.firebaseapp.com",
      databaseURL: "https://final-project-gmc-17c4f.firebaseio.com",
      projectId: "final-project-gmc-17c4f",
      storageBucket: "",
      messagingSenderId: "591368905478",
      appId: "1:591368905478:web:911885db6c27ea77"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    let database = firebase.database();
    
    let ref = database.ref("forms")
    
    function submit(){
    
    let data = {
      url : document.getElementById("url").value ,
      title : document.getElementById("title").value ,
      author : document.getElementById("authornetworks").value,

    }
    ref.push(data);
    }
    ref.on("value", gotData , errdata)
    function gotData(data) {
      data = data.val()
      let keys = Object.keys(data)
      console.log(data)
      console.log(keys)
      
    }
    function errdata(error) {
      console.log(error.message, error.code)
    }
    