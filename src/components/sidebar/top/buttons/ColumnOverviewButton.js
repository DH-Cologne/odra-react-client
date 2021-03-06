import React, {Component} from 'react';
import Radium from "radium";

class ColumnOverviewButton extends Component {


    getIcon(){
        switch (this.props.column.type) {
            case ("socialmedia"):
                return "fas fa-hashtag";
            case ("query"):
                return "fas fa-search";
            case ("source"):
                return "far fa-newspaper";
            default:
                return "";
        }
    }

    getHashTagListFromString(querys){
        let out = "";
        querys.split(",").forEach((hashtag) => {
            out = out + " #"+hashtag;
        });
        out = out +" ";
        return out;
    }


    render() {
        let query = (this.props.column.query == "" || this.props.column.query == "null") ? "" : this.getHashTagListFromString(this.props.column.query);

        let icon = this.getIcon();




        return (
            <React.Fragment>
                <div className="row" style={[{paddingTop: "1rem", cursor: "pointer"}, hoverStyle]}
                     key={this.props.column.id}>
                    <div className="col-2">
                        <i style={{
                            float: "left", color: "#c6c6c6",
                            paddingTop: "0.7rem",
                            fontSize: "1.4rem"
                        }} className={icon}></i>
                    </div>
                    <div className="col-10" style={{paddingLeft: "1.4rem"}}>
                        <span
                            style={{
                                display: "block",
                                fontSize: "0.9rem"
                            }}>{this.props.column.type[0].toUpperCase() + this.props.column.type.slice(1)}</span>
                        <span style={{
                            display: "block",
                            fontSize: "0.7rem",
                            opacity: "0.6"
                        }}>{query}@{this.props.column.source[0].toUpperCase() + this.props.column.source.slice(1)}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ColumnOverviewButton = Radium(ColumnOverviewButton);




const hoverStyle = {
    ':hover': {
        filter: "brightness(3)"
    }
}

export default ColumnOverviewButton;