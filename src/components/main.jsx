import './css/main.css';
//Components
import Friends from './friends';
import Messages from './messages';
import Activity from './activity';
import Navmain from './navmain';



const main = () => {
    return (
        <div className='main'>
            <header className='header'>

            </header>


            <section className='mainpage'>

                <div className='friends'>
                    <div className='nav nav1'>
                        <input type="text" className='input' placeholder='Encontre ou comece uma conversa'/>
                    </div>
                    <div><Friends/></div>
                </div>

                <div className='messages'>
                    <div className='nav nav2'><Navmain/></div>
                    <div><Messages/></div>
                </div>

                <div className='status'>
                    <div className='nav nav3'></div>
                    <div><Activity/></div>
                </div>

            </section>

        </div>
    )
}

export default main
