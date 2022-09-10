class Snake{
    //表示蛇头的元素
    head:HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;
   
    constructor(){
           this.element=document.getElementById('snake')!
           this.head=document.querySelector(`#snake>div`) as HTMLElement
           this.bodies=this.element.getElementsByTagName('div')
    }
    //蛇头的X坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value:number){
       
        //如果新值和旧值相同直接返回
        if(this.X===value)
        {
            return
        }
       
        //X的合法范围
        if(value<0||value>290)
        {
            throw new Error('蛇撞墙了！')
        }

        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value)
        {
            //console.log("水平发生掉头");
            if(value>this.X){
                value=this.X-10
            }
            else{
                value=this.X+10
            }
            
        }

          //移动身体
          this.moveBody()
          this.head.style.left=value+'px'
          this.checkHeadBody()
      

    }
    set Y(value:number){
        
        if(this.Y===value)
        {
            return
        }
       
        if(value<0||value>290)
        {
            throw new Error('蛇撞墙了！')
        }

        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value)
        {
            //console.log("水平发生掉头");
            if(value>this.Y){
                value=this.Y-10
            }
            else{
                value=this.Y+10
            }
            
        }



            //移动身体
            this.moveBody()
            this.head.style.top=value+'px'
            this.checkHeadBody()
      
      
       
    }
   

    //蛇增加身体
    addBody(){
        //向element添加一个div
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }

    moveBody(){
        //将后面身体的位置设置为前面身体的位置
        //遍历所有身体
        for(let i=this.bodies.length-1;i>0;i--){
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left=X+"px";
            (this.bodies[i] as HTMLElement).style.top= Y+"px";
        }
    }

    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement
            if(this.X===bd.offsetLeft &&this.Y===bd.offsetTop)
            {
                //进入判断说明蛇头撞倒身体
                throw new Error('撞到自己了！')
            }
        }
    }
   
}
export default Snake