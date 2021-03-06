import React, { Component } from 'react';

class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ["Java", "JS", "Ruby", "Go", "TypeScript"]
        };
    }

    // Display the languages in a table format

    generateLanguagesRows() {
        let { languages } = this.state;
        let rows = [];
        languages.forEach(lang => {
            let row = (<tr key={lang}>
                <td>{lang}</td>
            </tr>);
            rows.push(row);
        });
        return rows;
    }
    populateLanguagesList() {
        let { languages } = this.state;
        let list = [];
        languages.forEach(lang => {
            // loop through the array
            // take every string element in the array
            // create a JSX item
            // Push it to the list
            // key is an attribute that needs to be present when you are generating JSX dynamically

        const listItemInJSX = <li key={lang}>{lang}</li>; 
        list.push(listItemInJSX);    

            // let li = <li key={lang}>{lang}</li>;
            // list.push(li);
        });
        return list;
    }
    render() {
        // return (<div>
        //     <ul>
        //         {this.populateLanguagesList()}
        //     </ul>
        // </div>);

        return (<div>
            <ul>
        { this.state.languages.map(lang => <li key={lang}>{lang}</li>) }
            </ul>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    {this.generateLanguagesRows()}
                </tbody>
            </table>
        </div>);
    }
}

export default Collections;