import PrimaryButton from './Primarybutton'

export default function Navbar() {
    return (
        <div className='sticky top-5 z-10 bg-white shadow-xl mb-14 mx-4 rounded-2xl'>
            <nav className='h-28 flex items-center px-10'>
                <div className='h-[80px] w-[80px] bg-slate-800'></div>
                <div className='h-auto w-auto ml-auto'>
                    <PrimaryButton text={'Entra'} />
                </div>
            </nav>
        </div>
    )
}