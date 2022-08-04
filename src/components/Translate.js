import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {
    const [text, setText] = useState('hello')
    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ]
    const label = "Select a language"
    const [language, setLanguage] = useState(options[0])
    return (
        <div>
            <div className="ui form"> 
                <div className="field"> 
                    <label>Enter Text</label>
                    <input 
                    className="input"
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown 
            options={options} 
            selected={language} 
            onSelectedChange={setLanguage} 
            label={label}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert 
                language={language}
                text={text}
            />
        </div>
    )
}

export default Translate