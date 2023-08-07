import React, {useState} from "react";
import Select from "react-select";
import filterStone from "../../../assets/img/catalog/filterStone.png";
import Accordion from "../../../components/Accordion/Accordion";
import MultiRange from "../../../components/MultiRange/MultiRange";

import "./filter.scss";

const colorsArr: any[] = [
  {name: 'brown', value: 'Коричневый', code: '#964b00'},
  {name: 'white', value: 'Белый', code: '#fff'},
  {name: 'black', value: 'Черный', code: '#000'},
  {name: 'beige', value: 'Бежевый', code: '#F5F5DC'},
  {name: 'grey', value: 'Серый', code: '#808080'},
  {name: 'green', value: 'Зеленный', code: '#008000'},
  {name: 'red', value: 'Красный', code: '#ff0000'},
  {name: 'yellow', value: 'Желтый', code: '#FFD700'},
  {name: 'blue', value: 'Голубой', code: '#5cace6'},
]
type FilterT = {
  isOpen: boolean,
  size: {value: string, label: string},
  setSize: React.Dispatch<React.SetStateAction<{value: string, label: string}>>,
  country: {value: string, label: string},
  setCountry: React.Dispatch<React.SetStateAction<{value: string, label: string}>>,
  price:  {min: number, max: number},
  setPrice: React.Dispatch<React.SetStateAction<{min: number, max: number}>>,
  reset: () => void,
  setCategories: React.Dispatch<React.SetStateAction<string[]>>,
  categories: string[]
  colors: string[],
  setColors: React.Dispatch<React.SetStateAction<string[]>>
}

const Filter: React.FC<FilterT> = ({categories, setCategories, isOpen, reset, country, setCountry, size, setSize, price,  setPrice, colors, setColors}) => {
  const accordion = useState(0);
  const changingCategories = (category: string) => {
    if (categories.includes(category)) {
      setCategories(oldCategories => oldCategories.filter(item => item !== category));
    } else {
      setCategories((oldCategories) => [...oldCategories, category]);
    }
  };

  const changingColors = (color: string) => {
    if (colors.includes(color)) {
      setColors(oldColors => oldColors.filter(item => item !== color))
    } else {
      setColors(oldColors => [...oldColors, color])
    }
  }

  return (
    <div className={`filter-wrapper${isOpen ? " active" : ""}`}>
      <div className="filter">
        <img src={filterStone} alt=""/>
        <div className="filter-inner">
          <Accordion title="Категория" state={accordion} index={1}>
            <input id="granite" onChange={() => changingCategories("Гранит")} type="checkbox" checked={categories.includes('Гранит')}/>
            <label htmlFor="granite">Гранит</label><br/>
            <input id="onyx" onChange={() => changingCategories("Оникс")} type="checkbox" checked={categories.includes('Оникс')}/>
            <label htmlFor="onyx">Оникс</label><br/>
            <input id="marble" onChange={() => changingCategories("Мрамор")} type="checkbox" checked={categories.includes('Мрамор')}/>
            <label htmlFor="marble">Мрамор</label><br/>
            <input id="travertine" onChange={() => changingCategories("Травертин")} type="checkbox" checked={categories.includes('Травертин')}/>
            <label htmlFor="travertine">Травертин</label><br/>
            <input id="mosaic" onChange={() => changingCategories("Мозаика")} type="checkbox" checked={categories.includes('Мозаика')}/>
            <label htmlFor="mosaic">Мозаика</label>
          </Accordion>
          <Accordion title="Цвета" state={accordion} index={2}>
            {colorsArr.map((col, i) =>
              <React.Fragment key={i}>
                <input id={col.name} onChange={() => changingColors(col.code)} checked={colors.includes(col.code)} type="checkbox"/>
                <label htmlFor={col.name}>{col.value}</label><br/>
              </React.Fragment>
            )}
          </Accordion>
          <div className="filter-item" style={{zIndex: 999}}>
            <h4>Формат</h4>
            <Select options={sizes} value={size} onChange={(selectedOption) => selectedOption ? setSize(selectedOption) : null}/>
          </div>
          <div className="filter-item">
            <h4>Страна</h4>
            <Select options={countries} value={country} onChange={(selectedOption) => selectedOption ? setCountry(selectedOption) : null}/>
          </div>
          <div className="filter-item">
            <h4>Цена</h4>
            <MultiRange minVal={price.min} maxVal={price.max} setMinVal={(val: number) => {setPrice({min: val, max: price.max})}} setMaxVal={(val: number) => {setPrice({min: price.min, max: val})}} min={1000} max={10000}/>
          </div>
        </div>
        <div className="filter-btns">
          <button className="btn grey-outline" onClick={reset}>Очистить</button>
        </div>
      </div>
    </div>
  );
};

const sizes = [
  {value: "200х100", label: "200х100"},
  {value: "305х305", label: "305х305"},
  {value: "457х457", label: "457х457"},
  {value: "600х300", label: "600х300"},
  {value: "L*750", label: "L*750"},
  {value: "2100*300", label: "2100*300"},
  {value: "2610*350", label: "2610*350"},
  {value: "2970х1650", label: "2970х1650"},
  {value: "3000х1900", label: "3000х1900"},
  {value: "", label: "Все"}
];

const countries = [
  {value: "Бразилия", label: "Бразилия"},
  {value: "Китай", label: "Китай"},
  {value: "Финляндия", label: "Финляндия"},
  {value: "", label: "Все"}
];

export default Filter;