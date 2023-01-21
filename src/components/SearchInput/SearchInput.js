import React,{Component} from "react";
import './SearchInput.scss';

class SearchInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }

  

  onChangeSearchInput = (e) => {
    this.props.setSearchValue(e.target.value)
  }
  
    render() {
      
      return (
            <div className="input-header container">
          <div className="input__item">
            <div className="search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                  fill="#848484"
                />
              </svg>
              <input type="text" placeholder="Search for a country…" className="input" 
                onChange={this.onChangeSearchInput}
              />
            </div>
            <div 
                className='menu-open'
                >
              <div className="select">
                <span className="selected">Filter by Region</span>
                <div className="caret"></div>
              </div>
              <ul className='menu'
              >
                <li className="active">All</li>
                <li>Africa</li>
                <li>Americas</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
}

export default SearchInput;