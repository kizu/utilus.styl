var plugin = function(){
    return function(style){
        var nodes = this.nodes;
        style.define('_called_from', function(show_self) {
            var calledFunctions = this.calling.slice(0, show_self.val ? -2 : -3);
            var stylusArray = new nodes.Expression();
            for (var i = calledFunctions.length; i-- ; ) {
                stylusArray.push(new nodes.Literal(calledFunctions[i]));
            };
            return stylusArray;
        });
    };
};
module.exports = plugin;
