import { useState } from 'react'
import './App.css'
import Dropdown from "./components/dropdown.jsx";

function App() {
//控制按钮文字
const [isButtonOpen, setIsButtonOpen] = useState(false);

//切换按钮文字
const buttonTextToggle = () => {
  setIsButtonOpen((prev)=>!prev)
};

//
const triggerButton = (callback) => {
  return (
    <button
          onClick = {()=> {
          buttonTextToggle(); //点击主菜单按钮时，改变button的文字
          callback(); //点击主菜单按钮时，可以改变dropdown的显示与隐藏状态
          className="trigger-button"
      }}>
        {isButtonOpen? '关闭菜单' : '展开菜单'} {/*根据button状态，显示相应文字 */}
      </button>
  )
}

const childList = (callback) => {
  //返回jxs列表
  return (
      <ul>
        <li>
          <button
            onClick={() => {
              buttonTextToggle();//点击dropdown子列表的按钮时，改变主菜单按钮文字
              callback(); //点击dropdown子列表的按钮时，可以改变dropdown的显示与隐藏状态
            }}

          >Dashbord</button>
        </li>
        <li>
          <button
            onClick={() => {
            buttonTextToggle();
            callback();
            }}
          >Settings</button>
        </li>
      </ul>
  )
}

return (<Dropdown trigger={triggerButton} children={childList}/>)

}

export default App
