import './css/navmain.css';

const navmain = ({svg1}) => {
    return (
        <div>
            <section className='navmain'>

                <div className='amgs'>
                    <p className='btn' style={{background: 'none'}}>{svg1}</p>
                    <p className='text'>Amigos</p>
                </div>

                <div className='btns'>
                    <p className='btn btn1'>Disponível</p>
                    <p className='btn btn2'>Todos</p>
                    <p className='btn btn3'>Pendente</p>
                    <p className='btn btn4'>Bloqueado</p>
                    <p className='btn btn5' style={{backgroundColor: 'green'}}>Adicionar Amigo</p>

                </div>

            </section>
        </div>
    )
}

navmain.defaultProps = {
    svg1:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>,
}

export default navmain
