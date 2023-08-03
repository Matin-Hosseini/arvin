import './Page-navigator.css'

const PageNavigator = () => {
    return(
        <div className='container-fluid my-4 d-flex justify-content-between align-items-center'>
            <ul className="page-bread-crumb">
                <li>آروین</li>
                <li>موبایل</li>
                <li>فروشگاه</li>
            </ul>
            <ul className='d-flex gap-4 page-navigator__options'>
                <li>
                    <span className='ms-3'>ثبت آگهی در پیندو</span>
                    <i className='bi bi-megaphone'></i>
                </li>
                <li>
                    <span className='ms-3'>فروش در آروین</span>
                    <i className='bi bi-shop'></i>
                </li>
            </ul>
        </div>
    )
}
export default PageNavigator