var domain = window.location.hostname.split(".")[1]

if (domain == "google") {
    // HJandle Main Google Page
    // Change Logo
    document.getElementById('hplogo').src = "https://raw.githubusercontent.com/JNSAPH/Firefox-Extensions/master/Guwugle/assets/logo.png"
    document.getElementById('hplogo').srcset = "https://raw.githubusercontent.com/JNSAPH/Firefox-Extensions/master/Guwugle/assets/logo.png"
    document.getElementById('hplogo').style.width = "auto";
    document.getElementById('hplogo').height = 120;

    // Change Title
    document.title = document.title.replace("Google", "Guwugle")

    // Change Text
    document.querySelectorAll("a").forEach(e=>{
        e.innerHTML = e.innerHTML.replace("Google","Guwugle").replace("google","guwugle")
    })
}