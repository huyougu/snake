import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
//引入其他类
//游戏控制器
class GameControl{
    snake:Snake;
    food:Food;
    scorepanl:ScorePanel;
    //创建一个属性来存储蛇的移动方向
    direction:string='';
    //记录游戏是否结束
    isLive=true;
    constructor(){
        this.snake=new Snake()
        this.food=new Food()
        this.scorepanl=new ScorePanel(10,2)
        this.init()
       
    }
    init(){
        //绑定键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        //调用run 方法
       this.run()
       
       // console.log(this.snake.X,this.snake.Y);
     
       
       
    }
    keydownHandler(event:KeyboardEvent){
        //console.log(event.key);
        
       this.direction=event.key

    }
    //创建一个控制蛇移动的方法
    run(){
        let X=this.snake.X
        let Y=this.snake.Y
      //console.log(this.snake.boides);
      
        
        switch(this.direction){
            case "ArrowUp":
            case "Up":
            //向上移动
            Y-=10
            break;
            case "ArrowDown":
                case "Down":
            //向下移动
            Y+=10    
            break;
            case "ArrowLeft":
                case "Left":
           
            //向左移动
            X-=10    
            break;
            case "ArrowRight": 
            case "Right":
            X+=10;
            //向右移动   
            break;
        }
        //吃到食物
        if(this.checkEat(X,Y)){
            this.food.change()
            this.scorepanl.addScore()
            this.snake.addBody()
        }

       try{
        this.snake.X=X
        this.snake.Y=Y
       }catch(e:any){
        alert(e.message)
        this.isLive=false
       }
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorepanl.level-1)*30
        ,300)
    }
    //检测是否吃到食物
    checkEat(X:number,Y:number){
        return X===this.food.X&&Y===this.food.Y
    }

}
export default GameControl