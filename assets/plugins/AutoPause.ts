import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer;
  
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    })

    observer.observe(this.player.media);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    // console.log(entry);

    const isVisible = entry.intersectionRatio >= this.threshold;

    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;