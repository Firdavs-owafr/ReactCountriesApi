import React,{Component} from "react";
import '../CountryBox/CountryBox.scss'

class CountryBox extends Component {

    undef = (undefinedd) => {
        return undefinedd ? undefinedd : 'Not found'
    }

    someZap = (number) => {
        let arr = [];
        let str = '';
        let str2 = number.toString().split('').reverse().join('');
        for(let i = 0; i < str2.length; i++){
            str += str2[i];
            if(str.length === 3) {
                arr.push(str.split('').reverse().join(''));
                str = '';
            }else if(str.length !== 3 && str !== '' && i === str2.length - 1){
                arr.push(str.split('').reverse().join(''));
            } 
        }
        return arr.reverse().join();
    }

    render() {
            return (
                
                    <div className="section">
                            {
                                this.props.bazaaa.map((item) => {
        
                                    const {flags:{svg}, capital, name,population,region} = item;
                                    return (
                                        <div className="country-box">
                                        <div className=" d-flex flex-column ">
                                        <div className=" d-flex container country">
                                            <div className="country-item__info">
                                                <div className="country-img">
                                                    <img src={svg} alt="" />
                                                </div>
                                                <div className="country-info">
                                                    <h2 className="title">{this.undef(name)}</h2>
                                                    <div className="population">Population: {this.undef(population)}</div>
                                                    <div className="region">Region: {this.undef(region)} </div>
                                                    <div className="capital">Capital: {this.undef(capital)}</div>                            
                                            </div>
                                            </div>
                                        </div>
                                        </div>  
                                        </div>
                                    )
                                })  
                            }
                    </div>
                )
        
    }
}

export default CountryBox;