import { StudentProvider, StudentProfile } from "./StudentProfile";

const App = () => {

    return (
        <StudentProvider>
            <div>
                <StudentProfile />
            </div>
        </StudentProvider>

    )


}

export default App

