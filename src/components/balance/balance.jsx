import './balance.css'
import logo from "../../../public/expenses-chart-component-main/images/logo.svg"

export default function Balance(){
    return(
        <div className='balance'>
            <div className="balanceLeft">
                <span>My balance</span>
                <span>$921.48</span>
            </div>
            <div className="balanceRight">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}