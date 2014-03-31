var plugin = function(){
    return function(style){
        var nodes = this.nodes;
        var lookForMedia = function(node) {
            if (node.nodeName == 'media') {
                return node.val;
            } else if (node.block.parent.node) {
                return lookForMedia(node.block.parent.node);
            }
        }

        style.define('_current_media', function(show_self) {
            var foundMedia = lookForMedia(this.closestBlock.node)
            if (foundMedia) {
                return new nodes.String(foundMedia);
            } else {
                return new nodes.Boolean(false);
            }
        });
    };
};
module.exports = plugin;
