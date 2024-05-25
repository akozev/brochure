class ThemeSport {
    events = {}
    offsetY = 20;

    constructor() {

    }

    init(pixi) {
        pixi.stage.addChild(PIXI.Sprite.from('assets/images/fb-events3.png'))

        this.eventsHolder = new PIXI.Container();
        this.eventsHolder.x = 30;
        this.eventsHolder.y = 90;

        pixi.stage.addChild(this.eventsHolder)
    }

    addEvent(id, data) {
        this.removeEvent(id)
        let event = new PIXI.Container();

        let eventTime = new PIXI.Text(data.time, { fontSize: 20 });
        let eventName = new PIXI.Text(data.name, { fontSize: 14 });
        eventName.x = 70;

        let eventPlace = new PIXI.Text(data.place, { fontSize: 10 });
        eventPlace.x = 70;
        eventPlace.y = 20;
        event.addChild(eventName, eventPlace, eventTime);

        this.events[id] = event;

        this.eventsHolder.addChild(event)
        this.reorder();
    }

    removeEvent(id) {
        if (this.events[id]) {
            this.eventsHolder.removeChild(this.events[id])
            delete this.events[id];
        }

        this.reorder();
    }

    reorder() {
        let dy = 0;
        for (let event of this.eventsHolder.children) {
            event.y = dy;
            dy += event.height + this.offsetY;
        }
    }
}