window.onload = function() {
    var submit_dropdown = document.querySelector("#contest-nav-tabs > ul > li:nth-child(6) > ul");
    const path_slice = location.pathname.split('/');
    const contest_path = path_slice[1] + '/' + path_slice[2];
    const fave = "sansen";
    submit_dropdown.innerHTML += `<li><a href="/${contest_path}/submissions?f.User=${fave}"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> ${fave}の提出</a></li>`;
  };

