// ======================= DOM Utility Functions from PastryKit =============================== //


Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};

(function(){

// get i.e. 'WebkitTransform'
var transformProp = Modernizr.prefixed('transform');

/* ==================== Start Up ==================== */


DDD.init = function() {
  
  var ranges = document.querySelectorAll('input[type="range"]'),
      rangesLen = ranges.length,
      i;
  
  if ( rangesLen ) {
    
     // create range output display
    for ( i=0; i < rangesLen; i++ ) {
      new DDD.RangeDisplay( ranges[i] );
    }
    
  }
  
};

window.addEventListener( 'DOMContentLoaded', DDD.init, false);

// put in global namespace
window.DDD = DDD;

})();