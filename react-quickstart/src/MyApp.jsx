import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";



function MyApp() {

  let content;
  let isLoggedIn = true;

  
    if (isLoggedIn) {
      content = <AdminPanel />;
    } else {
      content = <LoginForm />;
    }
    return (
      <div>
        {content}
      </div>
    );
}


export default MyApp
