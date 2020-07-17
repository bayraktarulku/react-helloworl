import React from 'react';


export class Footer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="copyright">
                Designed and built by <br/>
                <a href="https://github.com/bayraktarulku" target="_blank">@bayraktarulku</a>,
            </div>
        )
    }
}
