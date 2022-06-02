noseX = 0;
noseY =0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500)
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw() {
    document.getElementById("square_sides").innerHTML = "width and height of a text will be " + difference +"px";
    background(' #ffcccb');
    fill("white");
    stroke("black");
    textSize(difference)
    text("HELLO",noseX,noseY)
    localStorage.setItem("open sessionStorage","open sessionsessionStorage")
    sessionStorage.setItem("secret","this is a secret this webpage has been updaded from another webpage that is real time drawing")
}
function modelLoaded() {
    console.log('poseNet Is Initialized')
}
function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX, noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left Wrist X = " + leftWristX + "right Wrist x = " + rightWristX + "difference = " + difference);
    }  
}
