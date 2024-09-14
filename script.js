var tab = localStorage.getItem("tab");

  if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
  } else {
  var tabData = {};
  }

  var settingsDefaultTab = {
    title: "Study.com",
    icon: "/images/app-logo-transgender.png",
    scriptSrc: "/app.js"
  };

  function setTitle(title = "") {
    if (title) {
      document.title = title;
    } else {
      document.title = settingsDefaultTab.title;
    }

    var tab = localStorage.getItem("tab");

    if (tab) {
      try {
        var tabData = JSON.parse(tab);
      } catch {
        var tabData = {};
      }
    } else {
      var tabData = {};
    }

    if (title) {
      tabData.title = title;
    } else {
      delete tabData.title;
    }

    localStorage.setItem("tab", JSON.stringify(tabData));
  }

  function setFavicon(icon) {
    if (icon) {
      document.querySelector("link[rel='icon']").href = icon;
    } else {
      document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
    }

    var tab = localStorage.getItem("tab");

    if (tab) {
      try {
        var tabData = JSON.parse(tab);
      } catch {
        var tabData = {};
      }
    } else {
      var tabData = {};
    }

    if (icon) {
      tabData.icon = icon;
    } else {
      delete tabData.icon;
    }

    localStorage.setItem("tab", JSON.stringify(tabData));
  }

  function setCloak() {
    var cloak = document.getElementById("premadecloaks").value;
    switch (cloak) {
      case "defaultsettings":
      setTitle("Study.com");
      setFavicon("/images/app-logo-transgender.png");
      localStorage.setItem("tab", JSON.stringify({}));
      location.reload();
      break;
      case "search":
        setTitle("Google");
        setFavicon("/assets/img/favicons/google.ico");
        location.reload();
        break;
      case "drive":
        setTitle("My Drive - Google Drive");
        setFavicon("/assets/img/favicons/google-drive-ico.ico");
        location.reload();
        break;
      case "classroom":
        setTitle("Google Classroom");
        setFavicon("/assets/img/favicons/google-classroom.ico");
        location.reload();
        break;
      case "gmail":
        setTitle("Gmail");
        setFavicon("/assets/img/favicons/gmail.ico");
        location.reload();
        break;
      case "word":
        setTitle("Document.docx");
        setFavicon("/assets/img/favicons/word.ico");
        location.reload();
        break;
      case "powerpoint":
        setTitle("Presentation.pptx");
        setFavicon("/assets/img/favicons/powerpoint.ico");
        location.reload();
        break;
      case "youtube": 
        setTitle("YouTube");
        setFavicon("/assets/img/favicons/youtube.ico");
        location.reload();
        break;
      case "calendar":
        setTitle("Google Calendar");
        setFavicon("/assets/img/favicons/google-calender.ico");
        location.reload();
        break;
      case "meets":
        setTitle("Google Meet");
        setFavicon("/assets/img/favicons/google-meet.ico");
        location.reload();
        break;
      case "canvas":
        setTitle("Canvas");
        setFavicon("/assets/img/favicons/canvas.ico");
        location.reload();
        break;
      case "zoom":
        setTitle("Zoom");
        setFavicon("/assets/img/favicons/zoom.ico");
        location.reload();
        break;
      case "khan":
        setTitle("Khan Academy"); 
        setFavicon("/assets/img/favicons/khan-academy.ico");
        location.reload();
        break;
      case "fakesearch":
        setTitle("calculator - Google Search"); 
        setFavicon("/assets/img/favicons/google.ico");
        location.reload();
        break;
      case "brunysex":
        setTitle("BrunysIXL"); 
        setFavicon("/images/sillypartners/brunysixl.png");
        location.reload();
        break;
      case "sizzlecentral":
        setTitle("Szvy Central"); 
        setFavicon("/images/sillypartners/szvy.png");
        location.reload();
        break;
      case "meximath":
        setTitle("MexiMath"); 
        setFavicon("/images/sillypartners/meximath.png");
        location.reload();
        break;
      case "pablocp":
        setTitle("PabloCP"); 
        setFavicon("/assets/img/favicons/pablo.png");
        location.reload();
        break;
    }
  }

  function resetTab() {
    setTitle("Study.com");
    setFavicon("/images/app-logo-transgender.png");
     var tab = localStorage.getItem("tab");

     if (tab) {
       try {
         var tabData = JSON.parse(tab);
         var theme = tabData.theme
         var mobiledata
       } catch {
         var tabData = {};
       }
     } else {
       var tabData = {};
     }

     if (theme) {
       const consttheme = tabData.theme;
       localStorage.setItem("tab", JSON.stringify({}));
       setTheme(consttheme);
     } 
     else if (mobiledata){
      const constmobiledata = tabData.mobilescreen;
      localStorage.setItem("tab", JSON.stringify({}));
      var tabData = JSON.parse(localStorage.getItem("tab")) || {};
      tabData.mobilescreen = constmobiledata;
      localStorage.setItem("tab", JSON.stringify(tabData));
     }
     else {
      localStorage.setItem("tab", JSON.stringify({}));
     }
    location.reload();
  }

  window.onload = () => {
    if (onLoadData) {
      eval(onLoadData);
    }
  };

  window.onerror = (e) => {
    throw new Error(e);
  };

  var tab = localStorage.getItem('tab');
  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (tabData.title) {
    document.title = tabData.title;
  }

  if (tabData.icon) {
    document.querySelector('link[rel="icon"]').href = tabData.icon;
  }