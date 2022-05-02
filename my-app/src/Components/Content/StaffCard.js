import './StaffCard.css'

const StaffCard = (props) => {
    return <div className="staff_display">
        <a href={props.staff.url} target="_blank" rel="noreferrer">
            <img src={props.staff.image} className="profile_image" alt="Staf Portrait" />
        </a>
        <div className="staff_text_display">
            <a href={props.staff.url} target="_blank" rel="noreferrer">
                <h3>{props.staff.name}</h3>
            </a>
            <a href={`tel:${props.staff.telNumber}`} target='_blank' rel="noreferrer">
                <h4>{props.staff.telNumber}</h4>
            </a>
            <a href={`mailto:${props.staff.email}`} target='_blank' rel="noreferrer">
                <h4>{props.staff.email}</h4>
            </a>
            <h4>{props.staff.categories}</h4>
            <a href={props.staff.vCardURL}>
                <button className='btn_default sm'> Add To Address Book</button>
            </a>
        </div>
    </div>
}

export default StaffCard