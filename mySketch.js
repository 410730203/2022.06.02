//要先存檔才能將圖片放到檔案區
var whaleImg
function preload(){
	whaleImg = loadImage("whale.png");//下載圖片
	//frameRate(10)//原本一秒執行60次，設定成一秒執行10次
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(100);
	for(var x=0;x<width;x=+x+360){
		for(var y=0;y<height;y=y+360)
		{
			imageMode(CENTER)
			image(whaleImg,x,y+sin(frameCount/20)*50,260,240);//sin值是一個規律的線形變化(在1~-1間)
			
		}
	}
}