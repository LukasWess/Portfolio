var symbols =
  "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ!@#$%^&*()_+{}|:<>?[];',./`~-=\\\"";
var drops = 500; // number of drops
var speed = 5; // speed of the drops

for (var i = 0; i < drops; i++) {
  var drop = document.createElement("div");
  drop.className = "drop";
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = Math.random() * speed + speed + "s";
  drop.style.animationDelay = Math.random() * 2 + "s";
  drop.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  document.body.appendChild(drop);
}
