import RecordItem from './recordItem'

import '../style/listItems.css'

function ListItems ({records}) {

    const elements = records.map(item => {
        const {idRoom, dateOfTrassirUp, dateOfTrassirDown, date, type, speciality, stage, id} = item
        return (
            <li key={id}  className={'list-group-item'}>
                <div className={'list-group-item-records d-flex justify-content-between'}>
                    <span className='list-group-item-span'>
                        <div className='title'>Дата</div>
                        {date}
                    </span>
                    <span>{type}</span>
                    <span>{speciality}</span>
                    <span>{stage}</span>
                </div>

                <RecordItem idRoom={idRoom} timeUp={dateOfTrassirUp} timeDown={dateOfTrassirDown}/>
            </li>
        )
    })

    return (
        <ul className="app-list">
            {elements}
        </ul>
    )

}

export default ListItems