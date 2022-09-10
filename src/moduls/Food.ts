// food
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素
        this.element=document.getElementById('food')!;
        //定义获取食物X轴坐标的方法
    }
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    change(){
       let top= Math.round(Math.random()*29)*10
       let left= Math.round(Math.random()*29)*10
        this.element.style.left=left+'px'
        this.element.style.top=top+"px"
    }

}

export default Food