modules.define('dj', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'running' : {
            'true' : function() {
                var dj = this;

                dj.findBlocksInside('player').forEach(function(player) {
                    player.rotate();
                });
            },
            '': function() {
                var dj = this;

                dj.findBlocksInside('player').forEach(function(player) {
                    player.stop();
                });
            }
        }
    }
},{
    live: function() {
        this.liveInitOnBlockInsideEvent({ modName: 'checked', modVal: '*' }, 'checkbox', function(data) {
            this.setMod('running', data.target.hasMod('checked'));
        });
    }
}));

});
