import '../index.css';

function SignUp() {
    return (
        <div className="h-screen bg-slate-800 grid grid-flow-row md:grid md:grid-flow-col p-8 overflow-hidden">
            <div className='login-left flex flex-col justify-center px-36 bg-white rounded-l-xl'>
                <div className='login-header'>
                    <h1 className='text-2xl font-bold py-3'>Welcome to our application</h1>
                    <p className='font-bold'>Please Sign up to make an account</p>
                </div>
                <form className='login-form py-6'>
                    <div className='login-form '>
                        <div className='login-form-content'>
                            <div className='form-item'>
                                <label className='' htmlFor="name"> Enter your full name</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="text" id="email" />
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="email"> Enter email</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="text" id="email" />
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Enter password</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="password" id="password" />
                            </div>
                            <div className='form-item'>
                                <label className='' htmlFor="password">Confirm password</label>
                                <input className='h-14  w-full outline-none text-lg border-2 border-gray-900 rounded-lg' type="password" id="password" />
                            </div>
                            <div className='py-4'>
                                <button className='bg-slate-500 flex rounded-lg px-10  py-1 ' type='submit'>Sign Up</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div className='login-right bg-slate-400 flex justify-center rounded-r-xl'>
                <img className='rounded-r-lg' src={require('../Assets/donate.jpg')} alt="donate" />
            </div>
        </div>
    );
}

export default SignUp;
