import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">     
            <div className="container-fluid">
                <a className='link' href='https://www.youtube.com/watch?v=kSRYULhIc80&ab_channel=StevenNguyen'>“I still believe in heroes.”</a>  
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/368px-Marvel_Logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top logo-img"/>
                </a>
                <a className="nav-link link" href="https://developer.marvel.com/">About us</a>
            </div>
        </nav>
    </div>
  )
}
