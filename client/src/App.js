import React, { useState } from 'react';

import Home from './components/screens/Home';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { NavLink } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const App = () => {

    const [sidebar, setSidebar] = useState(true);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <Router>
            {sidebar ?

                <div className="grid grid-cols-3">
                    <div className="col-start-1 col-end-3">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                        </Switch>
                    </div>

                    <div className="col-start-3 col-end-4">
                        <div className="border-2 h-screen relative">
                            <div className="absolute bg-pink-200 text-black w-12 h-11 text-center -inset-x-5 text-3xl cursor-pointer inset-y-20" onClick={handleSidebar}>
                                &#8594;
                            </div>
                            <div className="text-center text-3xl p-5">
                                <NavLink exact to="/"><h1>Sticker Ankara</h1></NavLink>
                            </div>
                            <div className="flex justify-center align-middle mt-8">
                                <div className="p-2">
                                    <NavLink to="/signin" className="p-2">Giriş Yap</NavLink>
                                </div>
                                <div className="p-2">
                                    <NavLink to="/signup" className="p-2">Kayıt Ol</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="overflow-x-hidden">
                    <div className="relative w-screen">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                        </Switch>

                        <div className="absolute top-0 left-3/4 bg-pink-200 text-black w-12 h-11 text-center text-3xl cursor-pointer inset-y-20" onClick={handleSidebar}>
                            &#8592;
                        </div>
                    </div>
                </div>
            }


        </Router>
    )
}

export default App;