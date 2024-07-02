import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__title-container'>
        <span className='header__title'>77's Weather App</span>
        <small className='header__portfolio-url'><a href='#'>marcodelboccio.dev</a></small>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <a target='_blank' href='https://www.linkedin.com/in/marco-del-boccio/' rel='noreferrer'><i className='icon-linkedin-in' /></a>
          </li>
          <li className='header__list-item'>
            <a target='_blank' href='https://github.com/codentide/77s-weather-app' rel='noreferrer'>
              <i className='icon-github' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
