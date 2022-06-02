class Form{
    constructor(){
        this.input = createInput("Name");
        this.greeting = createElement('h2');
        this.titleName = createElement('h2');
        this.playButton = createButton("Click to play");
        this.resetButton = createButton("Click to reset");
    }

    hide(){

    }

    display(){
        this.titleName.html("Varsity Footballers!!")
        this.titleName.position(470,500);
        this.playButton.position(470,550);

        textSize(40);
        text("Varsity Footballers!!",450,500);

        if(mousePressedOver(this.playButton)){()=>{
            this.greeting.html("Please wait while your teammates join");
            this.greeting.position(430,500);
        }}

        if(mousePressedOver(this.resetButton)){()=>{

        }}
    }
}