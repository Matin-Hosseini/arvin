import './Section-title.css'
const SectionTitle = ({title}) => {
    return(
        <div className='section-title mb-5'>
            <h3 className='mb-4'>{title}</h3>
            <div></div>
        </div>
    )
}
export default SectionTitle