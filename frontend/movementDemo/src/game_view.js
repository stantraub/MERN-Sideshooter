
class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer()
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers() {
    
    console.log(this.player)
    // Object.keys(GameView.MOVES).forEach((k) => {
    //   const move = GameView.MOVES[k];
    //   key(k, () => { player.playerAction(move); });
    // });
    key("a", () => {this.player.moveLeft(); });
    key("d", () => { this.player.moveRight(); });
    key("w", () => { this.player.moveJump(); });

    key(",", () => { this.player.fireBullet(-4); });
    key(".", () => { this.player.fireBullet(4); });
  
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}


export default GameView;