import { useState} from "react";
const Dropdown = ({trigger, children}) => {
    //控制dropdown显示与隐藏状态
    const [isOpen, setIsOpen] = useState(false); 

    //切换dropdown显示/隐藏
    const toggle = () => {
        setIsOpen((prev)=>!prev);
    } 

    return (
        <div className="dropdown-container">
            {/*点击主菜单按钮，可以改变dropdown的显示与隐藏状态 */}
            <div>{trigger(toggle)}</div> 

            {/*根据dropdown的状态，渲染子列表 */}
            <div>{isOpen && (
                <div className="list">
                    {children(toggle)}
                </div>
                )}
            </div> 
        </div>
    )
}

export default Dropdown;