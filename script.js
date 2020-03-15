var animate_skills = true;

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function noScroll() {
  document.body.style.position = 'fixed';
  document.body.style.top = `-      ${window.scrollY}px`;
}

function Scroll() {
  document.body.style.position = 'relative';
  document.body.style.top = `-      ${window.scrollY}px`;
}

$('#cover-link').click(function(){
  
  if (animate_skills == true) {
    animate_skills = false;
    $('.barra-nivel').each(function() {
          var valorLargura = $(this).data('nivel');
          var valorNivel = $(this).html("<div class='valor-nivel'>"+valorLargura+"</div>");
            $(this).animate({
                width: valorLargura
            });
    }); 
  }
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
        
        Scroll();
      }
    }
  });

function restart(text){
  $(text).css({'top': '40px'}),
  $(text).css({'display': 'none'}),
  $(text).animate({'top': 0}, {"duration":1000,"queue":false});
  $(text).fadeIn(1000);
}

$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});

noScroll()


$('[data-fancybox]').fancybox({
  protect: true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});
// #482683
$('.git-icon').hover(function(){
  $('.fa-github').css("color", "#292929");
  $('.fa-github').css("background-color", "white");
  }, function(){
  $('.fa-github').css("color", "white");
  $('.fa-github').css("background-color", "#292929");
});

$('.linkedin-icon').hover(function(){
  $('.fa-linkedin').css("color", "#292929");
  $('.fa-linkedin').css("background-color", "white");
  }, function(){
  $('.fa-linkedin').css("color", "white");
  $('.fa-linkedin').css("background-color", "#292929");
});

$('.codepen-icon').hover(function(){
  $('.fa-codepen').css("color", "#292929");
  $('.fa-codepen').css("background-color", "white");
  }, function(){
  $('.fa-codepen').css("color", "white");
  $('.fa-codepen').css("background-color", "#292929");
});

$('.codepen-icon').hover(function(){
  $('.fa-codepen').css("color", "#292929");
  $('.fa-codepen').css("background-color", "white");
  }, function(){
  $('.fa-codepen').css("color", "white");
  $('.fa-codepen').css("background-color", "#292929");
});

/* Header Birds Animation */

var Bird = {
  def: function(n, m, s) {
    if (m) this.e(n.prototype, m);
    if (s) this.e(n, s);
    return n;
  },
  e: function(o, p) {
    for (prop in p) o[prop] = p[prop];
    return o;
  },
  v: [
    [5, 0, 0],
    [-5, -2, 1],
    [-5, 0, 0],
    [-5, -2, -1],
    [0, 2, -6],
    [0, 2, 6],
    [2, 0, 0],
    [-3, 0, 0]
  ],
  beak: [
    [0, 1, 2],
    [4, 7, 6],
    [5, 6, 7]
  ],
  L: null,
  V: {
    x: 0,
    y: 0,
    z: 5000
  }
}
Bird.obj = Bird.def(
  function() {
    this.vtr = new Bird.Vtr(),
      this.accel, this.width = 600, this.height = 600, this.depth = 300, this.ept, this.area = 200,
      this.msp = 4, this.mfrc = 0.1, this.coll = false;
    this.pos = new Bird.Vtr();
    this.vel = new Bird.Vtr();
    this.accel = new Bird.Vtr();
  }, {

    _coll: function(value) {
      this.coll = value;
    },
    param: function(w, h, dth) {
      this.width = w;
      this.height = h;
      this.depth = dth;
    },
    run: function(b) {
      if (this.coll) {
        this.vtr.set(-this.width, this.pos.y, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.width, this.pos.y, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, -this.height, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.height, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.pos.y, -this.depth);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.pos.y, this.depth);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
      }
      if (Math.random() > 0.5) {
        this.fly(b);
      }
      this.move();
    },
    fly: function(b) {
      if (this.ept) {
        this.accel.add(this.meet(this.ept, 0.005));
      }
      this.accel.add(this.line(b));
      this.accel.add(this.togeth(b));
      this.accel.add(this.apart(b));
    },
    move: function() {
      this.vel.add(this.accel);
      var l = this.vel.len();
      if (l > this.msp) {
        this.vel.lowscale(l / this.msp);
      }
      this.pos.add(this.vel);
      this.accel.set(0, 0, 0);
    },
    detect: function(pt) {
      var dir = new Bird.Vtr();
      dir.copy(this.pos);
      dir.sub(pt);
      dir.scale(1 / this.pos.dsq(pt));
      return dir;
    },
    rep: function(pt) {
      var dist = this.pos.dst(pt);if (dist < 150) {
        var dir = new Bird.Vtr();
        dir.subv(this.pos, pt);
        dir.scale(0.5 / dist);
        this.accel.add(dir);
      }
    },
    meet: function(pt, amt) {
      var dir = new Bird.Vtr();
      dir.subv(pt, this.pos);
      dir.scale(amt);
      return dir;
    },
    line: function(b) {
      var _b, totvel = new Bird.Vtr(),
        cnt = 0;
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        var dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          totvel.add(_b.vel);
          cnt++;
        }
      }
      if (cnt > 0) {
        totvel.lowscale(cnt);
        var v = totvel.len();
        if (v > this.mfrc) {
          totvel.lowscale( v / this.mfrc);
        }
      }
      return totvel;
    },
    togeth: function(b) {
      var _b, dist,
        plus = new Bird.Vtr(),
        dir = new Bird.Vtr(),
        cnt = 0;
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          plus.add(_b.pos);
          cnt++;
        }
      }
      if (cnt > 0) {
        plus.lowscale(cnt);
      }
      dir.subv(plus, this.pos);
      var l = dir.len();
      if (l > this.mfrc) {
        dir.lowscale(l / this.mfrc);
      }
      return dir;
    },
    apart: function(b) {
      var _b, dist,
        plus = new Bird.Vtr(),
        rep = new Bird.Vtr();
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          rep.subv(this.pos, _b.pos);
          rep.level();
          rep.lowscale(dist);
          plus.add(rep);
        }
      }
      return plus;
    }
  }
);
Bird.Build = Bird.def(
  function() {
    this.base = 0, this.left = 1, this.right = 2;
    this.pos = new Bird.Vtr();
    this.rot = new Bird.Vtr();
    this.bbase = this.tri(this.base);
    this.leftwing = this.tri(this.left);
    this.rightwing = this.tri(this.right);
  }, {
    matrix: function() {
      this.bbase.vtx();
      this.leftwing.vtx();
      this.rightwing.vtx();
      this.leftwing.wingY(this.wY);
      this.rightwing.wingY(this.wY);
      this.bbase.rotY(this.rot.y);
      this.bbase.rotZ(this.rot.z);
      this.leftwing.rotY(this.rot.y);
      this.leftwing.rotZ(this.rot.z);
      this.rightwing.rotY(this.rot.y);
      this.rightwing.rotZ(this.rot.z);
      this.bbase.trans(this.pos);
      this.leftwing.trans(this.pos);
      this.rightwing.trans(this.pos);
    },
    draw: function() {
      this.bbase.draw();
      this.leftwing.draw();
      this.rightwing.draw();
    },
    tri: function(i) {
      var v1, v2, v3, v;
      v = Bird.v[Bird.beak[i][0]];
      v1 = new Bird.Vtr(v[0], v[1], v[2]);
      v = Bird.v[Bird.beak[i][1]];
      v2 = new Bird.Vtr(v[0], v[1], v[2]);
      v = Bird.v[Bird.beak[i][2]];
      v3 = new Bird.Vtr(v[0], v[1], v[2]);
      return new Bird.Tri(v1, v2, v3);
    },
    wang: function(y) {
      var v1 = Bird.v[Bird.beak[1][1]];
      this.rot.x = Math.atan2(y, v1[0]);
    },
    zpos: function() {
      var z1 = this.bbase._z();
      var z2 = this.leftwing._z();
      var z3 = this.rightwing._z();
      return Math.min(z1, z2, z3);
    },
    wing: function(y) {
      this.wY = y;
    }
  }
);
Bird.Tri = Bird.def(
  function(p1, p2, p3) {
    this.mainv = [p1.copy(), p2.copy(), p3.copy()];
    this.Vtxs = [p1.copy(), p2.copy(), p3.copy()];
    this.bv = new Bird.Vtr(0.5, 0.5, 0.8);
  }, {
    draw: function() {
      var v1 = [this.Vtxs[0].Pt().x, this.Vtxs[0].Pt().y];
      var v2 = [this.Vtxs[1].Pt().x, this.Vtxs[1].Pt().y];
      var v3 = [this.Vtxs[2].Pt().x, this.Vtxs[2].Pt().y];
      var col = this.col();
      Bird.$.fillStyle = col;
      Bird.$.strokeStyle = col;
      Bird.$.lineWidth = 0.1;
      Bird.$.beginPath();
      Bird.$.moveTo(v1[0], v1[1]);
      Bird.$.lineTo(v2[0], v2[1]);
      Bird.$.lineTo(v3[0], v3[1]);
      Bird.$.lineTo(v1[0], v1[1]);
      Bird.$.closePath();
      Bird.$.fill();
      Bird.$.stroke();
    },
    rotX: function(a) {
      var ang = a;
      this.Vtxs.forEach(
        function(e, i, a) {
          Bird.Matrix.rotX(e, ang);
        }
      );
    },
    rotY: function(a) {
      var ang = a;
      this.Vtxs.forEach(
        function(e, i, a) {
          Bird.Matrix.rotY(e, ang);
        }
      );
    },
    rotZ: function(a) {
      var ang = a;
      this.Vtxs.forEach(
        function(e, i, a) {
          Bird.Matrix.rotZ(e, ang);
        }
      );
    },
    trans: function(s) {
      var trans = s;
      this.Vtxs.forEach(
        function(e, i, a) {
          Bird.Matrix.trans(e, [trans.x, trans.y, trans.z]);
        }
      );
    },
    vtx: function(idx) {
      for (var i = 0; i < 3; i++) {
        var x = this.mainv[i].x;
        var y = this.mainv[i].y;
        var z = this.mainv[i].z;
        this.Vtxs[i].x = x;
        this.Vtxs[i].y = y;
        this.Vtxs[i].z = z;
      }
    },
    wingY: function(y) {
      this.Vtxs[0].y = y;
    },
    _z: function() {
      return Math.min(this.Vtxs[0].z, this.Vtxs[1].z, this.Vtxs[2].z);
    },
    col: function() {
      var e = 0.3,
          f = 0.3,
          g = 0.7;
      var bw = new Bird.Vtr(1, 1, 1);
      var n = this.norm();
      var x = this.Vtxs[0].copy();
      var v = x.sub(Bird.V);
      v.level();
      x = this.Vtxs[0].copy();
      var l = x.sub(Bird.L);
      l.level();
      var p = l.p(n);
      var x1 = n.copy();
      x1.scale(p);
      x1.scale(2);
      var r = l.copy();
      r.sub(x1);
      x1.scale(-1);
      p = Math.max(x1.p(l), 0);
      var col = this.bv.copy();
      col.scale(p);
      col.scale(col, e);
      x1 = col.copy();
      var x2 = r.copy();
      x2.scale(-1);
      p = Math.pow(Math.max(x2.p(v)), 20);
      x2 = bw.copy();
      x2.scale(p * f);
      var x3 = this.bv.copy();
      x3.scale(g);
      x1.add(x2);
      x1.add(x3);
      var _r = Math.floor(x1.x * 255);
      var _g = Math.floor(x1.y * 255);
      var _b = Math.floor(x1.z * 255);
      return 'rgb(' + _r + ',' + _g + ',' + _b + ')';
    },
    norm: function() {
      var v1 = this.Vtxs[0];
      var v2 = this.Vtxs[1];
      var v3 = this.Vtxs[2];
      v3.sub(v2);
      v1.sub(v3);
      v3.cross(v1);
      v3.level();
      return v3;
    }
  }
);
Bird.Vtr = Bird.def(
  function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.fl = 1000;
  }, {
    Pt: function() {
      var zsc = this.fl + this.z;
      var scale = this.fl / zsc;
      var x = this.x * scale;
      var y = this.y * scale;
      return {
        x: x,
        y: y,
        scale: scale
      };
    },
    set: function(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    },
    len: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    add: function(v, w) {

      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    },
    sub: function(v, w) {

      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    },
    subv: function(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    },
    scale: function(upd) {
      this.x *= upd;
      this.y *= upd;
      this.z *= upd;
      return this;
    },
    lowscale: function(upd) {
      if (upd !== 0) {
        var inv = 1 / upd;
        this.x *= inv;
        this.y *= inv;
        this.z *= inv;
      } else {
        this.x = 0;
        this.y = 0;
        this.z = 0;
      }
      return this;
    },
    copy: function(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    },
    dst: function(v) {
      return Math.sqrt(this.dsq(v));
    },
    dsq: function(v) {
      var dx = this.x - v.x;
      var dy = this.y - v.y;
      var dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    },
    cross: function(v, w) {
      var x = this.x,
        y = this.y,
        z = this.z;
      this.x = y * v.z - z * v.y;
      this.y = z * v.x - x * v.z;
      this.z = x * v.y - y * v.x;
      return this;
    },
    p: function(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    },
    level: function() {
      return this.lowscale(this.len());
    },
    copy: function() {
      return new Bird.Vtr(this.x, this.y, this.z);
    }
  }
);
Bird.Matrix = {
  rotX: function(pt, angX) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angX);
    var acos = Math.cos(angX);
    var xrot = [];
    xrot[0] = [1, 0, 0];
    xrot[1] = [0, acos, asin];
    xrot[2] = [0, -asin, acos];
    var calc = this.mm(pos, xrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  rotY: function(pt, angY) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angY);
    var acos = Math.cos(angY);
    var yrot = [];
    yrot[0] = [acos, 0, asin];
    yrot[1] = [0, 1, 0];
    yrot[2] = [-asin, 0, acos];
    var calc = this.mm(pos, yrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  rotZ: function(pt, angZ) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angZ);
    var acos = Math.cos(angZ);
    var yrot = [];
    yrot[0] = [acos, asin, 0];
    yrot[1] = [-asin, acos, 0];
    yrot[2] = [0, 0, 1];
    var calc = this.mm(pos, yrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  trans: function(pt, s) {
    pt.x += s[0];
    pt.y += s[1];
    pt.z += s[2];
  },
  scale: function(pt, s) {
    pt.x *= s[0];
    pt.y *= s[1];
    pt.z *= s[2];
  },
  mm: function(m1, m2) {
    var calc = [];
    calc[0] = m1[0] * m2[0][0] + m1[1] * m2[1][0] + m1[2] * m2[2][0];
    calc[1] = m1[0] * m2[0][1] + m1[1] * m2[1][1] + m1[2] * m2[2][1];
    calc[2] = m1[0] * m2[0][2] + m1[1] * m2[1][2] + m1[2] * m2[2][2];
    return calc;
  }
}

function draw() {
  var c = document.getElementById('canv');
  Bird.$ = c.getContext("2d");
  Bird.canv = {
    w: c.width = window.innerWidth,
    h: c.height = window.innerHeight
  };
  Bird.L = new Bird.Vtr(0, 2000, 5000);
  Bird.V = new Bird.Vtr(0, 0, 5000);
  var birds = [];
  var b = [];
  for (var i = 0; i < 100; i++) {
    _b = b[i] = new Bird.obj();
    _b.pos.x = Math.random() * 800 - 400;
    _b.pos.y = Math.random() * 800 - 400;
    _b.pos.z = Math.random() * 800 - 400;
    _b.vel.x = Math.random() * 2 - 1;
    _b.vel.y = Math.random() * 2 - 1;
    _b.vel.z = Math.random() * 2 - 1;
    _b._coll(true);
    _b.param(400, 400, 800);
    bird = birds[i] = new Bird.Build();
    bird.phase = Math.floor(Math.random() * 62.83);
    bird.pos = b[i].pos;
  }

  run();

  function run() {
    window.requestAnimationFrame(run);
    draw();
  }

  function draw() {
    Bird.$.setTransform(1, 0, 0, 1, 0, 0);
    Bird.$.translate(Bird.canv.w / 2, Bird.canv.h / 2);
    Bird.$.clearRect(-Bird.canv.w / 2, -Bird.canv.h / 2, Bird.canv.w, Bird.canv.h);
    Bird.$.scale(1, -1);
    var arr = [];
    b.forEach(function(e, i, a) {
      var _b = b[i];
      _b.run(b);
      var bird = birds[i];
      bird.rot.y = Math.atan2(-_b.vel.z, _b.vel.x);
      bird.rot.z = Math.asin(_b.vel.y / _b.vel.len());
      bird.phase = (bird.phase + (Math.max(0, bird.rot.z) + 0.1)) % 62.83;
      bird.wing(Math.sin(bird.phase) * 5);
      bird.matrix();
      arr.push({
        z: bird.zpos(),
        o: bird
      });
    });
    arr.sort(function(a, b) {
      return a.z < b.z ? -1 : a.z > b.z ? 1 : 0;
    });
    arr.forEach(function(e, i, a) {
      e.o.draw();
    });
  }
};
draw();
window.addEventListener('resize',function(){
   if(c.width!==window.innerWidth && c.height!==window.innerHeight){
     Bird.canv = {
      w: c.width = window.innerWidth,
      h: c.height = window.innerHeight
    };
   }
});



    var curr_url;
    var animation_played = false;


     /* Animates the desktop visual */
    function desktop_animation(duration){

      setTimeout(() => {
          $('#desktop-wrap').addClass('wrap-animation');
          var ids = ["#desktop", "#browser-left", "#browser-right", "#cactus", "#coffee_cup"];
          ids.forEach(function(entry) {
              
              switch (entry) {
                case "#desktop": 
                  $(entry).addClass('desktop_animation');
                  break;
                case "#browser-left":
                  $(entry).addClass('browser-left-animation');
                  break;
                case "#browser-right":
                  $(entry).addClass('browser-right-animation');
                  break;
                case "#cactus":
                  $(entry).addClass('cactus-animation');
                  break;
                case "#coffee_cup":
                  $(entry).addClass('coffee_cup-animation');
                  break;
              }
          });
      }, duration);
    }

    /* Animates the bars in the about page */
    function generate_about_p1(){
      $('#p1-upper-bar').css('opacity','1');
      $('#p1-lower-bar').css('opacity','1');
      $('#p1-upper-bar').addClass('upper-bar-1-vertical-animation');
      $('#p1-lower-bar').addClass('lower-bar-1-vertical-animation');
      setTimeout(() => {
        $('#p1-texts').animate({"opacity": "1"}, 1000);
        $('#p1-upper-bar').animate({"opacity": ".5"}, 1000);
        $('#p1-lower-bar').animate({"opacity": ".5"}, 1000);        
      }, 1000);      
    }

    function generate_about_p2(){
      $('#p2-upper-bar').css('opacity','1');
      $('#p2-lower-bar').css('opacity','1');
      $('#p2-upper-bar').addClass('upper-bar-2-vertical-animation');
      $('#p2-lower-bar').addClass('lower-bar-2-vertical-animation');
      setTimeout(() => {
        $('#p2-texts').animate({"opacity": "1"}, 1000);
        $('#p2-upper-bar').animate({"opacity": ".5"}, 1000);
        $('#p2-lower-bar').animate({"opacity": ".5"}, 1000);        
      }, 1000);      
    }

    function generate_about_p3(){
      $('#p3-upper-bar').css('opacity','1');
      $('#p3-lower-bar').css('opacity','1');
      $('#p3-upper-bar').addClass('upper-bar-3-vertical-animation');
      $('#p3-lower-bar').addClass('lower-bar-3-vertical-animation');
      setTimeout(() => {
        $('#p3-texts').animate({"opacity": "1"}, 1000);
        $('#p3-upper-bar').animate({"opacity": ".5"}, 1000);
        $('#p3-lower-bar').animate({"opacity": ".5"}, 1000);        
      }, 1000);      
    }

    /* Function to generate the visuals in the about page */
    function generate_about_visuals(){


      $('#avatar-id').animate({"opacity":"1"}, 1000);
      $('#iso-img-wrapper').animate({"opacity":"1"}, 1000);
    }

    if (disable_scroll_lock == 'true') {
      disable_scroll();
      document.getElementById('navbar-projects').click();
      instant_about_page_animate();
      setTimeout(() => {
        enable_scroll();
      }, 1200);

      
    }


    /* Function to animate the about page */
    function about_page_animate(){

      generate_about_p1();
      generate_about_p2();
      generate_about_p3();
      setTimeout(() => {
          generate_about_visuals();
          setTimeout(() => {
            enable_scroll();
          }, 1000);
      }, 2000);
      
    }

    /* Loads the about page with instant animations */
    function instant_about_page_animate(){
      var opacity = ["#p1-upper-bar", "#p1-lower-bar", "#p2-upper-bar", "#p2-lower-bar", "#p3-upper-bar", "#p3-lower-bar", "#desktop-wrap", "#avatar-id", '#p1-texts', '#p2-texts', '#p3-texts'];

      opacity.forEach(function(entry) {
              
          switch (entry) {
            case ".p1-bar" || ".p2-bar" || ".p3-bar": 
              $(entry).css({"opacity": ".5"});
              break;
            case "#p1-upper-bar":
              $(entry).css({ "opacity": ".5" });
              break;
            case "#p1-lower-bar":
              $(entry).css({ "transform": "translatey(100%)", "opacity": ".5"});
              break;
            case "#p2-upper-bar":
              $(entry).css({ "opacity": ".5" });
              break;
            case "#p2-lower-bar":
              $(entry).css({ "transform": "translatey(100%)", "opacity": ".5"});
              break;
            case "#p3-upper-bar":
              $(entry).css({ "opacity": ".5" });
              break;
            case "#p3-lower-bar":
              $(entry).css({ "transform": "translatey(100%)", "opacity": ".5"});
              break;
            case "#desktop-wrap":
              $(entry).css({"opacity":"1"});
              desktop_animation(0);
              break;
            case "#avatar-id":
               $(entry).css({"opacity":"1"});
               $(entry).addClass('avatar_filter');
               break;
            default:
              $(entry).css({"opacity": "1"});
              break;
          }
      });
    }


    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 200,
      speedAsDuration: true
    });

    $(document).ready(function(){
      jQuery('#modal-content').css("overflow-y", "scroll");
      
    });

    function enable_scroll(){
      $('html, body').css({
         overflow: 'auto',
      });
    }

    function disable_scroll(){
      $('html, body').css({
          overflow: 'hidden',
      });
    }

    /* Play the about animation */
    function play_about_animation(){
      if (animation_played == false && disable_scroll_lock == false){
        disable_scroll();
        setTimeout(() => {
          about_page_animate();

        }, 1000);
      }
    }
    
    /* Function to open the specified project in a new tab*/
    function select_project(project) {

      var url_dict = {
      'presidents-visual': "president_project/presidential_project_index.html",
      'presidents-github': 'https://github.com/jlilleberg/presidential-transcripts-analysis',
      'word2vec-georgia-ieee': "https://ieeexplore.ieee.org/document/7259377",
      'word2vec-georgia-paper': 'https://drive.google.com/file/d/1Y-8l2S8p95r7xf4iGB750cHJU8pF5vG2/view?usp=sharing',
      'pupilparser-paper': 'https://drive.google.com/file/d/1vDRVCcyxNpXp5NMKvZ7z1bovxY09t2n3/view?usp=sharing',
      'pupilparser-code': 'https://github.com/jlilleberg/pupilparser',
      'medical_costs_analysis': 'https://www.kaggle.com/littleotter/medical-costs-in-depth-regression-analysis',
      'medical_costs_eda': 'https://www.kaggle.com/littleotter/medical-costs-eda',
      'titantic': 'https://www.kaggle.com/littleotter/titantic',
      'iris': 'https://www.kaggle.com/littleotter/iris-dataset',
      'snow_removal': 'https://drive.google.com/open?id=1QcnCF6nu-QL27bnIbv3E5ELUMeq_XnHW'
      };

      if (project == 'presidents-visual'){
        window.open( url_dict[project], '_self'); 
      } else {
        window.open( url_dict[project], '_blank');  
      }    
    }