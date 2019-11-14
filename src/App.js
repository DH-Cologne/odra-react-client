import React, {Component} from 'react';
import './App.css';
import './fontawesome/css/all.css';

import Sidebar from "./components/sidebar/Sidebar";
import ArticleColumn from "./components/columns/articles/SourceColumn";
import QueryColumn from "./components/columns/query/QueryColumn";


//TODO finish QueryArticle


class App extends Component {

    state = {
        newsColumns: [
            {
                id: "1",
                type: "source",
                source: "spiegel",
                query:""
            }, {
                id: "2",
                type: "source",
                source: "pikio",
                query:""
            },
            {
                id: "3",
                type: "query",
                source: "all",
                query:"Tesla"
            },{
                id: "5",
                type: "query",
                source: "pikio",
                query:"fake"
            },
            {
                id: "4",
                type: "query",
                source: "spiegel",
                query:"Trump"
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <Sidebar newsColumns={this.state.newsColumns}/>
                <div style={columnWrapper}>
                    {this.state.newsColumns.map((column) => {
                        switch (column.type) {
                            case "source":
                                return <ArticleColumn column={column}/>
                                break;
                            case "query":
                                return <QueryColumn column={column}/>
                                break;
                        }
                    })}
                </div>
            </div>
        );
    }
}

const columnWrapper = {
    marginLeft: "12.5rem",
    whiteSpace: "nowrap"
}

export default App;
