noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
 
function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 550);


    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
console.log('PoseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = reults[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY );
         
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " +rightWristX + "difference = " + difference);

    }
}
function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference +"px";
    fill("#F90093");
    stroke("F90093");
    square(noseX, noseY, difference);

}    