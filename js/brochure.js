class Brochure {

    constructor(theme) {

        this.initCanvas();
        this.initTheme(theme);
    }

    initCanvas() {
        this.pixi = new PIXI.Application({ background: '#1099bb', width: 500, height: 635  });

        document.getElementById("broshure").appendChild(this.pixi.view)
    }

    initTheme(theme) {
        this.theme = theme;

        theme.init(this.pixi);
    }

    addEvent(id, data){
        this.theme.addEvent(id, data)
    }

    removeEvent(id){
        this.theme.removeEvent(id)
    }
}
