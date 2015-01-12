var path = require("path"),
    basePathRel = "..",
    relPaths = {
      base: basePathRel,
      bin: basePathRel + '/bin',
      tmp: basePathRel + '/tmp',
      src: basePathRel + '/src',
      libs: basePathRel + '/libs',
      dest: basePathRel
    },
    paths = {};

for (var key in relPaths) {
  if (relPaths.hasOwnProperty(key)) {
    paths[key] = path.resolve(__dirname, relPaths[key]);
  }
}

module.exports = {
  server: {
    host: "localhost",
    port: 8000,
    basePath: paths.base
  },
  gulp: {
    tasksToLoad: [
      {name:'less', watch: true},
      //{name:'sass', watch: true},
      {name:'images', watch: true},
      {name:'templates', watch: true},
      {name:'plugins', watch: true},
      {name:'plugmin'},
      {name:'jsmin'},
      {name:'csscompile'},
      //{name:'uncss'},//, depends:["csscompile"]},
      {name:'uglify'},
      {name:'uglifyapp'},
      {name:'jshint'},
      {name:'updatedevdata'},
      {name:'pluglist'}  // exp
      //, {name:'tasklist'}  // called inside
    ],
    less: {
      watch: [relPaths.src + "/less/**/*.less"],
      files: ["/main.less", "/main.gte768.less", "/main.gte1000.less"],
      src: paths.src + "/less",
      dest: paths.dest + "/css"
    },
    // sass: {
    //   watch: [relPaths.src + "/sass/**/*.scss"],
    //   files: "/main.scss",
    //   src: paths.src + "/sass",
    //   dest: paths.dest + "/css",
    //   filename: "mains.css"
    // },
    images: {
      watch: [relPaths.src + "/img/**/*"],
      files: "/**/*",
      src: paths.src + "/img",
      dest: paths.dest + "/img"
    },
    templates: {
      watch: [relPaths.src + "/templates/**/*"],
      data: ["../json/goods.json"],//, "../json/tmp.json"],
      files: "/*.jade",
      src: paths.src + "/templates",
      dest: paths.dest + ""
    },
    plugins: {
      depends: ["plugmin"],
      watch: [relPaths.base + "/js/vendor/**/*"],
      files: [
        "/plugins.min.js",
        "/jade.min.js",
        "/*.min.js",
        "/!jquery-*.js",
        "/!modernizr-*.js"/*,
        "/fastclick.js"*/
      ],
      src: paths.dest + "/js/vendor",
      dest: paths.dest + "/js",
      filename: "plugins.js"
    },
    plugmin: {
      files: [
        "/*.js",
        "/!*.min.js"
      ],
      src: paths.dest + "/js/vendor/src",
      dest: paths.dest + "/js/vendor",
    },
    jsmin: {
      files: [
        "/*.js",
        "/!*.min.js"
      ],
      paths:"js"
    },
  	csscompile: {
      files: [
  	   //  "/normalize.css",
    		// //"/vendor/fancybox/jquery.fancybox.css",
    		// "/bp-begin.css",
    		// "/main.css",
    		// "/bp-tail.css"
        //"/normalize.css",
        //"/bp-begin.css",
        //"/vendor/bootstrap-slider.css",
        "/vendor/jquery-ui-1.11.2.css",
        "/vendor/jquery.jscrollpane.css",
        "/main.css"//,
        //"/bp-tail.css"
  	  ],
  	  paths:"css",
      filename: "app.min.css"
  	},
    // uncss: {
    //   files: [
    //     //"/normalize.css",
    //     "/vendor/bootstrap-slider.css",
    //     //"/bp-begin.css",
    //     "/main.css"//,
    //     //"/bp-tail.css"
    //   ],
    //   paths: "css",
    //   filename: "app.min.css",
    //   pages: ["../index.html"] // rel to bin path
    // },
    js: {
      src: paths.dest + "/js",
      dest: paths.dest + "/js"
    },
    css: {
      src: paths.dest + "/css",
      dest: paths.dest + "/css"
    },
    jshint: {
      files:[
        '/../bin/gulpfile.js',
        '/../bin/config.js',
        '/main.js'/*,
        '/*.js',
        '/!*.min.js'*/
      ],
      paths:"js"
    },
    uglify: {
      files: [
        "/*.js",
        "!/*.min.js"
      ],
      paths:"js"
    },
    uglifyapp: {
      depends: ["uglify"],
      files: [
        "/plugins.min.js",
        "/main.min.js"/*,
        "/!*.min.js"*/
      ],
      paths:"js",
      filename: "app.min.js"
    },
    updatedevdata: {
      files: [
        '/manifest.appcache',
        '/humans.txt'
      ],
      src: paths.src + "",
      dest: paths.dest + ""
    }
  },
  libs: {
    html5boilerplate: {
      dest: paths.libs + "/html5-boilerplate",
      repo: "git@github.com:h5bp/html5-boilerplate.git"
    },
    bootstrap: {
      dest: paths.libs + "/bootstrap",
      repo: "git@github.com:twbs/bootstrap.git"
    }
  },
  tmp: {
    path: paths.tmp,
    lastUpdate: paths.tmp + '/lastupdate'
  }
};
