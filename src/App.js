import React,{ Component } from 'react';
import './App.scss';
import Header from '../src/components/Header/Header'
import SearchInput from '../src/components/SearchInput/SearchInput'
import CountryBox from "../src/components/CountryBox/CountryBox";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        baza: [
            {
                name: '',
                id: 1,
                population: '',
                region: '',
                capital: '',
                flags: {
                    svg: ''
                }
            },
        ],
        searchValue: ''
    }
  }
  
  setSearchValue = (str) => {
    this.setState(() => {
      return { searchValue: str }
    })
  }

  componentDidMount(){
    fetch('https://restcountries.com/v2/all?fields=name,capital,region,population,flags')
    .then(res => res.json())
    .then(myjs => {
        this.setState(() => {
            return {
                baza: myjs
            }
        })
    })
  }

    

 render(){

  const {baza,searchValue} = this.state;

  let filterData = baza.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
// console.log(filterData);
  return (
    <div className="wrapper">
        <Header/>
        <SearchInput setSearchValue={this.setSearchValue}/>
        <CountryBox bazaaa={filterData}/>
    </div>
  );
 }
}

export default App;
