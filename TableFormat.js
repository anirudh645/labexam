import React, { Component } from "react";
class TableFormat extends Component {
    constructor() {
        super();
        this.state = { data: [{ id: 101, name: "Alice", marks: 995 },
                                { id: 102, name: "Bob", marks: 854 },
                                { id: 103, name: "John", marks: 789 }] 
                    }
    }
    render() {
            return (<div>
                        <table border = "1">
                            <thead>
                                <tr>{
                                        Object.keys(this.state.data[0]).map((x) => (<th key = { x } > { x } </th>))
                                    } 
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((row)=>(<tr key={row}>{Object.values(row).map((b) => (<td key = { b } > { b } </td>))}</tr>))
                                }
                            </tbody>
                        </table>
                    </div>)
    }
}

export default TableFormat;