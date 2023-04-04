let points = [[0,6],[2,4],[1,4],[3,2],[1,2],[4,-1],[2,-1],[4,-3],[1,-3],[1,-5],[-1,-5],[-1,-3],[-4,-3],[-2,-1],[-4,-1],[-1,2],[-3,2],[-1,4],[-2,4]];
let w1 = "tku educaitonal technology"


function setup() {
createCanvas(windowWidth,windowHeight); //畫布

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
    points[i][j] = points[i][j] * 50;

    }
  }
}



function draw() {


let zoom = map(mouseY,0,height,0.5,2);//圖形放大縮小
scale(zoom)
background(255);
textSize(35)  //文字大小
fill(0, 120, 153);  //設定顏色
noStroke()
text(w1,width/10,height/8)  //顯示文字

translate(width/2,height/2); //原點移到視窗的中心點
scale(1,-1); //放大縮小的指令，第二參數為y軸的放大縮小，負號為上下顛倒
strokeWeight(5)

for ( t=1; t<5; t=t+0.9){
  for (let i = 0; i < points.length-1; i++) {
    let clr1 = color("#9b2226")
    let clr2 = color("#A3B18A")
    let percent = map(i, 0, points.length - 2, 0, 1); // 計算當前線段的百分比
    stroke(lerpColor(clr1, clr2, percent)); // 設定當前線段的顏色
    line(points[i][0]/t, points[i][1]/t, points[i+1][0]/t, points[i+1][1]/t);
    } 
    let clr1 = color("#9b2226"); 
    let clr2 = color("#A3B18A"); 
    let percent = map(points.length - 1, 0, points.length - 2, 0, 1); // 計算最後一條線段的百分比
    stroke(lerpColor(clr1, clr2, percent)); // 設定最後一條線段的顏色
    // 最後一個點與第一點連成一線
    line(points[points.length-1][0]/t, points[points.length-1][1]/t, points[0][0]/t, points[0][1]/t);

  }
}