import { _decorator, Component, instantiate, Node, Prefab, PageView } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pageview')
export class pageview extends Component {
    @property({type:Prefab})
        page:Prefab = null;
    start() {

        for(let i=1; i<=10;i++)
        {
            let page = instantiate(this.page);
              this.node.getComponent(PageView).addPage(page)    //content.addChild(page); page add hota hai page view mein child nahi
            console.log(page);
            
        }
``
    }

    update(deltaTime: number) {
        
    }
}

