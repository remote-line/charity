import '../index.css'

const home = () => {
    return (
        <div className="flex flex-row">
            <div className='flex flex-col px-8 py-8 gap-3 bg-slate-900 text-white h-screen w-72'>
                <span className=" rounded-lg h-7 w-16 font-bold text-3xl text-center">Charity</span>
                <div className='pt-10 space-y-4'>
                    <span className="flex flex-row "> Home</span>
                    <span className="flex flex-row "> Add new</span>
                    <span className="flex flex-row " > Pending</span>
                    <span className="flex flex-row ">  Payed</span>
                    <span className="flex flex-row "> Deleted Recently</span>
                    <span className="flex flex-row "> Reminders</span>
                    <span className="flex flex-row "> Notes</span>
                    <span className="flex flex-row "> Reffered</span>
                    <div className="py-20">
                    </div>
                    <hr />
                </div>
            </div>
            <div className="w-screen bg-slate-700 ">
                <h2 className="bg-slate-900 text-white font-serif flex px-2 h-24 text-2xl items-center">
                    Manage Your Beneficiary List
                </h2>
                <div className="grid grid-cols-4 grid-flow-row gap-11 px-8 py-8">
                </div>
            </div>
        </div>
    )
}

export default home